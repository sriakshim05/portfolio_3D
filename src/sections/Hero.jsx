import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import HackerRoom from '../components/HackerRoom.jsx'
import CanvasLoader from '../components/CanvasLoader.jsx'
import { Leva, useControls } from 'leva'

export const Hero = () => {

  

  return (
    <section className="min-h-screen w-full flex flex-col relative">

      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi I am Akash <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient text-center">
          Building Apps & Websites
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Leva />
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HackerRoom
              position={[
                1.2,
                -8.4,
                1.8
              ]}
              rotation={[
                0.4,
                -3.2,
                0.0
              ]}
              scale={[
                0.1,
                0.1,
                0.1
              ]}
            />

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

    </section>
  )
}
