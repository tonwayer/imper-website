import React, { Suspense, useEffect, useState } from 'react';
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"

const Lode = () => {
  const [top, setTop] = useState(0)

  const { scene } = useGLTF("PLANET_LODE_IMPERATOR_NEW_V.glb")
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true)
    return () => window.removeEventListener('scroll', handleScroll, true)
  }, [])

  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scrolled = winScroll / height
    console.log(scrolled)
    setTop(scrolled)
  }

  return (
    <div style={{ height: '1000px', width: '100%', backgroundColor: "rgba(0,0,0,0)", position: 'absolute' }}>
      <Canvas camera={{ near: 0.1, far: 2000, position: [0, 10, 400] }} orthographic={true}>
        <pointLight position={[0, 300, 3000]} intensity={1.3} />
        <Suspense fallback={null}>
          <primitive object={scene} position={[260, 220, 0]} scale={0.18} rotation={[0, Math.PI * top * 30 + (Math.PI / 2 *3), 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Lode
