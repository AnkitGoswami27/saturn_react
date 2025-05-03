# Hero Section with Animated Text and Image Background

This project modifies the Hero section of a React website by adding professional UI animations to improve the visual experience. The enhancements include animated text effects and background image transitions using GSAP (GreenSock Animation Platform).

## Features

### 1. Animated Text Effect ("EDGE")
- The word "SATURN" dynamically displays the word **EDGE** letter-by-letter.
- This is achieved using **GSAP TextPlugin**, allowing smooth typing and erasing animations.
- The animation loops infinitely to keep the section interactive and eye-catching.

### 2. Animated Background Image
- A professional office image (`Pexels`) is used as the background on the right side of the Hero section.
- The image animates by sliding **from top to bottom** on page load.
- Once in place, the image **remains visible** and does not interfere with the main content (text/buttons).
- The image is restricted to the Hero section height to maintain layout consistency.

## Technologies Used
- **React.js**: Component-based architecture.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **GSAP**: JavaScript animation library for high-performance animations.
- **TextPlugin**: A GSAP plugin used to animate text changes.

## File Modified

### `Hero.jsx`
Key changes:
- Added `useRef` hooks for image and text DOM elements.
- Applied `gsap.fromTo()` to animate the image on initial page load.
- Used `gsap.timeline()` and `TextPlugin` to animate the "EDGE" text.
- Ensured responsiveness and compatibility with Tailwind CSS layout.

## How to Use

1. Clone the repository or copy the Hero component code.
2. Make sure `gsap` is installed:
   ```bash
   npm install gsap
