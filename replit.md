# Portfolio Website - Volodymyr Shamanov

## Overview

This is a modern, responsive portfolio website built for Volodymyr Shamanov, a Senior Full-Stack Developer specializing in Laravel, Vue.js, React, and Node.js. The application showcases professional experience, technical skills, projects, and provides contact functionality. Built with Next.js 15, the site features a clean, professional design with dark/light theme support and smooth animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Rendering Strategy**
- Next.js 15 with App Router for modern React server/client component architecture
- Client-side rendering for interactive components with "use client" directive
- Static generation for optimal performance and SEO

**UI Component System**
- Radix UI primitives for accessible, unstyled component foundation
- shadcn/ui component library with "new-york" style variant
- Custom component composition in `/components` directory organized by feature
- Consistent design system using CSS variables and Tailwind utilities

**Styling & Design**
- Tailwind CSS for utility-first styling with custom configuration
- CSS custom properties (variables) for theme management in `globals.css`
- Dual theme support (light/dark) with HSL color system
- Typography: Inter (body), Poppins (headers), JetBrains Mono (code)
- Responsive design with mobile-first approach

**State Management & Data Fetching**
- TanStack Query (React Query) v5 for server state management
- Custom query client configuration with credential-based fetching
- Form state managed by React Hook Form with Zod validation
- Theme state persisted in localStorage via custom ThemeProvider context

**Animation & Interactivity**
- Framer Motion for page transitions and scroll animations
- React Intersection Observer for viewport-based animations
- Custom hover/active states using Tailwind utility classes

### Backend Architecture

**Database Layer**
- PostgreSQL database (configured for Neon serverless)
- Drizzle ORM for type-safe database operations
- Schema definition in `/shared/schema.ts` with Drizzle-Zod integration
- Database migrations managed in `/migrations` directory

**API Design**
- RESTful API pattern with fetch-based client requests
- Credential-based authentication using cookies
- Type-safe request/response handling with TypeScript
- Custom API utility functions in `/lib/queryClient.ts`

**Data Validation**
- Zod schemas for runtime type validation
- Form validation using @hookform/resolvers with Zod
- Database schema validation using drizzle-zod

### External Dependencies

**Core Framework**
- Next.js 15 (React framework with App Router)
- React 18+ (UI library)
- TypeScript (type safety)

**UI & Styling**
- Tailwind CSS (utility-first CSS framework)
- Radix UI (accessible component primitives)
- shadcn/ui (pre-built component library)
- Framer Motion (animation library)
- Lucide React (icon library)

**State & Data Management**
- TanStack Query v5 (server state management)
- React Hook Form (form state management)
- Zod (schema validation)

**Database & ORM**
- Drizzle ORM (TypeScript ORM)
- Drizzle Kit (migration tool)
- @neondatabase/serverless (PostgreSQL driver)
- PostgreSQL (database system)

**Development Tools**
- ESLint with Next.js config (code linting)
- PostCSS with Autoprefixer (CSS processing)
- drizzle-kit (database migrations)

**Third-Party Integrations**
- Google Fonts (Inter, Poppins, JetBrains Mono)
- Email functionality (mailto links for contact)

**Key Design Decisions**

1. **Next.js App Router**: Chosen for modern React patterns, improved performance, and better SEO capabilities
2. **Component-First Architecture**: Separates UI components from business logic for maintainability
3. **Type Safety**: Full TypeScript implementation with Zod validation ensures runtime type safety
4. **Theme System**: CSS variables enable dynamic theming without JavaScript overhead
5. **Accessibility**: Radix UI primitives provide ARIA-compliant, keyboard-navigable components
6. **Performance**: Static generation, code splitting, and optimized animations ensure fast load times
7. **Database Flexibility**: Drizzle ORM provides database-agnostic abstraction (currently configured for PostgreSQL)