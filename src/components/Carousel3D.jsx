import { useEffect, useRef } from "react";
import "./Carousel3D.css";

export default function Carousel3D() {
  const spinRef = useRef(null);

  useEffect(() => {
    const radius = 180;
    const items = spinRef.current.children;
    const total = items.length;

    for (let i = 0; i < total; i++) {
      const angle = (360 / total) * i;
      items[i].style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
    }
  }, []);

  return (
    <div className="hero-visual">

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t  bg-black/90  bg-black/90 blur-3xl"></div>
        <img
          className="hero-image relative z-10"
          src="/assets/ChatGPT_Image_Jan_29__2026__09_03_26_PM-removebg-preview.png"
          alt="Akash"
        />
      </div>

      <div className="orbit" ref={spinRef}>
        <img src="/assets/akashgifprofile.png" />
        <img src="/assets/akashchennaipixel.png" />
        <img src="/assets/velloreakash.png" />
        <img src="/assets/saranhouse.png" />
        <img src="/assets/ChatGPT_Image_Jan_26__2026__11_46_30_PM-removebg-preview.png" />
      </div>

    </div>
  );
}
