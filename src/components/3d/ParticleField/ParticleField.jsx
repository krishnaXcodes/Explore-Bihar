import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField = ({ count = 2000, color = '#fbbf24', size = 0.02 }) => {
  const meshRef = useRef();
  const lightRef = useRef();

  // Generate random positions and velocities for particles
  const [positions, velocities] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = [];

    for (let i = 0; i < count; i++) {
      // Spread particles across a wide area
      positions[i * 3] = (Math.random() - 0.5) * 40;     // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40; // z

      // Small random velocities
      velocities.push({
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.01,
      });
    }

    return [positions, velocities];
  }, [count]);

  // Animate particles
  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    const positionsAttr = meshRef.current.geometry.attributes.position;
    
    for (let i = 0; i < count; i++) {
      // Gentle floating motion
      positionsAttr.array[i * 3] += Math.sin(time * 0.5 + i) * 0.005 + velocities[i].x;
      positionsAttr.array[i * 3 + 1] += Math.cos(time * 0.3 + i) * 0.005 + velocities[i].y;
      
      // Wrap around if they go too far (creating a continuous field)
      if (positionsAttr.array[i * 3 + 1] > 10) positionsAttr.array[i * 3 + 1] = -10;
      if (positionsAttr.array[i * 3 + 1] < -10) positionsAttr.array[i * 3 + 1] = 10;
    }
    
    positionsAttr.needsUpdate = true;
    
    // Slow rotation of the entire field
    meshRef.current.rotation.y = time * 0.05;
  });

  return (
    <>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={size}
          color={color}
          transparent
          opacity={0.6}
          sizeAttenuation={true}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
      <pointLight ref={lightRef} color={color} intensity={0.5} distance={20} />
    </>
  );
};

export default ParticleField;
