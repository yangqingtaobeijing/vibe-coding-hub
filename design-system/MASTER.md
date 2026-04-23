# Vibe Coding Hub - Master Design System

基于 **UI/UX Pro Max** 规范设计的沉浸式、高性能展示平台。

## 1. 核心视觉理念 (Core Visual Concept)
- **风格**: Immersive Nebula (沉浸式星云)
- **关键词**: 创新、深空、流畅、专业、高科技
- **主要效果**: 
    - 高级玻璃拟态 (Glassmorphism)
    - 动态渐变背景
    - 细腻的颗粒感 (Film Grain)
    - 呼吸感发光 (Breathing Glow)

## 2. 配色方案 (Color Palette)
使用语义化 CSS 变量定义：

| 变量 | 色值 | 用途 |
| :--- | :--- | :--- |
| `--background` | `#050505` | 全局背景 |
| `--surface` | `rgba(20, 20, 22, 0.7)` | 卡片/容器表面层 |
| `--border` | `rgba(255, 255, 255, 0.08)` | 边框颜色 |
| `--primary` | `#6366f1` | 主色 (Indigo/Electric Blue) |
| `--secondary` | `#a855f7` | 辅色 (Purple) |
| `--accent` | `#f43f5e` | 强调色 (Rose) |
| `--foreground` | `#ffffff` | 主要文字 |
| `--muted` | `#94a3b8` | 次要/暗淡文字 |

## 3. 字体系统 (Typography)
- **标题 (Headings)**: `Outfit`, sans-serif (权重: 600, 700)
- **正文 (Body)**: `Inter`, sans-serif (权重: 400, 500)
- **行高**: 正文 1.6, 标题 1.1 - 1.2

## 4. 交互规则 (Interaction Rules)
- **悬停效果**: 卡片缩放 1.02x, 边框亮度提升, 阴影扩散。
- **点击反馈**: 缩放 0.96x (Spring Physics)。
- **动画时长**: 
    - 微交互: 200ms (Ease-out)
    - 页面入场: 600ms (Staggered Reveal)
    - 模态框: 400ms (Spring)

## 5. 组件规范 (Component Specs)
- **Navbar**: 
    - 悬浮式, 高斯模糊 (24px)
    - 底部细线描边 (border-b)
- **Card**:
    - 圆角: 24px
    - 背景: Glass effect + Grain texture
- **Modal**:
    - 全屏遮罩: `rgba(0,0,0,0.8)` + Blur
    - 容器动画: From bottom to center
