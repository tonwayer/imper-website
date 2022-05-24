
type Props = {
  progress: number;
}

const NumberInput = (props: Props) => {

  return <div className="relative my-4 hidden md:block ">
    <div className="bg-[#3f5d4a] rounded-full overflow-hidden">
      <div className={`bg-success h-4`} role="progressbar" aria-label="music progress"
        style={{ width: `${props.progress}%` }}
      >
      </div>
    </div>
    <div
      className="bg-white absolute top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center rounded-full shadow border-0"
      style={{ left: `${props.progress}%` }}
    >
    </div>
  </div>
}

export default NumberInput
