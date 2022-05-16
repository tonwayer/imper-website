type Props = {
  name: string,
  label: string,
  value: string,
  error: Boolean,
  errorMsg?: string,
  handleChange: (e: React.ChangeEvent<any>) => void,
}

const Input = (props: Props) => {
  return <>
    <div>
      <label className="mb-2 text-sm font-medium text-[#E5E7EB]">
        {props.label}
      </label>
      <input
        type="text"
        id={props.name}
        className={
          "bg-[#65474D] w-full text-sm block p-2.5 rounded-lg text-white border "
          + (
            props.error
              ? "border-error focus:ring-error"
              : "border-white focus:ring-white"
          )
        }
        value={props.value}
        onChange={props.handleChange}
      />
      {
        props.error && <p className="mt-2 text-sm text-error">
          {props.errorMsg ? props.errorMsg : "Error Message"}
        </p>
      }
    </div>
  </>
}

export default Input
