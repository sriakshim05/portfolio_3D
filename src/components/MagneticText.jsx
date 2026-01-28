import { useEffect, useRef } from "react";

export const MagneticText = () => {
  const text = "Building Apps & Websites";
  const containerRef = useRef(null);
  const lettersRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    lettersRef.current =
      containerRef.current.querySelectorAll(".letter");
  }, []);

  const animate = () => {
    lettersRef.current.forEach((letter) => {
      const rect = letter.getBoundingClientRect();
      const letterX = rect.left + rect.width / 2;
      const letterY = rect.top + rect.height / 2;

      const dx = letterX - mouseRef.current.x;
      const dy = letterY - mouseRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const radius = 90;

      if (distance < radius) {
        const force = (radius - distance) / radius;
        const moveX = dx * force * 0.4;
        const moveY = dy * force * 0.4;

        letter.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      } else {
        letter.style.transform = "translate3d(0,0,0)";
      }
    });

    rafRef.current = requestAnimationFrame(animate);
  };

  const handleMouseMove = (e) => {
    mouseRef.current.x = e.clientX;
    mouseRef.current.y = e.clientY;

    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(animate);
    }
  };

  const reset = () => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = null;

    lettersRef.current.forEach((letter) => {
      letter.style.transform = "translate3d(0,0,0)";
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
          className="letter inline-block text-3xl md:text-5xl font-semibold text-gray-300 transition-transform duration-300 ease-out"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};
