import { useRef } from "react";

export const MagneticText = () => {
  const text = "Building Apps & Websites";
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const letters = containerRef.current.querySelectorAll(".letter");
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    letters.forEach((letter) => {
      const rect = letter.getBoundingClientRect();
      const letterX = rect.left + rect.width / 2;
      const letterY = rect.top + rect.height / 2;

      const dx = letterX - mouseX;
      const dy = letterY - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const radius = 80; 

      if (distance < radius) {
        const force = (radius - distance) / radius;

        
        letter.style.transform = `translate(${dx * force}px, ${dy * force}px)`;
      } else {
        letter.style.transform = "translate(0px, 0px)";
      }
    });
  };

  const reset = () => {
    const letters = containerRef.current.querySelectorAll(".letter");
    letters.forEach((letter) => {
      letter.style.transform = "translate(0px, 0px)";
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="text-center select-none"
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="letter inline-block text-3xl md:text-5xl font-semibold text-gray-300 transition-transform duration-150"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};
