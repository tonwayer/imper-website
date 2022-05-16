type Props = {
  children: React.ReactNode
}

const Card = (props: Props) => {
  return <div className="relative p-7 max-w-[550px] bg-[#65474D] rounded-2xl border-[0.5px] border-white/20 w-100">
    {props.children}
  </div>
}

export default Card
