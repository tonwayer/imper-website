import './index.css';

type Props = {
  width?: string;
};

const Toggle = (props: Props) => (
  <label
    className={`inline-flex relative items-center cursor-pointer md:w-[unset] ${
      props.width ? props.width : ''
    }`}
  >
    <input
      type="checkbox"
      value=""
      id="checked-toggle"
      className={`sr-only peer`}
    />
    <div
      className={`border border-white/20 flex relative text-center items-center rounded-[8px] h-[40px] bg-[#402323] peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all md:w-[175px] ${
        props.width ? props.width : ''
      }`}
    >
      <span className="z-10 w-1/2">Live</span>
      <span className="z-10 w-1/2">Upcoming</span>
    </div>
  </label>
);

export default Toggle;
