# The Partnership - Dual Portfolio Website

A modern, aesthetic, and highly interactive single-page dual portfolio/introduction website for two partners (Person A & Person B). Built with **React**, **Vite**, and custom **CSS animations**, featuring a stunning 3D rotating sphere, cybernetic theme, and smooth scroll interactions.

## 🎨 Features

- **Cybernetic Dark Theme**: Deep dark background (`#0A0A0A`) with electric blue and vibrant magenta accents
- **3D Rotating Sphere Animation**: Beautiful multi-layered 3D sphere with 9 colorful rotating layers above the main title
- **Frosted Glass Effects**: Semi-transparent cards with backdrop blur for a modern, polished look
- **Dual Partner Layout**: Side-by-side responsive grid showcasing two distinct personalities and skill sets
- **Dynamic Project Showcase**: 3-column responsive grid displaying collaborative projects with hover effects
- **Smart Scroll Indicator**: Intelligent arrow that appears/disappears based on scroll position
- **Smooth Animations**: Gradient text effects, floating backgrounds, bounce animations, and hover transitions
- **Fully Responsive**: Desktop, tablet, and mobile optimized
- **Accessibility First**: Proper ARIA labels and semantic HTML throughout

## 📋 Sections

1. **Hero Section** - Eye-catching intro with 3D sphere and call-to-action buttons
2. **Dual Bio Section** - Detailed profiles for Person A (Creative Technologist) and Person B (Full Stack Engineer)
3. **Collaborative Projects** - 6+ showcase projects with technology tags and attribution
4. **Footer** - Social links, quick navigation, and contact information

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/karMareal1/KWK.git
   cd KWK
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5174/` (or the next available port)

### Building for Production

To build the optimized production version:

```bash
npm run build
```

This creates a `/dist` folder with minified assets ready for deployment.

To preview the production build locally:

```bash
npm run preview
```

## 🛠️ Technologies Used

- **React 19** - UI framework
- **Vite 7** - Lightning-fast build tool
- **CSS3** - All animations and styling (no CSS framework dependency)
- **JavaScript (ES6+)** - Component logic and interactions

## 📁 Project Structure

```
KWK/
├── src/
│   ├── App.jsx                  # Main React component
│   ├── ScrollDownIndicator.jsx  # Scroll indicator component
│   ├── index.css                # Global styles and animations
│   ├── App.css                  # Additional component styles
│   ├── main.jsx                 # Entry point
│   └── assets/
├── public/                       # Static assets
├── index.html                    # HTML template
├── package.json                  # Dependencies
├── vite.config.js                # Vite configuration
├── postcss.config.js             # PostCSS setup
└── README.md                     # This file
```

## 🎯 Customization Guide

### Edit Partner Information
In `src/App.jsx`, modify the `personA` and `personB` objects:

```jsx
const personA = {
  name: 'Your Name Here',
  title: 'Your Title',
  skills: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'],
  bio: 'Your bio text here...',
}
```

### Modify Projects
Update the `projects` array in `src/App.jsx` with your own projects:

```jsx
const projects = [
  {
    title: 'Project Name',
    description: 'Project description...',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    leadBy: 'A', // 'A', 'B', or 'both'
  },
  // Add more projects...
]
```

### Change Colors
Update the color variables in `src/index.css`:
- Electric Blue: `#00D9FF`
- Vibrant Magenta: `#FF1493`
- Background: `#0A0A0A`
- Text: `#E8E8F0`

### Adjust Animations
Modify the `@keyframes` in `src/index.css`:
- `pulse-glow` - Text glow animation
- `bounce-down` - Arrow bounce effect
- `float` - Background orb animation
- `girar` - 3D sphere rotation

## 🌐 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Push to GitHub with `/dist` in your repo
3. Enable GitHub Pages in repository settings pointing to the `/dist` folder

### Vercel
1. Connect your GitHub repo to Vercel
2. Vercel will auto-detect Vite and build automatically
3. Your site will be live in minutes

### Netlify
1. Connect your GitHub repo to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 📜 Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks

## ✨ Key Components

### ScrollDownIndicator
Smart component that:
- Uses `getBoundingClientRect()` for efficient position tracking
- Fades in/out smoothly as you scroll
- Hides when hero section leaves viewport
- Clickable to scroll down one viewport height

### 3D Rotating Sphere
Nine layered rotating spheres with:
- Smooth 8-second rotation cycle
- 9 vibrant colors (Magenta, Purple, Yellow, Green, Cyan, Blue, Deep Pink, Orange, Light Pink)
- 3D perspective transforms
- Continuous animation

## 🎨 Color Palette

| Element | Color | Hex |
|---------|-------|-----|
| Background | Deep Dark | `#0A0A0A` |
| Primary Accent | Electric Blue | `#00D9FF` |
| Secondary Accent | Vibrant Magenta | `#FF1493` |
| Text Primary | Soft White | `#E8E8F0` |
| Text Secondary | Muted Gray | `rgba(232, 232, 240, 0.6)` |

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (optimized grid)
- **Desktop**: > 1024px (full dual-column layout)

## 🤝 Contributing

Feel free to fork this repository and submit pull requests with improvements!

## 📄 License

This project is open source and available under the MIT License.

## 👥 Team

- **Person A** - Creative Technologist
- **Person B** - Full Stack Engineer

## 📧 Contact

For questions or inquiries, reach out through the social links in the footer!

---

**Built with passion for collaborative innovation.** 🚀
