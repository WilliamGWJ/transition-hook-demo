import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useTransition } from 'transition-hook'

export function BasicTransition() {
  const [showModal, setShowModal] = useState(false)
  const modalTrans = useTransition(showModal, 300)
  const buttonTrans = useTransition(!showModal, 300)

  return (
    <div className="BasicTransition">
      <Button
        style={{
          transition: '.3s',
          opacity: buttonTrans.stage === 'enter' ? 1 : 0,
          filter: buttonTrans.stage === 'enter' ? 'unset' : 'blur(10px)',
          transform:
            buttonTrans.stage === 'enter'
              ? 'unset'
              : 'translateY(50px) scale(1.5)',
        }}
        onClick={() => setShowModal(true)}
      >
        Show Message
      </Button>

      {modalTrans.shouldMount && (
        <Modal.Dialog
          style={{
            color: 'black',
            transition: '.3s',
            opacity: modalTrans.stage === 'enter' ? 1 : 0,
            filter: modalTrans.stage === 'enter' ? 'unset' : 'blur(10px)',
            transform:
              modalTrans.stage === 'enter'
                ? 'unset'
                : 'translateY(-150px) scale(.3)',
          }}
        >
          <Modal.Header closeButton onHide={() => setShowModal(false)}>
            <Modal.Title>☄️ transition-hook</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Please give me a star if you like this project 🥺👇</p>
            <a
              href="https://github.com/iamyoki/transition-hook"
              target="_blank"
            >
              https://github.com/iamyoki/transition-hook
            </a>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={() => setShowModal(false)}>
              Next Time
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      )}
    </div>
  )
}
