import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import woodImage from '../assets/OIP.jpg'

function PlywoodBoard({ scrollProgress }) {
  const board = useRef(null)
  const elapsedRef = useRef(0)

  const woodTexture = useMemo(() => {
    const loader = new THREE.TextureLoader()
    const map = loader.load(woodImage)
    map.colorSpace = THREE.SRGBColorSpace
    map.wrapS = THREE.RepeatWrapping
    map.wrapT = THREE.RepeatWrapping
    map.repeat.set(2.2, 1.2)
    map.anisotropy = 4
    return map
  }, [])

  const endCapTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 512
    canvas.height = 512
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      return null
    }

    ctx.fillStyle = '#d6a06a'
    ctx.fillRect(0, 0, 512, 512)
    for (let ring = 220; ring > 10; ring -= 18) {
      ctx.beginPath()
      ctx.arc(256, 256, ring, 0, Math.PI * 2)
      ctx.strokeStyle = ring % 36 === 0 ? 'rgba(125, 73, 36, 0.55)' : 'rgba(166, 112, 68, 0.5)'
      ctx.lineWidth = 6
      ctx.stroke()
    }

    const map = new THREE.CanvasTexture(canvas)
    map.colorSpace = THREE.SRGBColorSpace
    return map
  }, [])

  useFrame((_, delta) => {
    if (!board.current) {
      return
    }
    elapsedRef.current += delta

    const progress = scrollProgress?.get?.() ?? 0
    board.current.position.x = THREE.MathUtils.lerp(0, 1.55, progress)
    board.current.position.y = THREE.MathUtils.lerp(0, -0.35, progress)

    const t = elapsedRef.current
    const flipSpeed = 0.3
    const swaySpeed = 0.14
    const flipProgress = (Math.sin(t * flipSpeed) + 1) * 0.5
    board.current.rotation.x = THREE.MathUtils.lerp(-0.2, Math.PI + 0.2, flipProgress)
    board.current.rotation.y = Math.sin(t * swaySpeed) * 0.06
  })

  return (
    <group ref={board} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
      <mesh>
        <cylinderGeometry args={[0.8, 0.8, 2.9, 64, 1, true]} />
        <meshStandardMaterial
          color="#c38953"
          map={woodTexture}
          roughness={0.62}
          metalness={0.02}
          envMapIntensity={0.35}
        />
      </mesh>
      <mesh position={[0, 1.45, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.8, 64]} />
        <meshStandardMaterial color="#d9ab7a" map={endCapTexture} roughness={0.7} metalness={0} />
      </mesh>
      <mesh position={[0, -1.45, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.8, 64]} />
        <meshStandardMaterial color="#d9ab7a" map={endCapTexture} roughness={0.7} metalness={0} />
      </mesh>
    </group>
  )
}

function Hero3D({ scrollProgress }) {
  return (
    <div className="hero-3d-wrap" aria-hidden="true">
      <Canvas
        shadows={false}
        camera={{ position: [0, 0.35, 4.9], fov: 40 }}
        dpr={[1, 1]}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <ambientLight intensity={1.15} />
        <directionalLight intensity={1.7} position={[4, 5, 4]} color="#fff2df" />
        <hemisphereLight intensity={0.8} groundColor="#6a4328" color="#ffedcf" />
        <PlywoodBoard scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  )
}

export default Hero3D
