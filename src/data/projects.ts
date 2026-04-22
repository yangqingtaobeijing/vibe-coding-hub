export interface Project {
  id: string;
  titleEn: string;
  titleZh: string;
  descriptionEn: string;
  descriptionZh: string;
  vibeScore: number;
  imageUrl: string;
  tagsEn: string[];
  tagsZh: string[];
  howToVibeEn: string;
  howToVibeZh: string;
  sourceUrl?: string;
  author?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    titleEn: "Plywood Cutting Visualizer",
    titleZh: "木板切割可视化工具",
    descriptionEn: "A tool where users input dimensions to calculate how many pieces of wood can be cut and visualize the resulting scrap.",
    descriptionZh: "一个帮助木工计算材料的工具。输入木板尺寸，即可自动计算和可视化木板的最佳切割方案，并显示边角料。",
    vibeScore: 94,
    imageUrl: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=800",
    tagsEn: ["Utility", "Cursor", "Claude 3.5"],
    tagsZh: ["实用工具", "Cursor", "Claude 3.5"],
    howToVibeEn: "Prompted Cursor: 'Build a Next.js app to visualize 2D bin packing for plywood cutting. Users input sheet size and required cuts. Draw it on an HTML canvas.'",
    howToVibeZh: "在 Cursor 中提示：'构建一个 Next.js 应用，用于可视化木板切割的二维装箱算法。用户输入整板尺寸和需要的切割件，用 HTML canvas 画出来。'",
    author: "@WoodWorker_AI",
    sourceUrl: "https://cursor.com/"
  },
  {
    id: "2",
    titleEn: "Multiplayer Neon Snake",
    titleZh: "多人霓虹贪吃蛇",
    descriptionEn: "A real-time multiplayer snake game where users collect glowing orbs on a dark neon grid.",
    descriptionZh: "一个支持实时多人的贪吃蛇游戏，玩家在暗黑霓虹网格上收集发光的能量球。",
    vibeScore: 98,
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    tagsEn: ["Game", "WebSockets", "Cursor"],
    tagsZh: ["游戏", "WebSockets", "Cursor"],
    howToVibeEn: "Told Claude 3.5: 'Create a multiplayer snake game using Socket.io and Node.js. Make the frontend look like a retro 80s arcade with heavy neon glows.'",
    howToVibeZh: "告诉 Claude 3.5：'使用 Socket.io 和 Node.js 创建一个多人贪吃蛇游戏。前端要做成80年代复古街机风格，带有强烈的霓虹发光效果。'",
    author: "@NeonCoder",
    sourceUrl: "https://github.com/"
  },
  {
    id: "3",
    titleEn: "Timesheet Generator",
    titleZh: "智能考勤表生成器",
    descriptionEn: "Takes calendar photos and voice inputs to automatically generate comprehensive timesheet documents.",
    descriptionZh: "只需上传日历截图或发送语音，即可自动识别工作时长并生成完整的考勤表文档。",
    vibeScore: 92,
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
    tagsEn: ["Productivity", "GPT-4o", "Vision API"],
    tagsZh: ["生产力", "GPT-4o", "视觉识别"],
    howToVibeEn: "Prompt: 'Integrate GPT-4o Vision API. Let users upload an image of their scribbled calendar, parse the working hours, and export a polished PDF timesheet.'",
    howToVibeZh: "提示词：'集成 GPT-4o 视觉 API。允许用户上传手写日历的照片，解析工作时长，并导出一份精美的 PDF 考勤表。'",
    author: "@OfficeHacker",
    sourceUrl: "https://twitter.com/v0_dev"
  },
  {
    id: "4",
    titleEn: "3D Endless Runner",
    titleZh: "3D 无尽跑酷游戏",
    descriptionEn: "A fully playable 3D runner game built with Three.js featuring lane switching, jumping, and collectible power-ups.",
    descriptionZh: "使用 Three.js 构建的完整 3D 跑酷游戏，支持切换赛道、跳跃、滑行和收集道具。",
    vibeScore: 96,
    imageUrl: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&q=80&w=800",
    tagsEn: ["Game", "Three.js", "v0.dev"],
    tagsZh: ["游戏", "Three.js", "v0.dev"],
    howToVibeEn: "Iterated with v0: 'Generate a Three.js endless runner. Add a blue cube as the player, red obstacles, and green collectibles. Handle keyboard events for left/right movement.'",
    howToVibeZh: "通过 v0 迭代：'生成一个 Three.js 无尽跑酷游戏。主角是蓝色方块，障碍物是红色，收集品是绿色。处理左右移动的键盘事件。'",
    sourceUrl: "https://v0.dev/",
    author: "@ThreeJS_AI"
  },
  {
    id: "5",
    titleEn: "Personal Finance Dashboard",
    titleZh: "个人财务仪表盘",
    descriptionEn: "A beautifully crafted personal finance dashboard generated entirely through v0.dev with modern UI components.",
    descriptionZh: "一个精美的个人财务数据看板，完全通过 v0.dev 生成，使用了极其现代的 UI 组件和动态图表。",
    vibeScore: 95,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tagsEn: ["UI", "v0.dev", "Dashboard"],
    tagsZh: ["UI界面", "v0.dev", "仪表盘"],
    howToVibeEn: "Used v0.dev with the prompt: 'A modern, Apple-style personal finance dashboard with glassmorphism cards, an area chart for expenses, and recent transaction list.'",
    howToVibeZh: "在 v0.dev 使用提示词：'一个现代的、苹果风格的个人财务看板。包含玻璃态卡片、支出面积图和近期交易列表。'",
    sourceUrl: "https://v0.dev/",
    author: "@UI_Wizard"
  },
  {
    id: "6",
    titleEn: "Mirror Tracing Brain Test",
    titleZh: "镜像描边脑力测试",
    descriptionEn: "A psychological brain test interactive experiment where users trace a pattern with reversed horizontal inputs.",
    descriptionZh: "一个心理学互动实验游戏，要求玩家在水平输入反转（镜像）的情况下，沿着给定的图案描边。",
    vibeScore: 99,
    imageUrl: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
    tagsEn: ["Experiment", "HTML5", "Cursor"],
    tagsZh: ["实验项目", "HTML5", "Cursor"],
    howToVibeEn: "Prompted Cursor: 'Build an HTML canvas app for the mirror tracing test. Invert the X-axis mouse movements. Track how many times they go outside the lines.'",
    howToVibeZh: "向 Cursor 提问：'用 HTML canvas 构建一个镜像描边测试。反转鼠标的 X 轴移动。记录玩家画出界外的次数。'",
    author: "@BrainHacker",
    sourceUrl: "https://github.com/"
  },
  {
    id: "7",
    titleEn: "Sky Metropolis",
    titleZh: "天空之城模拟器",
    descriptionEn: "A city management simulator that lets you build a virtual city in the clouds while fulfilling tasks provided by an AI.",
    descriptionZh: "一个高空城市建造模拟器。你需要在云端建造城市，并满足由 AI 随机生成的市民需求与突发任务。",
    vibeScore: 97,
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800",
    tagsEn: ["Game", "Simulation", "Claude 3.5"],
    tagsZh: ["游戏", "模拟经营", "Claude 3.5"],
    howToVibeEn: "Vibed with Claude: 'Write a React city builder game. The city floats in the sky. Use emojis for buildings. Add an AI governor that randomly triggers events like storms.'",
    howToVibeZh: "与 Claude 交流：'写一个 React 城市建造游戏。城市漂浮在空中，用 Emoji 代表建筑。增加一个 AI 市长，会随机触发风暴等事件。'",
    author: "@CloudMayor",
    sourceUrl: "https://cursor.com/"
  },
  {
    id: "8",
    titleEn: "Room Dimension Estimator",
    titleZh: "房间尺寸估算仪",
    descriptionEn: "A vision-based tool that analyzes a photo of a room to estimate its dimensions and overlay measurements.",
    descriptionZh: "基于视觉分析的工具，只需上传一张房间照片，AI 就会自动估算长宽并叠加测量线。",
    vibeScore: 91,
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    tagsEn: ["Utility", "AR", "Vision API"],
    tagsZh: ["实用工具", "AR增强现实", "视觉识别"],
    howToVibeEn: "Prompt: 'Create a web app where users upload a room photo. Pass it to GPT-4 Vision, ask for estimated depth and width, and draw measurement lines on the image.'",
    howToVibeZh: "提示词：'创建一个 web 应用，用户上传房间照片。将其传给 GPT-4 视觉模型，要求估算深度和宽度，并在图片上画出测量线。'",
    author: "@AR_Builder",
    sourceUrl: "https://openai.com/"
  },
  {
    id: "9",
    titleEn: "SEO Lead Calculator",
    titleZh: "SEO 流量转化计算器",
    descriptionEn: "A dynamic marketing tool designed to answer prospect questions and guide them through a marketing funnel.",
    descriptionZh: "一个动态的营销工具，能够预测网站的 SEO 流量趋势并计算潜在的线索转化率，用于引导客户购买服务。",
    vibeScore: 89,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tagsEn: ["Marketing", "React", "Cursor"],
    tagsZh: ["营销工具", "React", "Cursor"],
    howToVibeEn: "Cursor prompt: 'Build an interactive SEO ROI calculator. Users input current traffic and conversion rate. Show a dynamic line chart of 12-month projections if they hire us.'",
    howToVibeZh: "Cursor 提示：'构建一个交互式的 SEO 投资回报率计算器。用户输入当前流量和转化率。展示一个动态折线图，预测如果雇佣我们后未来 12 个月的数据增长。'",
    author: "@GrowthHacker",
    sourceUrl: "https://github.com/"
  },
  {
    id: "10",
    titleEn: "Voice Notepad (AudioScribe)",
    titleZh: "语音备忘录 (AudioScribe)",
    descriptionEn: "Records voice input, transcribes it instantly, and applies an AI optimization layer to polish the text format.",
    descriptionZh: "记录用户的语音输入，实时转录成文字，并通过 AI 层自动润色和排版（比如提取待办事项或会议纪要）。",
    vibeScore: 93,
    imageUrl: "https://images.unsplash.com/photo-1528318269466-69f944a1eb4a?auto=format&fit=crop&q=80&w=800",
    tagsEn: ["Productivity", "Web Speech API", "LLM"],
    tagsZh: ["生产力", "语音识别API", "大语言模型"],
    howToVibeEn: "Prompt: 'Use the browser Web Speech API to transcribe audio. Then send the transcript to an LLM to automatically format it into bullet points and action items.'",
    howToVibeZh: "提示词：'使用浏览器的语音识别 API 转录音频。然后将转录文本发送给大语言模型，自动格式化为项目符号和待办事项列表。'",
    author: "@VoiceToText_AI",
    sourceUrl: "https://replit.com/"
  },
  // Adding 50 more cases below
  ...Array.from({ length: 50 }).map((_, index) => {
    const categories = [
      { en: "Productivity", zh: "生产力", tag: "Utility" },
      { en: "Game", zh: "游戏", tag: "Game" },
      { en: "Web3", zh: "Web3", tag: "Web3" },
      { en: "Design", zh: "设计工具", tag: "Creative Arts" },
      { en: "Fun", zh: "趣味整活", tag: "Just for Fun" }
    ];
    const cat = categories[index % categories.length];
    
    // Fallback image urls based on categories
    const images = [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800"
    ];

    const titlesEn = ["Regex Builder Visualizer", "Flappy Bird Clone", "Solana Wallet Tracker", "SVG Path Editor", "Meme Generator API", "Pomodoro Quest", "Retro Pong", "Gas Fee Predictor", "Color Palette AI", "Random Excuse Generator"];
    const titlesZh = ["正则表达式可视化生成器", "像素小鸟克隆", "Solana 钱包追踪器", "SVG 路径编辑器", "表情包生成器 API", "番茄钟 RPG", "复古弹球游戏", "Gas 费用预测器", "AI 调色板选色器", "随机借口生成器"];
    
    const i = index % 10;
    
    const validUrls = ["https://v0.dev/", "https://cursor.com/", "https://github.com/", "https://replit.com/"];
    
    return {
      id: String(11 + index),
      titleEn: `${titlesEn[i]} v${Math.floor(index/10) + 1}`,
      titleZh: `${titlesZh[i]} v${Math.floor(index/10) + 1}`,
      descriptionEn: `A unique vibe-coded project exploring the boundaries of ${cat.en.toLowerCase()} applications. Built with pure AI prompting.`,
      descriptionZh: `一个独特的意念编程项目，探索了${cat.zh}应用的边界。完全通过 AI 提示词构建。`,
      vibeScore: 80 + Math.floor(Math.random() * 20),
      imageUrl: images[index % images.length],
      tagsEn: [cat.en, "Cursor", "AI Generated"],
      tagsZh: [cat.zh, "Cursor", "AI 生成"],
      howToVibeEn: `Prompt: 'Build a Next.js ${titlesEn[i]} with a dark aesthetic. Use Framer Motion for transitions and ensure it works completely client-side.'`,
      howToVibeZh: `提示词：'构建一个深色美学风格的 Next.js ${titlesZh[i]}。使用 Framer Motion 处理过渡动画，并确保它完全在客户端运行。'`,
      author: `@VibeCoder_${11 + index}`,
      sourceUrl: validUrls[index % validUrls.length]
    };
  })
];
