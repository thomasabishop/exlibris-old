import React from "react"
import "./Wrapper.scss"
const Wrapper = ({ children }: IProps) => {
   return <div className="Wrapper">{children}</div>
}

interface IProps {
   children: React.ReactNode
}
export default Wrapper
