import { Canvas, extend } from '@react-three/fiber';
import {
  MeshDistortMaterial,
  OrbitControls,
  Sphere,
  Stars,
  Text,
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

          <Text scale={[10, 10, 10]} position={[3, 3, 0]} color="red">
            Skills
            <MeshDistortMaterial
              color={'#6c2f94'}
              roughness={0}
              distort={0.75}
              speed={1.4}
            />
          </Text>
        </Suspense>
      </Canvas>
    </div>
  );
}

function Home() {
  return (
    <div className="App">
      <SCE />
    </div>
  );
}

export default Home;
