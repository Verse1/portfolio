import { Canvas } from '@react-three/fiber';
import {
  MeshDistortMaterial,
  OrbitControls,
  Sphere,
  Stars,
} from '@react-three/drei';
import { Suspense } from 'react';

function SCE() {
  return (
    <div className="w-screen h-screen fixed">
      <Canvas>
        <ambientLight />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <OrbitControls enableZoom={false} />
        <Stars />
        <Suspense fallback={null}>
          <Sphere visible args={[1, 32, 32]}>
            <MeshDistortMaterial
              color={'#6c2f94'}
              roughness={0}
              distort={0.6}
              speed={2}
            />
          </Sphere>
        </Suspense>
      </Canvas>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <SCE />
    </div>
  );
}

export default App;
