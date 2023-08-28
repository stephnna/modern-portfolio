import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Spaceship = () => {
  const spaceship = useGLTF("./contact/scene.gltf");

  return (
    <mesh> 
    <ambientLight  color="white" intensity={1} />
    <directionalLight color="white" position={[0, 0, 5]} />
    <primitive object={spaceship.scene} 
    scale={0.24} 
    position-z={0} 
    rotation-y={0} />
     </mesh>
  );
};

const  SpaceshipCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 50,
        
        position: [4, -3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={6}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Spaceship />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default SpaceshipCanvas;