import { Canvas } from "@react-three/fiber";
import { Center, Environment } from "@react-three/drei";

import Shirt from "./Shirt";
import CameraRig from "./CameraRig";
import BackDrop from "./BackDrop";
import { Suspense } from "react";
import { CanvasLoader } from "../components";

const CanvasModal = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <CameraRig>
          <BackDrop />
          <Center>
            <Shirt />
          </Center>
        </CameraRig>
      </Suspense>
    </Canvas>
  );
};

export default CanvasModal;
