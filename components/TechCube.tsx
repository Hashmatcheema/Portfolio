'use client';

import { useEffect, useRef } from 'react';

const SimpleTechCube = () => {
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;

    let animationId: number;
    let rotation = { x: 0, y: 0 };

    const animate = () => {
      rotation.x += 0.3;
      rotation.y += 0.5;
      
      if (cube) {
        cube.style.transform = `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const faces = [
    { text: 'REACT', transform: 'translateZ(100px)' },
    { text: 'NEXT.JS', transform: 'rotateY(180deg) translateZ(100px)' },
    { text: 'NODE', transform: 'rotateY(90deg) translateZ(100px)' },
    { text: 'PYTHON', transform: 'rotateY(-90deg) translateZ(100px)' },
    { text: 'TS', transform: 'rotateX(90deg) translateZ(100px)' },
    { text: 'MONGO', transform: 'rotateX(-90deg) translateZ(100px)' },
  ];

  return (
    <div className="flex items-center justify-center h-full perspective-1000">
      <div 
        ref={cubeRef}
        className="relative w-48 h-48 transform-style-3d transition-transform duration-100"
      >
        {faces.map((face, index) => (
          <div
            key={index}
            className="absolute w-full h-full bg-[#ec4e39]/80 border-2 border-[#ec4e39] flex items-center justify-center text-white text-lg font-bold rounded-lg"
            style={{ transform: face.transform }}
          >
            {face.text}
          </div>
        ))}
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default SimpleTechCube;