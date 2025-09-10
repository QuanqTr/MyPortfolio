# Portfolio Website

## Overview

This is a modern full-stack portfolio website built with React on the frontend and Express.js on the backend. The application features a personal portfolio showcasing projects, experience, achievements, and a blog system. It includes a contact form for potential clients and employers to reach out. The design emphasizes modern UI with glass morphism effects, gradients, and smooth animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible components
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring glass morphism effects and gradient designs
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful API endpoints for blog posts and contact messages
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development
- **Middleware**: Custom logging middleware for API request tracking
- **Development**: Hot module replacement with Vite integration for seamless development experience

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **ORM**: Drizzle ORM with type-safe schema definitions and migrations
- **Connection**: Neon Database serverless PostgreSQL for cloud deployment
- **Schema**: Structured tables for users, blog posts, and contact messages with UUID primary keys
- **Development Storage**: In-memory storage implementation with sample data for rapid development

### Authentication and Authorization
- **Architecture**: Prepared for session-based authentication with PostgreSQL session storage
- **Session Management**: connect-pg-simple for PostgreSQL session store
- **Security**: Currently no authentication implemented, but infrastructure ready for user management

### Component Architecture
- **Design System**: Glass morphism design with custom UI components
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Animations**: Custom parallax effects, floating elements, and smooth scroll interactions
- **Performance**: Lazy loading, scroll progress tracking, and optimized animations

## External Dependencies

### UI and Design
- **Radix UI**: Comprehensive set of accessible UI primitives for building design systems
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Lucide React**: Modern icon library with consistent design language
- **Embla Carousel**: Lightweight carousel library for image galleries

### Data and State Management
- **TanStack Query**: Powerful data synchronization for React applications
- **React Hook Form**: Performant forms with easy validation
- **Zod**: TypeScript-first schema validation library

### Database and Backend
- **Drizzle ORM**: Lightweight TypeScript ORM for type-safe database operations
- **Neon Database**: Serverless PostgreSQL for scalable cloud deployment
- **Express.js**: Minimal web framework for Node.js API development

### Development Tools
- **Vite**: Next-generation frontend tooling for fast development
- **TypeScript**: Static type checking for improved code quality
- **ESLint/Prettier**: Code formatting and linting for consistent code style

### Utilities
- **date-fns**: Modern JavaScript date utility library
- **clsx/tailwind-merge**: Utility for conditional CSS class names
- **nanoid**: Secure URL-friendly unique string ID generator