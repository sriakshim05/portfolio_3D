import { useEffect, useRef } from "react";
import "./Carousel3D.css";

export default function Carousel3D() {
  const spinRef = useRef(null);

  useEffect(() => {
    const radius = 220;        // spacing
    const rotateSpeed = 30;    // speed

    const spinContainer = spinRef.current;
    const images = spinContainer.querySelectorAll("img");

    images.forEach((img, i) => {
      const angle = i * (360 / images.length);
      img.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
    });

    spinContainer.style.animation = `spin ${rotateSpeed}s linear infinite`;
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="spin-container" ref={spinRef}>
        <img src="/assets/akashgifprofile.png" alt="" />
        <img src="/assets/akashchennaipixel.png" alt="" />
        <img src="/assets/velloreakash.png" alt="" />
        <img src="/assets/saranhouse.png" alt="" />
        <img src="/assets/ChatGPT_Image_Jan_26__2026__11_46_30_PM-removebg-preview.png" alt="" />
      </div>
    </div>
  );
}
