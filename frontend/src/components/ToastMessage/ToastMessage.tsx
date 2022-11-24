import React from "react"
import Toast from "react-bootstrap/Toast"
import ToastContainer from "react-bootstrap/ToastContainer"

interface IProps {
   message: string
   showToast: boolean
   setShowToast: React.Dispatch<React.SetStateAction<boolean>>
}

const ToastMessage = ({ message, showToast, setShowToast }: IProps) => {
   return (
      <ToastContainer className="p-3" position="bottom-end">
         <Toast
            bg="dark"
            onClose={() => setShowToast(false)}
            delay={3000}
            show={showToast}
            autohide
         >
            <Toast.Body className="text-white">{message}</Toast.Body>
         </Toast>
      </ToastContainer>
   )
}

export default ToastMessage
