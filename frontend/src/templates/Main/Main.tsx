const Main: React.FC<IProps> = ({ children }: IProps) => {
  return <div>{children}</div>
}

interface IProps {
  children: React.ReactNode
}

export default Main
