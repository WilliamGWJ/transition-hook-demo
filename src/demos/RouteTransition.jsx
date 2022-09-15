import { Button } from 'react-bootstrap'
import { RiArrowLeftLine } from 'react-icons/ri'
import {
  Link,
  Route,
  Routes,
  useNavigate,
  useNavigationType,
  useParams,
} from 'react-router-dom'
import { useSwitchTransition } from 'transition-hook'

function One() {
  return <div className="page">One</div>
}
function Two() {
  return (
    <div className="page" style={{ backgroundColor: 'MediumSeaGreen' }}>
      Two
    </div>
  )
}
function Three() {
  return (
    <div className="page" style={{ backgroundColor: 'MediumSlateBlue' }}>
      Three
    </div>
  )
}

export function RouteTransition() {
  const { '*': path } = useParams()
  const transition = useSwitchTransition(path, 300)
  const navType = useNavigationType()
  const navigate = useNavigate()

  // scale animation
  // const transformFromType = {
  //   PUSH: {
  //     from: 'scale(0)',
  //     enter: 'scale(1)',
  //     leave: 'scale(2)',
  //   },
  //   POP: {
  //     from: 'scale(2)',
  //     enter: 'scale(1)',
  //     leave: 'scale(0)',
  //   },
  // }[navType]

  // slide animation
  const transformFromType = {
    PUSH: {
      from: 'translateX(100%)',
      enter: 'translateX(0%)',
      leave: 'translateX(-100%)',
    },
    POP: {
      from: 'translateX(-100%)',
      enter: 'translateX(0%)',
      leave: 'translateX(100%)',
    },
  }[navType]

  const pathElement = {
    one: One,
    two: Two,
    three: Three,
  }

  return (
    <div className="RouteTransition">
      <div
        style={{
          display: 'flex',
          gap: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}
      >
        <Button variant="link" onClick={() => navigate(-1)}>
          <RiArrowLeftLine />
          Back
        </Button>
        <Link to="one">One</Link>
        <Link to="two">Two</Link>
        <Link to="three">Three</Link>
      </div>

      {path &&
        transition((path, stage) => (
          <div
            style={{
              transition: '.3s',
              opacity: stage === 'enter' ? 1 : 0,
              position: 'absolute',
              width: '80vw',
              height: '60vh',
              left: 0,
              right: 0,
              margin: 'auto',
              transform: transformFromType?.[stage],
            }}
          >
            <Routes>
              <Route path="one" element={pathElement[path]?.()} />
              <Route path="two" element={pathElement[path]?.()} />
              <Route path="three" element={pathElement[path]?.()} />
            </Routes>
          </div>
        ))}
    </div>
  )
}
