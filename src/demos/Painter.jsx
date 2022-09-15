import { useEffect, useState } from 'react'
import { useSwitchTransition } from 'transition-hook'

export function Painter() {
  const [pos, setPos] = useState([0, 0])
  const transition = useSwitchTransition(pos, 300)

  useEffect(() => {
    window.addEventListener('mousemove', (ev) => {
      const { clientX, clientY } = ev
      setPos([clientX - 25, clientY - 25])
    })
  }, [])

  return (
    <div className="Painter">
      {transition(([x, y], stage) => (
        <div
          style={{
            width: 50,
            height: 50,
            backgroundColor:
              stage === 'enter' || stage === 'from' ? 'hotpink' : 'royalblue',
            filter:
              stage === 'enter' || stage === 'from' ? 'unset' : 'blur(10px)',
            borderRadius: 200,
            position: 'fixed',
            transition: '.3s',
            left: x,
            top: y,
            opacity: stage === 'enter' || stage === 'from' ? 1 : 0,
            transform:
              stage === 'enter' || stage === 'from' ? 'scale(1)' : 'scale(0)',
          }}
        />
      ))}
    </div>
  )
}
