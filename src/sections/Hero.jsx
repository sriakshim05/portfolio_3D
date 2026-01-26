import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera,OrbitControls} from '@react-three/drei'
import HackerRoom from '../components/HackerRoom.jsx'
import CanvasLoader from '../components/CanvasLoader.jsx'
import { Leva, useControls } from 'leva'
import {MagneticText} from '../components/MagneticText.jsx'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants/index.js'




export const Hero = () => {
 const isMobile=useMediaQuery({maxWidth:768})
  const isSmall=useMediaQuery({maxWidth:440})
  const isTablet=useMediaQuery({maxWidth:1024 ,minWidth:768});
  const sizes=calculateSizes(isSmall,isMobile,isTablet);
  return (
   <section className="min-h-screen w-full flex flex-col relative">

  <div className="relative z-40 w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
    <p className="sm:text-3xl text-2xl font-medium text-white text-center">
       Hi I am Akash 👋
    </p>
    <MagneticText />
  </div>
  

  <div className="absolute inset-0 z-0">
    <Canvas className="w-full h-full">
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
        <OrbitControls enableDamping enableZoom={false} 
         maxPolarAngle={Math.PI/2}/>
        <HackerRoom
          position={sizes.deskPosition}
          rotation={[0, -Math.PI, 0]}
          scale={sizes.deskScale}
        />
        <group>
          
        </group>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={0.5} />
      </Suspense>
    </Canvas>
    
  </div>

</section>

  );
 
}
