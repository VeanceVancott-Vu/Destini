import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Audio } from "expo-av";
import { storyData, StoryNode } from "./storyData";

const findNodeById = (id: number): StoryNode | undefined =>
  storyData.find((node) => node.id === id);

export default function App() {
  const [currentId, setCurrentId] = useState<number>(1);
  const [bgm, setBgm] = useState<Audio.Sound | null>(null);

  const currentNode = findNodeById(currentId);

  useEffect(() => {
    const loadMusic = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/music/bgm.mp3"),
        { isLooping: true, volume: 1 }
      );
      setBgm(sound);
      await sound.playAsync();
    };

    loadMusic();
    return () => {
      bgm?.unloadAsync();
    };
  }, []);

  const playClickSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sounds/click.mp3")
    );
    await sound.playAsync();
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.didJustFinish) {
        sound.unloadAsync();
      }
    });
  };

  const stopBgm = async () => {
    if (bgm) {
      await bgm.stopAsync();
    }
  };

  const handleChoice = async (nextId: number) => {
    await playClickSound();
    setCurrentId(nextId);
  };

  const restart = async () => {
    setCurrentId(1);
    await bgm?.playAsync();
  };

  useEffect(() => {
    if (currentNode?.isEnding) {
      stopBgm();
    }
  }, [currentNode]);

  if (!currentNode) return null;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.wrapper}>
        {currentNode.image && (
          <Image source={{ uri: currentNode.image }} style={styles.image} />
        )}

        <View style={styles.card}>
          <Text style={styles.storyText}>{currentNode.text}</Text>
        </View>

        {currentNode.isEnding ? (
          <TouchableOpacity style={styles.restartButton} onPress={restart}>
            <Text style={styles.choiceText}>Play Again</Text>
          </TouchableOpacity>
        ) : (
          currentNode.choices.map((choice, index) => (
            <TouchableOpacity
              key={index}
              style={styles.choiceButton}
              onPress={() => handleChoice(choice.nextId)}
            >
              <Text style={styles.choiceText}>{choice.text}</Text>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#020617" },
  wrapper: { padding: 20 },
  image: {
    width: "100%",
    height: 420,
    borderRadius: 12,
    marginBottom: 20,
    resizeMode: "cover",
  },
  card: {
    backgroundColor: "#0f172a",
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  storyText: { color: "#e2e8f0", fontSize: 16, lineHeight: 22 },
  choiceButton: {
    backgroundColor: "#1d4ed8",
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  choiceText: { color: "#f8fafc", fontSize: 16, textAlign: "center" },
  restartButton: {
    backgroundColor: "#22c55e",
    padding: 14,
    borderRadius: 10,
  },
});
