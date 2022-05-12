import "./index.css"

type Props = {
  children: React.ReactNode,
  className?: string
}

const CornerBorderDiv = (props: Props) => {
  return <div className={"corner-border " + props.className}>
    {props.children}
  </div>
}

export default CornerBorderDiv
