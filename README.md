# Royal Jordanian Transport - Website By Hassaam Mughal

A modern, responsive, and animated corporate website for Royal Jordanian Transport, built with React, Vite, and Tailwind CSS. The website features smooth scrolling, complex animations, and a rich user interface to showcase the company's services, fleet, and mission.

## 🚀 Technologies Used

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**:
  - [GSAP](https://gsap.com/) (GreenSock Animation Platform)
  - [Framer Motion](https://www.framer.com/motion/)
  - [TW Animate CSS](https://www.npmjs.com/package/tw-animate-css)
- **Smooth Scrolling**: [Lenis](https://lenis.studiofreight.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) (Accessible components like Dialog, Tabs, Slots)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State/Props**: `class-variance-authority`, `clsx`, `tailwind-merge`
- **Linting**: ESLint 9

## 📂 Project Structure

```text
src/
├── assets/         # Static assets like images and fonts
├── components/     # Reusable UI components (e.g., SplitText, Radix UI primitives)
│   └── ui/         # Base UI components
├── constants/      # Site-wide constants and data
├── layout/         # Layout components (Header, Footer, Wrapper)
├── lib/            # Utility functions (e.g., tailwind merge logic)
├── sections/       # Main landing page sections
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Mission.jsx
│   ├── Customer.jsx
│   ├── Services.jsx
│   ├── Fleet.jsx
│   └── Contacts.jsx
├── App.jsx         # Main application component tying sections together
├── index.css       # Global styles and Tailwind imports
└── main.jsx        # React entry point
```

## ✨ Features

- **Smooth Scrolling**: Integrated Lenis for a premium, liquid-smooth scrolling experience.
- **Dynamic Animations**: Scroll-based and entrance animations powered by GSAP, `@gsap/react`, and Framer Motion.
- **Accessible UI**: Uses Radix UI for highly accessible and customizable components.
- **Responsive Navigation**: Mobile-ready layout with responsive structural wrappers.
- **Modern Styling**: Built on Tailwind CSS v4 with an elegant corporate color scheme (incorporating `#0A1C2E`).
- **Sectioned Landing Page**: Clean, single-page architecture with a logical content flow from Hero down to Contacts.

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed along with a package manager. The project repository includes a `bun.lock` file, meaning it was likely originally configured with Bun.

### Installation

1. Navigate to the project directory:

   ```bash
   cd website-royaljordaniantransport
   ```

2. Install the dependencies:
   ```bash
   bun install
   # or
   npm install
   # or
   yarn install
   ```

### Development Server

Start the Vite development server:

```bash
bun run dev
# or
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create an optimized production build:

```bash
bun run build
# or
npm run build
```

The compiled assets will be placed in the `dist/` folder, ready for deployment.

### Linting

To check the code against the configured ESLint rules:

```bash
bun run lint
# or
npm run lint
```
