import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useTransition } from 'transition-hook'

function Underline({ checked, direction }) {
  const { stage, shouldMount } = useTransition(checked, 500)

  const stagedStyle = {
    from: {
      width: '0%',
      left: direction !== 'toRight' ? '100%' : '0%',
      opacity: 0,
    },
    enter: {
      width: '100%',
    },
    leave: {
      width: '0%',
      left: direction === 'toRight' ? '100%' : '0%',
      opacity: 0,
    },
  }[stage]

  return (
    shouldMount && (
      <div
        className="Underline"
        style={{
          backgroundColor: 'mediumslateblue',
          position: 'absolute',
          height: 4,
          width: '100%',
          bottom: -10,
          left: 0,
          transition: '.3s',
          ...stagedStyle,
        }}
      ></div>
    )
  )
}

function Radio({ checked }) {
  const { stage, shouldMount } = useTransition(checked, 300)

  return (
    <div
      className="Radio"
      style={{
        display: 'inline-flex',
      }}
    >
      <div
        className="outline"
        style={{
          width: 30,
          height: 30,
          boxShadow: '0 0 0 1px mediumslateblue inset',
          borderRadius: '50%',
          position: 'relative',
          padding: 4,
          boxSizing: 'content-box',
          display: 'grid',
          placeItems: 'center',
          perspective: 1000,
        }}
      >
        {shouldMount && (
          <div
            className="fullfiiled"
            style={{
              width: '80%',
              height: '80%',
              boxShadow: {
                from: '0 0 0 15px mediumslateblue inset',
                enter: '0 0 0 15px mediumslateblue inset',
                leave: '0 0 0 0px mediumslateblue inset',
              }[stage],
              borderRadius: 'inherit',
              transition: '.3s ease-out',
              opacity: stage === 'enter' ? 1 : 0,
              filter: stage === 'enter' ? 'unset' : 'blur(2px)',
              transform: {
                from: 'scale(0)',
                enter: 'scale(1)',
                leave: 'scale(1.5)',
              }[stage],
            }}
          />
        )}
      </div>
    </div>
  )
}

const list = ['Apple', 'Banana', 'Orange']

export function RadioTransition() {
  const [selected, setSelected] = useState('Apple')
  const prevSelectedRef = useRef(selected)

  useEffect(() => {
    prevSelectedRef.current = selected
  })

  const [curIndex, prevIndex] = [
    list.indexOf(selected),
    list.indexOf(prevSelectedRef.current),
  ]
  const direction = curIndex - prevIndex > 0 ? 'toRight' : 'toLeft'

  return (
    <div className="RadioTransition">
      <div
        className="selection"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
          fontSize: '2em',
          marginTop: 50,
        }}
      >
        {list.map((item) => (
          <label
            onClick={() => setSelected(item)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginRight: 10,
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            {item}
            <Radio checked={selected === item} />
            <Underline checked={selected === item} direction={direction} />
          </label>
        ))}
      </div>
    </div>
  )
}
