import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useTransition } from 'transition-hook'
import './styles/animationTransition.css'

export function AnimationTransition() {
  const [onOff, setOnOff] = useState(true)
  const { stage, shouldMount } = useTransition(onOff, 1000)

  return (
    <div className="AnimationTransition">
      <Button onClick={() => setOnOff(!onOff)}>Toggle</Button>
      {shouldMount && (
        <div
          className="ball"
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'royalblue',
            borderRadius: 100,
            margin: 'auto',
            marginTop: 100,
            animationDuration: '1s',
            animationName: stage === 'enter' ? 'ball-in' : 'ball-out',
          }}
        />
      )}
    </div>
  )
}
