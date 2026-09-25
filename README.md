# 📖 Destini - Interactive Story Adventure Game

**Destini** is a modern, interactive, choice-driven story adventure application built with **React Native**, **Expo Router**, and **TypeScript**. Players navigate through a dark fantasy realm where every decision shapes the story, altering the environment, choices, and final outcome.

---

## ✨ Features

- 🌲 **Branching Narrative Engine**: Interactive story paths with multiple choice nodes and custom narrative branches.
- 🖼️ **Dynamic Scene Illustrations**: High-quality contextual imagery for each story node to deepen immersion.
- 🎵 **Atmospheric Audio & Sound Effects**: 
  - Looping background music during active exploration using `expo-av`.
  - Tactile audio click feedback on choice selection.
  - Automatic music fade/stop when reaching story endings.
- 🏁 **Multiple Endings**: Discover various unique endings depending on your decisions (e.g., becoming the Forest Guardian, Fate Holder, or liberating the realm).
- 🔄 **Instant Replay**: "Play Again" functionality resets state and restarts background ambiance.
- 🎨 **Modern Dark UI**: Aesthetic dark mode theme styled with customized React Native `StyleSheet` tokens.

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: [React Native](https://reactnative.dev/) (v0.81.5) with [Expo](https://expo.dev/) (v54) & Expo Router
- **Language**: TypeScript
- **Audio Engine**: `expo-av`
- **UI Components**: `SafeAreaView`, `ScrollView`, `Image`, `TouchableOpacity`, `StyleSheet`

---

## 📁 Project Structure

```text
BossLevelChallenge-main/
├── app/
│   ├── index.tsx          # Main interactive story screen & audio management
│   └── storyData.ts       # Story node graphs, decision choices & images
├── assets/
│   ├── music/
│   │   └── bgm.mp3        # Atmospheric background music
│   └── sounds/
│       └── click.mp3      # Button click sound effect
├── package.json           # Project dependencies and Expo scripts
└── README.md              # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- **Expo Go** app on iOS/Android or an emulator for mobile preview, or web browser.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/VeanceVancott-Vu/Destini.git
   cd Destini
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the application**:
   ```bash
   # Run on Expo Web
   npm run web

   # Run with Expo CLI (Android / iOS / Expo Go)
   npm start
   ```

---

## 🎮 How to Play

1. Read the story prompt and observe the scene illustration.
2. Select one of the available choices to navigate through the branching paths.
3. Hear sound effects as you progress towards different outcomes.
4. Reach an ending node and click **Play Again** to restart your journey and explore alternative paths!

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).