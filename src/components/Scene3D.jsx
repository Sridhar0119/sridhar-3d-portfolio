import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float, Stars, Torus } from '@react-three/drei'
import * as THREE from 'three'

function FloatingOrb({ position, color, speed = 1, distort = 0.4, scale = 1 }) {
  const meshRef = useRef()
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed
    }
  })
  return (
    <Float speed={speed * 1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.1}
          metalness={0.3}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </Float>
  )
}

function FloatingRing({ position, color, scale = 1 }) {
  const meshRef = useRef()
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2
    }
  })
  return (
    <Float speed={1.2} floatIntensity={1}>
      <Torus ref={meshRef} args={[1, 0.08, 16, 100]} position={position} scale={scale}>
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.1} transparent opacity={0.6} />
      </Torus>
    </Float>
  )
}

function ParticleField() {
  const count = 120
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [])

  const ref = useRef()
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.03
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#C4956A" transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

export default function Scene3D({ style }) {
  return (
    <Canvas
      style={style}
      camera={{ position: [0, 0, 8], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#C4956A" />
      <pointLight position={[5, 5, 0]} intensity={0.4} color="#8FAF8F" />

      <FloatingOrb position={[2.5, 1, 0]} color="#C4956A" speed={0.8} distort={0.5} scale={1.4} />
      <FloatingOrb position={[-2.5, -0.5, -1]} color="#8FAF8F" speed={1.1} distort={0.35} scale={1} />
      <FloatingOrb position={[0, -2, -2]} color="#E8D5C0" speed={0.6} distort={0.6} scale={0.7} />

      <FloatingRing position={[-1.5, 2, -1]} color="#C4956A" scale={1.2} />
      <FloatingRing position={[3, -1.5, 0]} color="#8FAF8F" scale={0.8} />

      <ParticleField />
    </Canvas>
  )
}
