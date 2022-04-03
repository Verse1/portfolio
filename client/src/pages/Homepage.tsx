import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function SCE() {
  return (
    <Canvas>
      <ambientLight />
      <OrbitControls />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
}

function App() {
  return (
    <div className="App">
      {/* <SCE /> */}
    </div>
  );
}

export default App;
