import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div id="canvas-container">
      <Canvas height="500">
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[5, 5, 5]} />
        <mesh>
          <boxGeometry args={[5, 5, 5]} />
          <meshStandardMaterial />
        </mesh>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
}

export default App;
