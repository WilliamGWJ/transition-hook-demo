import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useTransition } from 'transition-hook'

export function TransitionWithKey() {
  const [onOff, setOnOff] = useState(true)
  const { stage, shouldMount } = useTransition(onOff, 300)

  return (
    <div className="BasicTransition">
      <Button
        style={{
          marginBottom: 50,
        }}
        onClick={() => setOnOff(!onOff)}
      >
        Toggle
      </Button>

      <br />

      <h1
        style={{
          transition: '.3s',
          opacity: stage === 'enter' ? 1 : 0,
          transform: {
            from: 'translateX(-100%)',
            enter: 'translateX(0%)',
            leave: 'translateX(100%)',
          }[stage],
        }}
      >
        I'm {stage}
      </h1>
      <strong>
        Without key change, it always transforms between "enter" and "leave"
      </strong>

      <br />
      <br />
      <br />
      <br />

      <h1
        key={shouldMount}
        style={{
          transition: '.3s',
          opacity: stage === 'enter' ? 1 : 0,
          transform: {
            from: 'translateX(-100%)',
            enter: 'translateX(0%)',
            leave: 'translateX(100%)',
          }[stage],
        }}
      >
        I'm {stage}
      </h1>
      <strong>
        With key change, it transforms from "from" to "enter" and "leave" as
        expected
      </strong>
    </div>
  )
}
