export type Choice = {
  text: string;
  nextId: number;
};

export type StoryNode = {
  id: number;
  text: string;
  choices: Choice[];
  image?: any;
  isEnding?: boolean;
};

export const storyData: StoryNode[] = [
  {
    id: 1,
    text:
      "You find yourself in a mysterious forest with two paths ahead.",
    image: "https://plus.unsplash.com/premium_photo-1664304417409-ce873a180476?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFudGFzeSUyMGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    choices: [
      { text: "Go towards the village", nextId: 2 },
      { text: "Head to the mysterious tower", nextId: 3 },
    ],
  },
  {
    id: 2,
    text:
      "You enter the village, the villagers are worried. An old man approaches and warns about the tower.",
    image: "https://images.unsplash.com/photo-1642960418177-d9cd7a7feaf1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    choices: [
      { text: "Ask the old man more", nextId: 4 },
      { text: "Go back to the forest", nextId: 5 },
    ],
  },
  {
    id: 3,
    text:
      "You approach the tower, thick fog surrounds you. You hear a faint roar.",
    image: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    choices: [
      { text: "Continue forward", nextId: 6 },
      { text: "Go back", nextId: 2 },
    ],
  },
  {
    id: 4,
    text:
      "The old man tells you about the ancient crystal in the tower that can change fate.",
    image: "https://m.media-amazon.com/images/M/MV5BZTg3OTQ0NGEtYWI3Yy00ODRiLWFlYzEtMzUyZTI0NTRkZmM5XkEyXkFqcGdeQXNvbG5vbXM@._V1_.jpg",
    choices: [
      { text: "Destroy the crystal", nextId: 6 },
      { text: "Stay in the village", nextId: 7 },
    ],
  },
  {
    id: 5,
    text:
      "The forest becomes strange, the map gradually disappears. You seem to be lost.",
    image: "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    choices: [
      { text: "Follow your memory", nextId: 6 },
      { text: "Live in the forest", nextId: 8 },
    ],
  },
  {
    id: 6,
    text:
      "You stand before the ancient crystal in the tower.",
    image: "https://images.unsplash.com/photo-1508970057347-0524a45ebdff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    choices: [
      { text: "Make a wish", nextId: 9 },
      { text: "Destroy the crystal", nextId: 10 },
    ],
  },

  // ENDINGS
  {
    id: 7,
    text:
      "You live a peaceful life in the village. THE END.",
    image: "https://images.unsplash.com/photo-1508325739122-c57a76313bf4?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    choices: [],
    isEnding: true,
  },
  {
    id: 8,
    text:
      "You become the forest guardian. THE END.",
    image: "https://images.unsplash.com/photo-1426170042593-200f250dfdaf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    choices: [],
    isEnding: true,
  },
  {
    id: 9,
    text:
      "You become the fate holder. THE END.",
    image: "https://images.unsplash.com/photo-1477313372947-d68a7d410e9f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    choices: [],
    isEnding: true,
  },
  {
    id: 10,
    text:
      "You destroy the crystal, freeing the world from fate. THE END.",
    image: "https://images.unsplash.com/photo-1760266111889-19337741d112?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVhY2VmdWwlMjB2aWxsYWdlfGVufDB8fDB8fHww",
    choices: [],
    isEnding: true,
  },
];
