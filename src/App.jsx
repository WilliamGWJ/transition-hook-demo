import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { RiAppsLine } from 'react-icons/ri'
import { Link, Route, Routes, useMatch } from 'react-router-dom'
import { Default } from './Default'
import { AnimationTransition } from './demos/AnimationTransition'
import { BasicSwitchTransition } from './demos/BasicSwitchTransition'
import { BasicTransition } from './demos/BasicTransition'
import { EmojiSwitchTransition } from './demos/EmojiSwitchTransition'
import { EmojiTransition } from './demos/EmojiTransition'
import { ListShifting } from './demos/ListShifting'
import { Painter } from './demos/Painter'
import { RadioTransition } from './demos/RadioTransition'
import { RippleEffect } from './demos/RippleEffect'
import { RouteTransition } from './demos/RouteTransition'
import { TransitionWithKey } from './demos/TransitionWithKey'
import './styles.css'

export default function App() {
  const match = useMatch('/')

  return (
    <div className="App">
      {!match && (
        <Button
          variant="dark"
          style={{
            position: 'fixed',
            zIndex: 100,
            left: 20,
            top: 20,
          }}
          as={Link}
          to="/"
        >
          <RiAppsLine />
        </Button>
      )}

      <Routes>
        <Route index element={<Default />} />
        <Route path="/basic" element={<BasicTransition />} />
        <Route path="/transition-with-key" element={<TransitionWithKey />} />
        <Route path="/emoji-transition" element={<EmojiTransition />} />
        <Route path="/radio-transition" element={<RadioTransition />} />
        <Route
          path="/emoji-switch-transition"
          element={<EmojiSwitchTransition />}
        />
        <Route
          path="/basic-switch-transition"
          element={<BasicSwitchTransition />}
        />
        <Route path="/ripple-effect" element={<RippleEffect />} />
        <Route path="/painter" element={<Painter />} />
        <Route path="/route-transition/*" element={<RouteTransition />} />
        <Route path="/animation-transition" element={<AnimationTransition />} />
        <Route path="/list-shifting" element={<ListShifting />} />
      </Routes>
    </div>
  )
}
