# Running Train Animation – React + Framer Motion

This project animates an ASCII art train moving across the screen with animated wheels and a smoke effect using Hindi text ("हर हर महादेव"). Built with React and [framer-motion](https://www.framer.com/motion/) for smooth, continuous animation.

---


## Concepts Demonstrated

### 1. **React Functional Components & Hooks**
- Uses `useState` for animation frames (smoke and wheels).
- Uses `useEffect` to set up a timer for frame updates.

### 2. **ASCII Art Animation**
- The train and wheels are rendered as ASCII art.
- Wheels animate by cycling through characters (`|`, `/`, `-`, `\`).
- Smoke is animated by cycling through an array of Hindi text strings.

### 3. **Framer Motion for Animation**
- The train is wrapped in a `<motion.pre>` element.
- The train moves smoothly from right to left using framer-motion’s `animate` and `transition` props.

### 4. **Styling**
- Uses inline styles for background, font, color, and positioning.
- The animation is full-screen and centered vertically.

---

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

3. **Build for production:**
   ```sh
   npm run build
   ```

---

## File Structure

```
src/
  component/
    Train.jsx      # Main train animation component
  App.jsx          # Main app entry
  main.jsx         # React entry point
public/
  index.html       # HTML template
```

---

## Dependencies

- React
- framer-motion

---
