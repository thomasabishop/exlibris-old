import React from "react"
import Header from "../../components/Header"
import { Container } from "react-bootstrap"
const Main: React.FC<IProps> = ({ children }: IProps) => {
  return (
    <React.Fragment>
      <Header />
      <Container>{children}</Container>
    </React.Fragment>
  )
}

interface IProps {
  children: React.ReactNode
}

export default Main
