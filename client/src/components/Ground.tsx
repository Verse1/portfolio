import React, { useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const Ground = () => {
  const [roughness, normal, color, displacement] = useLoader(TextureLoader, [
    '../../textures/Ground/wood_rough.jpg',
    '../../textures/Ground/wood_normal.jpg',
    '../../textures/Ground/wood_color.jpg',
    '../../textures/Ground/wood_displacement.jpg',
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
        displacementMap={displacement}
      />
    </mesh>
  );
};

export default Ground;
