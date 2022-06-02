import { Canvas, extend } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import axios from 'axios';
import Ground from '../components/Ground';

function Scene() {
  const [skills, setSkills] = useState<any[]>([]);

  let down = 2;

  useEffect(() => {
    axios
      .get('/api/admin/skills')
      .then((res) => {
        setSkills(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      <color attach="background" args={['#f7ebda']} />
      <ambientLight intensity={0.5} />

      <Ground />
    </>
  );
}

function Home() {
  return (
    <div className="App div w-screen h-screen fixed">
      <Suspense fallback={null}>
        <Canvas shadows>
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default Home;
