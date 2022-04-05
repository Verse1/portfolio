import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function SCE() {
  return (
    <div className="w-screen h-3/6 fixed">
    <Canvas>
      <ambientLight />
      <OrbitControls />
      <mesh>
        <boxGeometry args={[5, 5, 5]} />
        <meshStandardMaterial color="orange" />
      </mesh>
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
