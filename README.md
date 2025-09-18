# Aerobyte React Landing Page

A modern, responsive React landing page for Appaim Things Solution - Paint Color Solutions company.

## Features

- ✨ **Custom Cursor Effect**: Smooth animated cursor that follows mouse movement with a slight delay
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- 🎨 **Interactive Carousels**: Feature carousel and support areas carousel with navigation
- ⚡ **React Hooks**: Uses useState and useEffect for state management and animations
- 🧩 **Modular Components**: Clean, reusable component architecture
- 🎯 **Smooth Animations**: Hover effects and transitions throughout

## Components

- **CustomCursor**: Animated cursor component with hover effects
- **Navbar**: Navigation bar with logo and menu links
- **Hero**: Main hero section with feature carousel
- **About**: About us section with cards and company information
- **SupportAreas**: Interactive carousel showcasing support services
- **StockManagement**: IoT and livestock management section
- **Contact**: Contact form with Google Maps integration
- **Footer**: Footer with social links and app download badges

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Copy Images**: 
   Copy all image files from the original project to the `public` folder:
   - adam-juman-NxeQUw-mdwk-unsplash.jpg
   - image.png
   - pic-1.jpg through pic-8.jpg
   - mobile.jpg

3. **Start Development Server**:
   ```bash
   npm start
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

## Custom Cursor

The custom cursor component features:
- Smooth following animation with 0.1 easing factor
- Hover state detection for interactive elements
- Color change and scale animation on hover
- Mix-blend-mode for visual effects

## Carousel Functionality

Both carousels feature:
- Smooth scrolling with navigation buttons
- Button state management (disabled when at edges)
- Responsive design that maintains functionality
- Touch-friendly mobile interaction

## Technologies Used

- React 18
- React Hooks (useState, useEffect, useRef)
- CSS3 with custom properties
- Font Awesome icons
- Responsive design principles

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized animations using requestAnimationFrame
- Efficient event handling with proper cleanup
- Minimal re-renders with proper dependency arrays
- Smooth 60fps animations
