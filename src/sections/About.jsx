import Carousel3D from "../components/Carousel3D";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-black/90 overflow-hidden"
    >
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96  bg-black/90 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96  bg-black/90 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-16 h-screen grid grid-cols-2 items-center gap-12">

        <div className="z-10 space-y-6">
          <div className="space-y-2">
            <h1 className="text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-2">
              About
            </h1>
            
          </div>

          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              Currently pursuing{" "}
              <span className="text-white font-semibold">
                B.E Computer Science (2023–2027)
              </span>{" "}
              at{" "}
              <span className="text-purple-300">
                Kongu Engineering College, Perundurai
              </span>, where I focus on building strong fundamentals in
              software engineering and problem solving.
            </p>

            <p className="text-lg leading-relaxed">
              I enjoy turning ideas into experiences through{" "}
              <span className="text-blue-300 font-medium">
                Flutter apps
              </span>{" "}
              and modern web development, and I'm especially curious about how{" "}
              <span className="text-purple-300 font-medium">
                AI
              </span>{" "}
              can be used to create smarter, more personalized products.
            </p>
          </div>
        </div>

        <div className="relative h-full flex items-center justify-center">
          <Carousel3D />
        </div>

      </div>
    </section>
  );
}
