import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useSwitchTransition } from 'transition-hook'

export function EmojiSwitchTransition() {
  const [isHappy, setIsHappy] = useState(false)
  const transition = useSwitchTransition(isHappy, 300)

  return (
    <div className="EmojiSwitchTransition">
      <Button
        onClick={() => {
          setIsHappy(!isHappy)
        }}
      >
        Toggle
      </Button>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {transition((state, stage) => (
          <h1
            style={{
              transition: '.3s',
              marginTop: 40,
              fontSize: '5em',
              position: 'absolute',
              opacity: stage === 'enter' ? 1 : 0,
              transformOrigin: 'center bottom',
              transform: {
                from: 'translateX(-100%) rotate(-90deg)',
                enter: 'translateX(0%)',
                leave: 'translateX(100%) rotate(90deg)',
              }[stage],
            }}
          >
            {state ? '🤣' : '😝'}
          </h1>
        ))}
      </div>
    </div>
  )
}
