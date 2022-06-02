import React, { useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const Ground = () => {
  const [roughness, normal, color] = useLoader(TextureLoader, [
    '../../textures/wood_rough.jpg',
    '../../textures/wood_normal.jpg',
    '../../textures/wood_color.jpg',
  ]);

  return (
    <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
      <planeGeometry args={[50, 50]} />

      <meshStandardMaterial
        attach="material"
        roughness={0.8}
        normalMap={normal}
        map={color}
        roughnessMap={roughness}
      />
    </mesh>
  );
};

export default Ground;
