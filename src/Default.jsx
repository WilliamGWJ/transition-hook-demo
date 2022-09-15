import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export function Default() {
  return (
    <div className="Default">
      <h1>☄️ transition-hook</h1>
      <p>Select an example:</p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          maxWidth: 500,
          margin: '0 auto',
        }}
      >
        <Button variant="dark" as={Link} to="/basic">
          Basic Transition (useTransition)
        </Button>
        <Button variant="dark" as={Link} to="/transition-with-key">
          Transition With Key (useTransition)
        </Button>
        <Button variant="dark" as={Link} to="/emoji-transition">
          Emoji Transition (useTransition)
        </Button>
        <Button variant="dark" as={Link} to="/emoji-switch-transition">
          Emoji Switch Transition (useSwitchTransition)
        </Button>
        <Button variant="dark" as={Link} to="/radio-transition">
          Radio Transition (useTransition)
        </Button>
        <Button variant="dark" as={Link} to="/basic-switch-transition">
          Basic Switch Transition (useSwitchTransition)
        </Button>
        <Button variant="dark" as={Link} to="/ripple-effect">
          Ripple Effect
        </Button>
        <Button variant="dark" as={Link} to="/painter">
          Painter
        </Button>
        <Button variant="dark" as={Link} to="/route-transition/one">
          Route Transition
        </Button>
        <Button variant="dark" as={Link} to="/animation-transition">
          Animation Transition
        </Button>
        <Button variant="dark" as={Link} to="/list-shifting">
          List Shifting (useListTransition)
        </Button>
      </div>
    </div>
  )
}
