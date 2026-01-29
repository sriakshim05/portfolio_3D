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


  
}
