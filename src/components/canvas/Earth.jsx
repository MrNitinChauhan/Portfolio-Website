import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// const Earth = () => {
//   const earth = useGLTF("./planet/scene.gltf");

//   return (
//     <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
//   );
// };

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  React.useEffect(() => {
    console.log("🔍 Checking Earth GLTF...");

    earth.scene.traverse((child) => {
      if (child.isMesh) {
        const pos = child.geometry.attributes.position?.array;

        console.log("Mesh:", child.name);

        if (!pos) {
          console.warn("⚠ Mesh has NO position attribute:", child.name);
          return;
        }

        for (let i = 0; i < pos.length; i++) {
          if (!isFinite(pos[i])) {
            console.error(
              "❌ FOUND INVALID VERTEX",
              "Mesh:", child.name,
              "Index:", i,
              "Value:", pos[i]
            );
            return;
          }
        }
      }
    });

    console.log("✅ Done checking.");
  }, [earth]);

  return (
    <primitive object={earth.scene} scale={2.5} />
  );
};














const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
