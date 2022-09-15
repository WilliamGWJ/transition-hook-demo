import { Button } from 'react-bootstrap'
import { useRef, useState } from 'react'
import { useListTransition } from 'transition-hook'
import { RiSubtractLine } from 'react-icons/ri'

export function ListShifting() {
  const [list, setList] = useState([1])
  const timeoutRef = useRef(300)
  const transition = useListTransition(list, timeoutRef.current)

  return (
    <div className="ListShifting">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          marginBottom: 50,
        }}
      >
        <Button onClick={() => setList((prev) => prev.concat(prev.length + 1))}>
          Add Item
        </Button>

        <Button
          variant="danger"
          onClick={() => {
            setList([])
            timeoutRef.current = list.length * 50
          }}
        >
          Remove All
        </Button>
      </div>

      {transition((item, stage) => (
        <h1
          style={{
            transition: '.3s',
            ...(stage === 'leave' && { transitionDelay: item * 50 + 'ms' }),
            opacity: stage === 'enter' ? 1 : 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            transformOrigin: 'center right',
            transform: {
              from: 'translateX(-100%) rotate(90deg)',
              enter: 'translateX(0%)',
              leave: 'translateX(100%) rotate(-90deg)',
            }[stage],
          }}
        >
          Item: {item}
          <Button
            variant="danger"
            size="sm"
            onClick={() =>
              setList((prev) => prev.filter((pitem) => pitem !== item))
            }
          >
            <RiSubtractLine />
          </Button>
        </h1>
      ))}
    </div>
  )
}
