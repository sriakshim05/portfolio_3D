import React from 'react'
import { useEffect,useRef } from 'react';
export const Aboutmagnetic = () => {
  
   const text="About";
   const containerRef=useRef(null);
   const lettersRef=useRef([]);
   const mouseRef=useRef({x:0,y:0});

   useEffect(()=>{
    lettersRef.current=containerRef.current.qquerySelectorAll(".letter");
     
   },[]);
   const animate=()=>{
      lettersRef.current.forEach((letter)=>{
         const rect = letter.getBoundingClientRect();
         const letterX=rect.left+rect.width/2;
         const letterY=rect.top + rect.height/2;
         const dx=letterX-mouse.current.x;
         const dy=letterY-mouse.current.y;

         const distance=Math.sqrt(dx*dx+dy*dy);

         const radius=90;
         if(distance<radius){
            const force =(radius -distance)/radius;
            const mouseX=dx*force*0.4;
            const mouseY=dy*force*0.4;

            letter.style.transform=`translate3d(${moveX}px,${moveY}px,0)`;

         }else{
            letter.style.transform="translate3d(0,0,0)";

         }
      });
      
   }


  
}
