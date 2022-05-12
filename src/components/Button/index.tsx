import { MouseEventHandler } from "react"

type Props = {
  handleClick?: MouseEventHandler,
  children: React.ReactNode,
  disabled?: boolean,
}

const Button = (props: Props) => {
  return <button
    onClick={props.handleClick ? props.handleClick : undefined}
    type="button"
    disabled={props.disabled ? props.disabled : false}
    className={
      "text-white bg-primary-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
      + (
        props.disabled
          ? " bg-primary-700 cursor-not-allowed"
          : " hover:bg-primary-200 active:bg-[#5F1517]"
      )
    }
  >
    {props.children}
  </button>
}

export default Button
