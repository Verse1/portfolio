import { Canvas, extend } from '@react-three/fiber';
import {
  MeshDistortMaterial,
  OrbitControls,
  Sphere,
  Stars,
  Text,
} from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';
import axios from 'axios';

function SCE() {
  const [skills, setSkills] = useState<any[]>([]);

  let down=2;

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
    <div className="w-screen h-screen fixed">
      <Canvas>
        <ambientLight />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <OrbitControls />
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

          <Text scale={[10, 10, 10]} position={[-4, 3, 0]} color="red">
            Nawaf
            <MeshDistortMaterial
              color={'#6c2f94'}
              roughness={0}
              distort={0.75}
              speed={1.4}
            />
          </Text>

          <Text scale={[10, 10, 10]} position={[3, 3, 0]} color="red">
            Skills
            <MeshDistortMaterial
              color={'#6c2f94'}
              roughness={0}
              distort={0.75}
              speed={1.4}
            />
          </Text>

          {skills.map((skill) => (
            <Text
              key={skill._id}
              scale={[5, 5, 5]}
              position={[3, down--, 0]}
              color="red">
              {skill.name}
              <MeshDistortMaterial
                color={'#6c2f94'}
                roughness={0}
                distort={0.75}
                speed={1.7}
              />
            </Text>
          ))}
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
