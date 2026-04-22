export interface Project {
  id: string;
  title: string;
  description: string;
  vibeScore: number;
  imageUrl: string;
  tags: string[];
  howToVibe: string;
  sourceUrl?: string;
  author?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "1-Prompt Flappy Bird",
    description: "Recreated the classic Flappy Bird using a single prompt with Claude 3.5 Sonnet and Cursor.",
    vibeScore: 98,
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    tags: ["Game", "Cursor", "Claude 3.5"],
    howToVibe: "Developer prompted 'Create a complete Flappy Bird clone with HTML5 Canvas. Add collision detection, score counter, and increasing difficulty.' AI generated the whole file in one shot.",
    sourceUrl: "https://twitter.com/example/status/123",
    author: "@AI_Gamer"
  },
  {
    id: "2",
    title: "Personal Finance Dashboard",
    description: "A beautiful, fully functional finance dashboard generated entirely through v0.dev.",
    vibeScore: 92,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["Utility", "v0.dev", "UI"],
    howToVibe: "Used v0.dev with the prompt: 'A modern, dark-mode personal finance dashboard with glassmorphism cards, a line chart for expenses, and recent transaction list.'",
    sourceUrl: "https://v0.dev",
    author: "@UI_Wizard"
  },
  {
    id: "3",
    title: "Interactive 3D Solar System",
    description: "An interactive 3D solar system built with Three.js, completely coded by GPT-4o.",
    vibeScore: 95,
    imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=800",
    tags: ["Creative Arts", "Three.js", "GPT-4o"],
    howToVibe: "Prompted GPT-4o: 'Write a Three.js scene featuring the sun and 8 planets with their relative sizes and orbital speeds. Add orbit controls and starry background.'",
    sourceUrl: "https://github.com/example/solar",
    author: "@SpaceCoder"
  },
  {
    id: "4",
    title: "Voice-Controlled Snake Game",
    description: "Play classic snake by shouting 'up', 'down', 'left', 'right' into your microphone.",
    vibeScore: 99,
    imageUrl: "https://images.unsplash.com/photo-1526506456577-88849b2ba427?auto=format&fit=crop&q=80&w=800",
    tags: ["Game", "Just for Fun", "Web Speech API"],
    howToVibe: "Told Cursor to 'Add Web Speech API integration to this snake game so the snake turns based on voice commands. Handle speech recognition edge cases.'",
    sourceUrl: "https://reddit.com/r/webdev",
    author: "@VoiceHacker"
  }
];
