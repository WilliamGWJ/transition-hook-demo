import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useTransition } from 'transition-hook'

export function EmojiTransition() {
  const [onOff, setOnOff] = useState(false)
  const cryTrans = useTransition(onOff, 300)
  const smileTrans = useTransition(!onOff, 300)

  const cryAnimationStyle = {
    from: {
      opacity: 0,
      transform: 'translateX(-100%)',
    },
    enter: {
      opacity: 1,
      transform: 'translateX(0)',
    },
    leave: {
      opacity: 0,
      transform: 'translateX(100%)',
    },
  }[cryTrans.stage]

  const smileAnimationStyle = {
    from: {
      opacity: 0,
      transform: 'translateX(-100%)',
    },
    enter: {
      opacity: 1,
      transform: 'translateX(0)',
    },
    leave: {
      opacity: 0,
      transform: 'translateX(100%)',
    },
  }[smileTrans.stage]

  return (
    <div className="SwitchDemo">
      <Button
        onClick={() => {
          setOnOff(!onOff)
        }}
      >
        Switch
      </Button>

      <br />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 40,
        }}
      >
        {cryTrans.shouldMount && (
          <span
            role="img"
            aria-label="emoji"
            style={{
              transition: '.3s',
              position: 'absolute',
              ...cryAnimationStyle,
            }}
          >
            🤣
          </span>
        )}
        {smileTrans.shouldMount && (
          <span
            role="img"
            aria-label="emoji"
            style={{
              transition: '.3s',
              position: 'absolute',
              ...smileAnimationStyle,
            }}
          >
            😝
          </span>
        )}
      </div>
    </div>
  )
}
