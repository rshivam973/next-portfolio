"use client";
import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
  isAnimating: false,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [isAnimating, setIsAnimating] = useState(false);
  const circleRef = useRef(null);

  // Init from localStorage or system preference
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = prefersDark ? "dark" : "light";
      setTheme(initial);
      document.documentElement.setAttribute("data-theme", initial);
    }
  }, []);

  const toggleTheme = useCallback(
    (btnRect) => {
      if (isAnimating) return;
      setIsAnimating(true);

      const next = theme === "dark" ? "light" : "dark";
      const circle = circleRef.current;
      if (!circle) return;

      // Circle origin = center of the clicked button
      const x = btnRect.left + btnRect.width / 2;
      const y = btnRect.top + btnRect.height / 2;

      // Radius to cover entire viewport
      const maxDist = Math.max(
        Math.hypot(x, y),
        Math.hypot(window.innerWidth - x, y),
        Math.hypot(x, window.innerHeight - y),
        Math.hypot(window.innerWidth - x, window.innerHeight - y)
      );
      const diameter = maxDist * 2.2;

      // Incoming theme background
      const nextBg = next === "light" ? "#f8f8f6" : "#0e1011";
      circle.style.background = nextBg;
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
      circle.style.width = `${diameter}px`;
      circle.style.height = `${diameter}px`;
      circle.style.opacity = "1";

      // Reset & expand
      circle.style.transition = "none";
      circle.style.transform = "translate(-50%, -50%) scale(0)";
      // Force reflow
      void circle.offsetWidth;
      circle.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
      circle.style.transform = "translate(-50%, -50%) scale(1)";

      // Swap theme behind the circle at ~420ms
      setTimeout(() => {
        setTheme(next);
        localStorage.setItem("theme", next);
        document.documentElement.setAttribute("data-theme", next);

        // Fade out circle to reveal new theme
        requestAnimationFrame(() => {
          circle.style.transition = "opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1)";
          circle.style.opacity = "0";
        });
      }, 420);

      // Cleanup
      setTimeout(() => {
        circle.style.transition = "none";
        circle.style.transform = "translate(-50%, -50%) scale(0)";
        circle.style.opacity = "0";
        setIsAnimating(false);
      }, 750);
    },
    [theme, isAnimating]
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isAnimating }}>
      {/* Transition circle — always in DOM */}
      <div
        ref={circleRef}
        style={{
          position: "fixed",
          zIndex: 9999,
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%) scale(0)",
          willChange: "transform, opacity",
          opacity: 0,
        }}
      />
      {children}
    </ThemeContext.Provider>
  );
};
