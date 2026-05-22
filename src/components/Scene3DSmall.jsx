import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Torus, Box } from '@react-three/drei'

function RotatingCube() {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.4
    ref.current.rotation.y = state.clock.elapsedTime * 0.6
  })
  return (
    <Float speed={1.5} floatIntensity={1}>
      <Box ref={ref} args={[1.5, 1.5, 1.5]}>
        <meshStandardMaterial color="#C4956A" metalness={0.6} roughness={0.2} wireframe={false} transparent opacity={0.85} />
      </Box>
    </Float>
  )
}

function OrbitingOrb() {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.elapsedTime
    ref.current.position.x = Math.cos(t * 0.8) * 2.2
    ref.current.position.y = Math.sin(t * 0.8) * 1.2
    ref.current.position.z = Math.sin(t * 0.4) * 0.5
  })
  return (
    <Sphere ref={ref} args={[0.3, 32, 32]}>
      <MeshDistortMaterial color="#8FAF8F" distort={0.5} speed={3} metalness={0.4} roughness={0.1} transparent opacity={0.9} />
    </Sphere>
  )
}

function OuterRing() {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.x = Math.PI / 4 + state.clock.elapsedTime * 0.2
    ref.current.rotation.z = state.clock.elapsedTime * 0.1
  })
  return (
    <Torus ref={ref} args={[2.2, 0.05, 12, 100]}>
      <meshStandardMaterial color="#C4956A" metalness={0.9} roughness={0.05} transparent opacity={0.4} />
    </Torus>
  )
}

export default function Scene3DSmall() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#fff" />
      <pointLight position={[-3, 3, 3]} intensity={0.8} color="#C4956A" />
      <pointLight position={[3, -3, 0]} intensity={0.5} color="#8FAF8F" />
      <RotatingCube />
      <OrbitingOrb />
      <OuterRing />
    </Canvas>
  )
}
