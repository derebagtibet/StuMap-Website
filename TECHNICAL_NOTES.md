# StuMap Website - Technical Development Notes

## Overview

This document outlines how to properly implement features, structure code, and follow best practices for the StuMap Website project.

---

## 1. PROJECT SETUP & INITIALIZATION

### Initial Setup Steps

```bash
# Create project with Vite + React + TypeScript
npm create vite@latest stumap-website -- --template react-ts

# Navigate to project
cd stumap-website

# Install core dependencies
npm install

# Install required libraries
npm install react-router-dom framer-motion axios lucide-react clsx tailwind-merge

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind
npx tailwindcss init -p
```

### Tailwind Configuration

**File: `tailwind.config.js`**

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8A00E6",    // Purple
        dark: "#061B4E",       // Navy
        accent: "#FF8A00",     // Orange
        success: "#166B00",    // Green
        light: "#EEF1FF",      // Light Lavender
      },
    },
  },
  plugins: [],
}
```

**File: `src/index.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Global styles here */
```

---

## 2. FOLDER STRUCTURE & ORGANIZATION

### Required Folder Architecture

```
src/
├── assets/
│   ├── images/          # PNG, JPG, SVG images
│   ├── icons/           # Icon assets
│   └── fonts/           # Custom fonts (if needed)
│
├── components/
│   ├── common/          # Shared UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── SectionTitle.tsx
│   │   └── Input.tsx
│   │
│   ├── layout/          # Layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── MainLayout.tsx
│   │
│   └── sections/        # Page sections
│       ├── home/
│       │   ├── HeroSection.tsx
│       │   ├── UserTypeCards.tsx
│       │   ├── WhyStumapSection.tsx
│       │   ├── TestimonialSection.tsx
│       │   └── DownloadCTA.tsx
│       └── career/
│           ├── CareerHeroSection.tsx
│           └── CareerTestCardsSection.tsx
│
├── pages/               # Route pages
│   ├── HomePage.tsx
│   └── CareerTestPage.tsx
│
├── router/              # Routing configuration
│   └── AppRouter.tsx
│
├── services/            # API & data services
│   ├── api.ts
│   └── careerService.ts
│
├── constants/           # Static constants
│   ├── routes.ts
│   ├── colors.ts
│   └── texts.ts
│
├── hooks/               # Custom React hooks
│
├── styles/              # Global styles
│   └── globals.css
│
├── types/               # TypeScript types
│
├── utils/               # Utility functions
│
├── App.tsx
└── main.tsx
```

---

## 3. COMPONENT DEVELOPMENT GUIDELINES

### Component Naming & Structure

**Rule:** Use **PascalCase** for all component files

```typescript
// ✅ CORRECT
// src/components/common/Button.tsx
export const Button = ({ children, variant = "primary" }: ButtonProps) => {
  return (
    <button className={`btn btn-${variant}`}>
      {children}
    </button>
  );
};

// ❌ INCORRECT
// button.tsx or myButton.tsx
```

### Component Template

```typescript
// src/components/common/Button.tsx
import { ReactNode } from "react";
import { clsx } from "clsx";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  className,
}: ButtonProps) => {
  const baseStyles = "font-medium rounded-lg transition-all duration-300";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-opacity-90",
    secondary: "bg-gray-200 text-dark hover:bg-gray-300",
    outline: "border-2 border-primary text-primary hover:bg-light",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

### Common Component Examples

#### Button Component

```typescript
// src/components/common/Button.tsx
interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({ 
  children, 
  variant = "primary", 
  size = "md",
  ...props 
}: ButtonProps) => {
  // Implementation
};
```

#### Card Component

```typescript
// src/components/common/Card.tsx
interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card = ({ children, className, hoverable = false }: CardProps) => {
  return (
    <div
      className={clsx(
        "bg-white rounded-lg shadow-md p-6",
        hoverable && "hover:shadow-lg transition-shadow",
        className
      )}
    >
      {children}
    </div>
  );
};
```

#### Container Component

```typescript
// src/components/common/Container.tsx
interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={clsx("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
};
```

---

## 4. STYLING BEST PRACTICES

### TailwindCSS Usage Rules

✅ **DO:**
- Use utility classes for styling
- Use `clsx` for conditional classes
- Create reusable component patterns
- Use Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`

❌ **DON'T:**
- Create large custom CSS files
- Use inline styles
- Mix styled-components with Tailwind
- Hardcode colors without theme constants

### Responsive Design Example

```typescript
// ✅ CORRECT - Responsive Tailwind
export const ResponsiveSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Content stacks on mobile, 2 cols on tablet, 3 cols on desktop */}
    </div>
  );
};

// ❌ INCORRECT - No responsive design
export const ResponsiveSection = () => {
  return <div className="grid grid-cols-3 gap-4">{/* Always 3 cols */}</div>;
};
```

### Breakpoint Reference

| Breakpoint | Screen Width |
|---|---|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |
| `2xl:` | 1536px |

---

## 5. ROUTING SETUP

### Router Configuration

**File: `src/router/AppRouter.tsx`**

```typescript
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CareerTestPage from "../pages/CareerTestPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/kariyer-testi",
    element: <CareerTestPage />,
  },
]);
```

### Main Entry Point

**File: `src/main.tsx`**

```typescript
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/AppRouter";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

### Route Constants

**File: `src/constants/routes.ts`**

```typescript
export const ROUTES = {
  HOME: "/",
  CAREER_TEST: "/kariyer-testi",
} as const;
```

### Using Routes in Navigation

```typescript
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate(ROUTES.HOME)}>Home</button>
      <button onClick={() => navigate(ROUTES.CAREER_TEST)}>Career Test</button>
    </nav>
  );
};
```

---

## 6. TYPESCRIPT BEST PRACTICES

### Type Definitions

**File: `src/types/index.ts`**

```typescript
// Define interfaces for common data structures
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface CareerTest {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
```

### Component Props Typing

```typescript
// ✅ CORRECT - Typed props
interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  onCTAClick?: () => void;
}

export const HeroSection = ({
  title,
  subtitle,
  imageSrc,
  onCTAClick,
}: HeroSectionProps) => {
  return (
    // JSX
  );
};

// ❌ INCORRECT - No types or "any" type
export const HeroSection = (props: any) => {
  // JSX
};
```

---

## 7. STATE MANAGEMENT

### Using React Hooks

```typescript
// ✅ USE - Simple useState for local state
import { useState } from "react";

export const TestComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// ✅ USE - useContext for shared state across components
import { createContext, useContext, ReactNode } from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme: () => setIsDark(!isDark),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

// ❌ AVOID - Redux (not needed for this project)
```

---

## 8. API INTEGRATION

### Axios Setup

**File: `src/services/api.ts`**

```typescript
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Optional: Add interceptors for auth tokens
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
    }
    return Promise.reject(error);
  }
);
```

### Service Layer Example

**File: `src/services/careerService.ts`**

```typescript
import { api } from "./api";
import { CareerTest, ApiResponse } from "../types";

export const careerService = {
  // Get all career tests
  getTests: async (): Promise<CareerTest[]> => {
    const response = await api.get<ApiResponse<CareerTest[]>>("/career-tests");
    return response.data.data;
  },

  // Get single career test
  getTest: async (id: string): Promise<CareerTest> => {
    const response = await api.get<ApiResponse<CareerTest>>(`/career-tests/${id}`);
    return response.data.data;
  },

  // Submit test results
  submitTestResults: async (testId: string, results: unknown) => {
    const response = await api.post(`/career-tests/${testId}/submit`, results);
    return response.data;
  },
};
```

### Using Services in Components

```typescript
import { useEffect, useState } from "react";
import { careerService } from "../services/careerService";
import { CareerTest } from "../types";

export const CareerTestsPage = () => {
  const [tests, setTests] = useState<CareerTest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const data = await careerService.getTests();
        setTests(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load tests");
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {tests.map((test) => (
        <div key={test.id}>{test.title}</div>
      ))}
    </div>
  );
};
```

---

## 9. ANIMATIONS WITH FRAMER MOTION

### Basic Animation Patterns

```typescript
import { motion } from "framer-motion";

// ✅ Fade-in animation
export const FadeInSection = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

// ✅ Hover effects
export const HoverCard = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

// ✅ Staggered children animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export const CardGrid = ({ cards }: { cards: string[] }) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-4"
      variants={container}
      initial="hidden"
      whileInView="show"
    >
      {cards.map((card) => (
        <motion.div key={card} variants={item}>
          {card}
        </motion.div>
      ))}
    </motion.div>
  );
};
```

### Animation Best Practices

✅ **DO:**
- Use `whileInView` for section reveals
- Set `once: true` to animate only once
- Keep animations smooth (0.3-0.6 seconds)
- Use `initial` and `animate` for clear states

❌ **DON'T:**
- Animate too fast (jerky feel)
- Animate too slow (boring)
- Animate every element
- Use complex animations on slow devices

---

## 10. NAMING CONVENTIONS

### Files & Folders

```
// ✅ CORRECT
src/components/common/Button.tsx
src/components/sections/home/HeroSection.tsx
src/pages/HomePage.tsx
src/services/careerService.ts
src/hooks/useCareerTest.ts
src/types/index.ts
src/utils/formatDate.ts
src/constants/colors.ts

// ❌ INCORRECT
src/components/button.tsx
src/components/HeroSection/HeroSection.tsx
src/pages/home.tsx
src/services/career.ts
src/hooks/careerTest.ts
```

### Variables & Functions

```typescript
// ✅ CORRECT - camelCase
const [isLoading, setIsLoading] = useState(false);
const handleSubmit = () => {};
const getUserName = (id: string) => {};

// ❌ INCORRECT
const [IsLoading, SetIsLoading] = useState(false);
const [is_loading, set_is_loading] = useState(false);
const handle_submit = () => {};
```

### Constants

```typescript
// ✅ CORRECT - UPPER_CASE
const MAX_RETRIES = 3;
const API_TIMEOUT = 5000;
const DEFAULT_PAGE_SIZE = 10;

// ❌ INCORRECT
const maxRetries = 3;
const apiTimeout = 5000;
```

---

## 11. GIT WORKFLOW

### Branch Naming Convention

```
feature/navbar              # New feature
feature/home-page           # Feature scope
feature/responsive-layout   # Feature with description
fix/mobile-overflow         # Bug fixes
refactor/component-structure # Code improvements
docs/setup-guide           # Documentation
```

### Commit Message Format

```
feat: implement hero section with animations
fix: resolve mobile navbar overflow issue
refactor: extract button styles to utility function
docs: add component documentation
style: format code with prettier
```

### Example Workflow

```bash
# Create feature branch
git checkout -b feature/hero-section

# Make changes, then commit
git add .
git commit -m "feat: implement hero section with animations"

# Push branch
git push origin feature/hero-section

# Create Pull Request on GitHub
```

---

## 12. PERFORMANCE OPTIMIZATION

### Code Splitting with React.lazy

```typescript
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../pages/HomePage"));
const CareerTestPage = lazy(() => import("../pages/CareerTestPage"));

export const AppRouter = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kariyer-testi" element={<CareerTestPage />} />
      </Routes>
    </Suspense>
  );
};
```

### Image Optimization

```typescript
// ✅ CORRECT - Responsive images
export const HeroImage = () => {
  return (
    <img
      src="/src/assets/images/hero-desktop.png"
      alt="Hero section"
      className="w-full h-auto"
      loading="lazy"
    />
  );
};

// Use srcset for different screen sizes
export const ResponsiveHeroImage = () => {
  return (
    <img
      src="/src/assets/images/hero-mobile.png"
      srcSet="
        /src/assets/images/hero-mobile.png 640w,
        /src/assets/images/hero-tablet.png 1024w,
        /src/assets/images/hero-desktop.png 1920w
      "
      sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
      alt="Hero section"
      className="w-full h-auto"
    />
  );
};
```

### Avoid Unnecessary Re-renders

```typescript
import { memo, useCallback } from "react";

// ✅ Memoize components that don't need frequent updates
interface CardProps {
  title: string;
  description: string;
}

export const Card = memo(({ title, description }: CardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
});

// ✅ Use useCallback for event handlers
export const ListComponent = ({ items }: { items: string[] }) => {
  const handleClick = useCallback((item: string) => {
    console.log("Clicked:", item);
  }, []);

  return (
    <ul>
      {items.map((item) => (
        <li key={item} onClick={() => handleClick(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
};
```

---

## 13. ACCESSIBILITY GUIDELINES

### Semantic HTML

```typescript
// ✅ CORRECT - Semantic HTML
export const MainContent = () => {
  return (
    <main>
      <section>
        <h1>Welcome to StuMap</h1>
        <p>Start your career journey</p>
      </section>
      
      <article>
        <h2>Career Guidance</h2>
        <p>Learn about your future</p>
      </article>
    </main>
  );
};

// ❌ INCORRECT - Non-semantic
export const MainContent = () => {
  return (
    <div>
      <div>
        <div>Welcome to StuMap</div>
        <div>Start your career journey</div>
      </div>
    </div>
  );
};
```

### Keyboard Navigation

```typescript
// ✅ CORRECT - Accessible button
export const AccessibleButton = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Action button"
    >
      {children}
    </button>
  );
};
```

### Alt Text for Images

```typescript
// ✅ CORRECT
<img src="logo.png" alt="StuMap logo" />
<img src="hero-image.png" alt="Student studying with laptop" />

// ❌ INCORRECT
<img src="logo.png" />
<img src="hero-image.png" alt="image" />
```

---

## 14. TESTING CHECKLIST

Before pushing code, verify:

- [ ] Component matches Figma design
- [ ] Responsive on mobile (< 640px)
- [ ] Responsive on tablet (640px - 1024px)
- [ ] Responsive on desktop (> 1024px)
- [ ] No console errors or warnings
- [ ] Navigation links work correctly
- [ ] Animations are smooth
- [ ] Images load properly
- [ ] Forms are accessible
- [ ] TypeScript types are correct
- [ ] Code follows naming conventions
- [ ] No hardcoded values or magic numbers
- [ ] Performance is acceptable
- [ ] Accessibility guidelines met

---

## 15. ENVIRONMENT SETUP

### Environment Variables

**File: `.env.example`**

```
VITE_API_URL=http://localhost:3000/api
```

**File: `.env.local` (not committed)**

```
VITE_API_URL=http://localhost:3000/api
```

### Using Environment Variables

```typescript
// src/services/api.ts
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";
```

---

## 16. DEVELOPMENT WORKFLOW

### Starting Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Useful Commands

```bash
# Format code with Prettier (if installed)
npm run format

# Lint code
npm run lint

# Type checking
npm run type-check
```

---

## Quick Reference

### Common Component Pattern

```typescript
// src/components/sections/home/HeroSection.tsx
import { motion } from "framer-motion";
import { Container } from "../../common/Container";
import { Button } from "../../common/Button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  onCTAClick?: () => void;
}

export const HeroSection = ({
  title,
  subtitle,
  onCTAClick,
}: HeroSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 md:py-24 bg-gradient-to-b from-light to-white"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              {title}
            </h1>
            <p className="text-lg text-gray-600 mb-8">{subtitle}</p>
            <Button onClick={onCTAClick}>Get Started</Button>
          </div>
          <div>
            {/* Image or illustration */}
          </div>
        </div>
      </Container>
    </motion.section>
  );
};
```

---

## Summary

Follow these technical notes when developing the StuMap Website:

1. **Structure:** Organize files in the proper folder structure
2. **Components:** Create reusable, typed components with PascalCase names
3. **Styling:** Use TailwindCSS utilities, avoid custom CSS
4. **Routing:** Define all routes in AppRouter with constants
5. **Types:** Always define TypeScript interfaces for props and data
6. **State:** Use useState and useContext, avoid Redux
7. **APIs:** Use the services layer with Axios
8. **Animations:** Keep them subtle and smooth with Framer Motion
9. **Performance:** Optimize images, lazy load routes, avoid unnecessary renders
10. **Accessibility:** Use semantic HTML, proper alt text, keyboard navigation
11. **Git:** Follow branch and commit naming conventions
12. **Testing:** Verify responsive design and functionality before pushing

For questions or clarifications, refer back to this document or check the Figma design specifications.
