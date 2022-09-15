import { useState } from 'react'
import { useSwitchTransition } from 'transition-hook'

export function RippleEffect() {
  const [pos, setPos] = useState([0, 0])
  const transition = useSwitchTransition(pos, 500)

  /** @param {React.MouseEvent<HTMLButtonElement>} ev */
  function handleClick(ev) {
    const { clientX, clientY } = ev
    const { left, top } = ev.target.getBoundingClientRect()
    const [x, y] = [clientX - left - 50, clientY - top - 50]
    setPos([x, y])
  }

  return (
    <div className="RippleEffect">
      <button
        style={{
          backgroundColor: 'mediumslateblue',
          color: 'rgba(0,0,0,.6)',
          fontWeight: 'bold',
          border: 'none',
          padding: '20px 40px',
          fontSize: '3em',
          borderRadius: 12,
          boxShadow: '0 8px darkslateblue',
          position: 'relative',
          overflow: 'hidden',
        }}
        onClick={handleClick}
      >
        Click Me
        {transition(
          ([x, y], stage) =>
            // 2 if current x,y is 0, unmount the item
            !!x &&
            !!y && (
              <div
                className="ripple"
                style={{
                  position: 'absolute',
                  left: x,
                  top: y,
                  backgroundColor: 'rgba(0,0,0,.4)',
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  pointerEvents: 'none',
                  transition: '.5s ease-out',
                  opacity: stage === 'from' ? 1 : 0,
                  transform: stage === 'from' ? 'scale(0)' : 'scale(3)',
                }}
                // 1 set x,y to 0, so it will unmount the last item after animation ends
                onTransitionEnd={() => {
                  setPos([0, 0])
                }}
              />
            )
        )}
      </button>
    </div>
  )
}
