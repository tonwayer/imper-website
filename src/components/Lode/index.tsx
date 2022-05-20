import React, {Suspense} from 'react';
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"

function Model() {
  const { scene } = useGLTF("PLANET_LODE_IMPERATOR_NEW_V.glb")
  return <primitive object={scene} />;
}

export function Lode() {
  return (
    <div style = {{ height: '100vh', backgroundColor:"rgba(0,0,0,0)"}}>
      <Canvas camera={{ position: [75, window.innerWidth / window.innerHeight, 0.1], fov: 0 }}>
        <pointLight position={[10, 10, 10]} intensity={1.3} />
        <Suspense fallback={null}>
          <Model/>
        </Suspense>
      </Canvas>
    </div>
  );
}