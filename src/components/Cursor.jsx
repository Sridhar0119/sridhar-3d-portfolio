import { useEffect, useState } from 'react'

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [dot, setDot] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)

    let animId
    let dx = 0, dy = 0
    const follow = () => {
      dx += (pos.x - dx) * 0.12
      dy += (pos.y - dy) * 0.12
      setDot({ x: dx, y: dy })
      animId = requestAnimationFrame(follow)
    }
    animId = requestAnimationFrame(follow)

    const addHover = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', () => setHovered(true))
        el.addEventListener('mouseleave', () => setHovered(false))
      })
    }
    addHover()
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(animId)
    }
  }, [pos.x, pos.y])

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] rounded-full mix-blend-multiply"
        style={{
          left: pos.x - 4,
          top: pos.y - 4,
          width: 8,
          height: 8,
          background: '#2563EB',
          transition: 'transform 0.1s',
          transform: hovered ? 'scale(2)' : 'scale(1)',
        }}
      />
      <div
        className="fixed pointer-events-none z-[9998] rounded-full border border-blue-500/40"
        style={{
          left: dot.x - 20,
          top: dot.y - 20,
          width: 40,
          height: 40,
          transition: 'transform 0.2s',
          transform: hovered ? 'scale(1.8)' : 'scale(1)',
        }}
      />
    </>
  )
}
