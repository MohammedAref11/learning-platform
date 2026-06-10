# Learning Platform - Chrome Extension Development

A comprehensive interactive learning platform built with **React**, **GSAP**, and **Tailwind CSS** for mastering Chrome extension development over 14 weeks.

## Features

✨ **Interactive Learning**
- Animated hero section and smooth transitions
- Tab-based content navigation (Concept, Code, Best Practices, Resources, Quiz)
- Real-time code examples with copy functionality
- Glossary of technical terms with simple explanations

🎯 **Structured Curriculum**
- 14-week roadmap from fundamentals to production
- Week 1: JavaScript Engine Fundamentals (Call Stack, Memory Heap, Closures)
- Real-world use cases and industry best practices
- Progressive difficulty increase

📚 **Learning Materials**
- Deep conceptual explanations with under-the-hood breakdowns
- Bad vs. good code examples (anti-patterns)
- Common mistakes and how to avoid them
- Curated external resources for each section

✅ **Assessment**
- End-of-section quizzes with passing requirements
- Progress tracking dashboard
- Visual feedback for correct/incorrect answers

🎨 **Design System**
- Bold design system with primary (#0077BC), secondary (#009866) colors
- Archivo Black font for display text
- Tailwind CSS for responsive, utility-first styling
- GSAP for smooth animations and scroll triggers

## Tech Stack

- **React 18** - Component framework
- **React Router** - Client-side routing
- **GSAP 3** - Animation library
- **Tailwind CSS** - Utility-first styling
- **Vite** - Build tool and dev server
- **PostCSS** - CSS processing

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/MohammedAref11/learning-platform.git
cd learning-platform

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The development server will open at `http://localhost:3000`

## Project Structure

```
learning-platform/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx       # Top navigation bar
│   │   ├── Hero.jsx             # Landing page hero section
│   │   ├── Footer.jsx           # Footer with links
│   │   ├── Section.jsx          # Reusable section component
│   │   ├── WeekCard.jsx         # Week card component
│   │   ├── CodeBlock.jsx        # Code highlighting component
│   │   └── Quiz.jsx             # Interactive quiz component
│   ├── pages/
│   │   ├── Dashboard.jsx        # Learning dashboard with progress
│   │   └── Week1.jsx            # Week 1 full curriculum
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── vite.config.js               # Vite configuration
└── package.json                 # Dependencies and scripts
```

## Week 1: JavaScript Engine Fundamentals

The first week covers:

### Topics
1. **Call Stack** - Function execution tracking
2. **Memory Heap** - Object storage and garbage collection
3. **Closures** - Function scope and lexical binding

### Learning Path
- 📖 Concept explanations with real-world analogies
- 💻 Code examples: good vs. bad patterns
- ⚠️ Common mistakes and how to prevent them
- 🏗️ Real-world module patterns
- 📚 Curated resources for deeper learning
- ✅ Interactive quiz to validate understanding

### Glossary
- **Call Stack**: Memory structure tracking function execution order
- **Heap**: Large memory area for storing objects and arrays
- **Closure**: Function retaining access to outer scope variables
- **Lexical Scope**: Scope determined by code position, not execution time
- **Execution Context**: Environment where code executes
- **Garbage Collection**: Automatic memory cleanup process

## Roadmap

- **Week 1-3**: JavaScript Fundamentals
- **Week 4-7**: Chrome Extension Architecture
- **Week 8**: Frontend Styling
- **Week 9**: AI Integration
- **Week 10**: Security
- **Week 11-12**: Backend Services & Payments
- **Week 13-14**: Deployment & Publishing

## Colors & Typography

### Color Palette
- **Primary**: #0077BC (Bold Blue)
- **Secondary**: #009866 (Bold Green)
- **Success**: #16A34A (Green)
- **Warning**: #D97706 (Amber)
- **Danger**: #DC2626 (Red)
- **Surface**: #111111 (Deep Black)
- **Text**: #111827 (Near Black)

### Typography
- **Display Font**: Archivo Black
- **Body Font**: Archivo Black
- **Mono Font**: JetBrains Mono
- **Scale**: Desktop-first with expressive sizes

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Support

For questions or issues:
- Open an issue on GitHub
- Check existing documentation
- Review course resources

## Acknowledgments

- Bold Design System by typeui.sh
- FreeCodeCamp JavaScript Course
- MDN Web Docs
- JavaScript.info
- GSAP Animation Library
- Tailwind CSS Framework
