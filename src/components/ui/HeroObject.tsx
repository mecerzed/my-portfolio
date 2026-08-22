// "use client";

// import { Canvas } from "@react-three/fiber";
// import { Float, MeshDistortMaterial } from "@react-three/drei";
// import { useRef } from "react";
// import { Mesh } from "three";
// import { useFrame } from "@react-three/fiber";

// function AnimatedShape() {
//   const meshRef = useRef<Mesh>(null);

//   useFrame((state) => {
//     if (!meshRef.current) return;
//     meshRef.current.rotation.x += 0.003;
//     meshRef.current.rotation.y += 0.004;

//     // subtle follow toward cursor position
//     const { x, y } = state.pointer;
//     meshRef.current.rotation.y += x * 0.0015;
//     meshRef.current.rotation.x += y * 0.0015;
//   });

//   return (
//     <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
//       <mesh ref={meshRef} scale={2.2}>
//         <icosahedronGeometry args={[1, 1]} />
//         <MeshDistortMaterial
//           color="#F97316"
//           distort={0.25}
//           speed={1.5}
//           roughness={0.2}
//           metalness={0.6}
//         />
//       </mesh>
//     </Float>
//   );
// }

// export default function HeroObject() {
//   return (
//     <div className="w-full h-full min-h-[400px]">
//       <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
//         <ambientLight intensity={0.6} />
//         <directionalLight position={[3, 3, 3]} intensity={1.2} />
//         <AnimatedShape />
//       </Canvas>
//     </div>
//   );
// }


// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { Float, MeshDistortMaterial } from "@react-three/drei";
// import { useEffect, useRef } from "react";
// import * as THREE from "three";


// function AnimatedShape() {
//   const meshRef = useRef<THREE.Mesh>(null);

//   const targetRotation = useRef({ x: 0, y: 0 });
//   const scrollVelocity = useRef(0);
//   const lastScrollY = useRef(0);

//   useEffect(() => {
//     lastScrollY.current = window.scrollY;

//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       const delta = currentScrollY - lastScrollY.current;

//       // Clamp the effect so fast scrolling doesn't create
//       // an excessive spin.
//       scrollVelocity.current = THREE.MathUtils.clamp(
//         scrollVelocity.current + delta * 0.00035,
//         -0.08,
//         0.08
//       );

//       lastScrollY.current = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll, {
//       passive: true,
//     });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useFrame((state, delta) => {
//     if (!meshRef.current) return;

//     const { x, y } = state.pointer;

//     /*
//      * Cursor interaction
//      * Instead of directly modifying rotation every frame,
//      * calculate a target and smoothly interpolate toward it.
//      */
//     targetRotation.current.x = y * 0.18;
//     targetRotation.current.y = x * 0.25;

//     meshRef.current.rotation.x = THREE.MathUtils.damp(
//       meshRef.current.rotation.x,
//       targetRotation.current.x,
//       3,
//       delta
//     );

//     meshRef.current.rotation.y = THREE.MathUtils.damp(
//       meshRef.current.rotation.y,
//       targetRotation.current.y,
//       3,
//       delta
//     );

//     /*
//      * Slow continuous rotation
//      */
//     meshRef.current.rotation.x += delta * 0.12;
//     meshRef.current.rotation.y += delta * 0.18;

//     /*
//      * Scroll interaction
//      */
//     meshRef.current.rotation.y += scrollVelocity.current;

//     // Smoothly settle after scrolling stops.
//     scrollVelocity.current = THREE.MathUtils.damp(
//       scrollVelocity.current,
//       0,
//       5,
//       delta
//     );
//   });

//   return (
//     <Float
//       speed={1.2}
//       rotationIntensity={0.15}
//       floatIntensity={0.45}
//     >
//       <mesh ref={meshRef} scale={2.15}>
//         <icosahedronGeometry args={[1, 2]} />

//         <MeshDistortMaterial
//           color="#F97316"
//           distort={0.16}
//           speed={1.1}
//           roughness={0.3}
//           metalness={0.65}
//         />
//       </mesh>
//     </Float>
//   );
// }

// function WaveSurface() {
//   const meshRef = useRef<THREE.Mesh>(null);

//   useFrame((state) => {
//     if (!meshRef.current) return;
//     const geometry = meshRef.current.geometry;
//     const position = geometry.attributes.position;
//     const time = state.clock.elapsedTime;

//     for (let i = 0; i < position.count; i++) {
//       const x = position.getX(i);
//       const y = position.getY(i);
//       const wave =
//         Math.sin(x * 2 + time * 1.5) * 0.08 +
//         Math.cos(y * 2.5 + time) * 0.05;
//       position.setZ(i, wave);
//     }
//     position.needsUpdate = true;
//     geometry.computeVertexNormals();
//   });

//   return (
//     <mesh ref={meshRef} rotation-x={-Math.PI / 2} position={[0, -2, 0]}>
//       <planeGeometry args={[8, 8, 40, 40]} />
//       <meshStandardMaterial
//         color="#F97316"
//         transparent
//         opacity={0.12}
//         wireframe={false}
//         roughness={0.4}
//         metalness={0.2}
//       />
//     </mesh>
//   );
// }


"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function AnimatedShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetRotation = useRef({ x: 0, y: 0 });
  const scrollVelocity = useRef(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      scrollVelocity.current = THREE.MathUtils.clamp(
        scrollVelocity.current + delta * 0.00035,
        -0.08,
        0.08
      );
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const { x, y } = state.pointer;

    targetRotation.current.x = y * 0.18;
    targetRotation.current.y = x * 0.25;

    meshRef.current.rotation.x = THREE.MathUtils.damp(
      meshRef.current.rotation.x,
      targetRotation.current.x,
      3,
      delta
    );
    meshRef.current.rotation.y = THREE.MathUtils.damp(
      meshRef.current.rotation.y,
      targetRotation.current.y,
      3,
      delta
    );

    meshRef.current.rotation.x += delta * 0.12;
    meshRef.current.rotation.y += delta * 0.18;

    meshRef.current.rotation.y += scrollVelocity.current;
    scrollVelocity.current = THREE.MathUtils.damp(scrollVelocity.current, 0, 5, delta);
  });

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.45}>
      <mesh ref={meshRef} scale={2.15}>
        <icosahedronGeometry args={[1, 2]} />
        <MeshDistortMaterial
          color="#F97316"
          distort={0.16}
          speed={1.1}
          roughness={0.3}
          metalness={0.65}
        />
      </mesh>
    </Float>
  );
}

function WaveSurface() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const geometry = meshRef.current.geometry;
    const position = geometry.attributes.position;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);
      const wave = Math.sin(x * 2 + time * 1.5) * 0.08 + Math.cos(y * 2.5 + time) * 0.05;
      position.setZ(i, wave);
    }
    position.needsUpdate = true;
    geometry.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} rotation-x={-Math.PI / 2} position={[0, -2, 0]}>
      <planeGeometry args={[8, 8, 40, 40]} />
      <meshStandardMaterial
        color="#F97316"
        transparent
        opacity={0.12}
        wireframe={false}
        roughness={0.4}
        metalness={0.2}
      />
    </mesh>
  );
}

export default function HeroObject() {
  return (
    <div className="relative h-full min-h-[420px] w-full">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 5, 4]} intensity={2} />
        <pointLight position={[-4, -2, -3]} intensity={1} distance={10} />
        <AnimatedShape />
        <WaveSurface />
      </Canvas>
    </div>
  );
}