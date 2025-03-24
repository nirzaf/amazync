# NameHost - Modern Web Hosting Platform

[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.2-purple.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.0-38B2AC.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.5.0-ff69b4.svg)](https://www.framer.com/motion/)

## Overview

NameHost is a modern, responsive web hosting platform that offers a variety of hosting solutions including shared hosting, CMS hosting, reseller hosting, VPS hosting, and email hosting. The platform features a sleek, user-friendly interface built with React, TypeScript, and TailwindCSS.

## Features

- **Multiple Hosting Options**: Shared, CMS, Reseller, VPS, and Email hosting solutions
- **Lightning Fast Speed**: Optimized servers and SSD storage for blazing-fast website loading times
- **99.9% Uptime Guarantee**: Industry-leading uptime guarantee with redundant infrastructure
- **Free SSL Certificate**: Secure websites with free SSL certificates
- **24/7 Support**: Expert support team available around the clock
- **Daily Backups**: Automatic daily backups to prevent data loss
- **DDoS Protection**: Advanced security measures against DDoS attacks and other threats
- **Responsive Design**: Fully responsive UI that works on all devices
- **Animated UI Components**: Smooth animations powered by Framer Motion
- **Theme Context**: Consistent theming across the application

## Technology Stack

- **Frontend Framework**: React 19.0.0
- **Language**: TypeScript 5.8.2
- **Build Tool**: Vite 6.2.2
- **CSS Framework**: TailwindCSS 3.3.0
- **Animation Library**: Framer Motion 12.5.0
- **Icons**: Lucide React 0.483.0
- **Routing**: React Router DOM 7.3.0
- **Utility Library**: clsx 2.1.1

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/nirzaf/amazync.git
   cd amazync
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

### Building for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

```
/
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable UI components
│   ├── context/       # React context providers
│   ├── pages/         # Page components
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # Application entry point
│   └── index.css      # Global styles
├── index.html         # HTML template
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
└── tailwind.config.js # TailwindCSS configuration
```

## Color Scheme

The application uses a consistent color scheme defined in the ThemeContext:

- **Glaucous**: #7882B6
- **Lavender Web**: #DBD9EC
- **Persian Blue**: #1934B6
- **International Klein Blue**: #192C99
- **Chili Red**: #EC3A1C

## Components

- **HeroSection**: Main landing section with call-to-action
- **PricingCards**: Interactive pricing cards for different hosting plans
- **Features**: Highlights key features of the hosting service
- **Testimonials**: Customer testimonials and reviews
- **FAQ**: Frequently asked questions section
- **Footer**: Site footer with links and information

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)