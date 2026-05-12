export const projects = [
  {
    id: "ecommerce-dashboard",
    title: "E-Commerce Dashboard",
    description:
      "A fully responsive admin dashboard for e-commerce with real-time analytics, inventory management, and order tracking.",
    longDescription:
      "Built a comprehensive e-commerce admin dashboard using Next.js and Tailwind CSS. Features include real-time sales analytics, inventory management system, order tracking, customer management, and dynamic charts. Optimized for performance with server-side rendering.",
    image: "/projects/ecommerce.png",
    tags: ["Next.js", "Tailwind CSS", "Chart.js", "MongoDB"],
    live: "https://demo.com",
    github: "https://github.com/kamrulhimel",
    featured: true,
    year: "2024",
    challenges:
      "Handling real-time data updates without performance degradation was the biggest challenge. Solved with optimistic UI and WebSocket integration.",
    features: [
      "Real-time analytics dashboard",
      "Inventory management",
      "Order tracking system",
      "Responsive design",
      "Dark mode support",
    ],
  },
  {
    id: "portfolio-v1",
    title: "Portfolio Website",
    description:
      "A stunning personal portfolio with smooth animations, glassmorphism design, and Framer Motion interactions.",
    longDescription:
      "Designed and built a premium portfolio website featuring glassmorphism UI, smooth page transitions with Framer Motion, Lenis smooth scroll, and a custom contact form using Resend API.",
    image: "/projects/portfolio.png",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "Resend"],
    live: "https://himel.dev",
    github: "https://github.com/kamrulhimel",
    featured: true,
    year: "2024",
    challenges:
      "Achieving smooth 60fps animations across all devices while maintaining accessibility.",
    features: [
      "Glassmorphism UI",
      "Framer Motion animations",
      "Lenis smooth scroll",
      "Contact form with Resend",
      "Fully responsive",
    ],
  },
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "Real-time weather application with location detection, 7-day forecast, and beautiful weather animations.",
    longDescription:
      "A weather application built with React and OpenWeatherMap API. Features geolocation-based weather, animated weather icons, 7-day forecast, and hourly breakdown.",
    image: "/projects/weather.png",
    tags: ["React", "OpenWeatherMap API", "CSS Animations"],
    live: "https://weather.himel.dev",
    github: "https://github.com/kamrulhimel",
    featured: false,
    year: "2024",
    challenges:
      "Handling async geolocation gracefully with fallback to default location.",
    features: [
      "Geolocation detection",
      "7-day forecast",
      "Animated weather icons",
      "Celsius/Fahrenheit toggle",
    ],
  },
  {
    id: "task-manager",
    title: "Task Manager App",
    description:
      "A drag-and-drop task management app with Kanban boards, priority levels, and local persistence.",
    longDescription:
      "Full-featured task manager with Kanban board UI, drag-and-drop functionality using dnd-kit, task priorities, due dates, and localStorage persistence.",
    image: "/projects/tasks.png",
    tags: ["React", "dnd-kit", "Tailwind CSS", "LocalStorage"],
    live: "https://tasks.himel.dev",
    github: "https://github.com/kamrulhimel",
    featured: false,
    year: "2023",
    challenges:
      "Implementing accessible drag-and-drop with keyboard support.",
    features: [
      "Kanban board UI",
      "Drag-and-drop",
      "Priority levels",
      "Local persistence",
      "Responsive design",
    ],
  },
  {
    id: "chat-app",
    title: "Real-time Chat App",
    description:
      "A real-time chat application with Firebase backend, user authentication, and live messaging.",
    longDescription:
      "Chat application built with React and Firebase. Features include Google authentication, real-time messaging, read receipts, emoji support, and image sharing.",
    image: "/projects/chat.png",
    tags: ["React", "Firebase", "Tailwind CSS"],
    live: "https://chat.himel.dev",
    github: "https://github.com/kamrulhimel",
    featured: false,
    year: "2023",
    challenges:
      "Managing Firebase real-time listeners efficiently to avoid memory leaks.",
    features: [
      "Google authentication",
      "Real-time messaging",
      "Read receipts",
      "Emoji support",
      "Image sharing",
    ],
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    description:
      "A minimal, fast blog platform with MDX support, syntax highlighting, and dark mode.",
    longDescription:
      "Personal blog platform built with Next.js App Router and MDX. Features server-side rendering, code syntax highlighting, table of contents, reading time, and SEO optimization.",
    image: "/projects/blog.png",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    live: "https://blog.himel.dev",
    github: "https://github.com/kamrulhimel",
    featured: true,
    year: "2024",
    challenges:
      "Optimizing MDX rendering performance and implementing incremental static regeneration.",
    features: [
      "MDX content",
      "Syntax highlighting",
      "Table of contents",
      "Reading time",
      "SEO optimized",
    ],
  },
];