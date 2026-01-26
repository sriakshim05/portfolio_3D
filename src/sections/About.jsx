import React from "react";
import Carousel3D from "../components/Carousel3D";

export default function About() {
  return (
    <section className="w-full min-h-screen bg-[#010103] flex items-center">
      <div className="w-full max-w-7xl mx-auto px-16 flex items-center justify-between">
        
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            About
          </h1>

          <p className="text-gray-300 leading-relaxed text-lg">
            Currently pursuing B.E Computer Science (2023–2027) at Kongu Engineering
            College, Perundurai, where I focus on building strong fundamentals in
            software engineering and problem solving.
            <br /><br />
            I enjoy turning ideas into experiences through Flutter apps and modern
            web development, and I’m especially curious about how AI can be used
            to create smarter, more personalized products.
          </p>
        </div>

        <div className="relative -mr-10">
          <Carousel3D />
        </div>

      </div>
    </section>
  );
}
