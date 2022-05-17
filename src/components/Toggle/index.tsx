import './index.css'

const Toggle = () => (
  <label className="inline-flex relative items-center cursor-pointer">
  <input type="checkbox" value="" id="checked-toggle" className="sr-only peer" />
  <div className="border border-white/20 flex relative w-[175px] text-center items-center rounded-[8px] h-[40px] bg-[#402323] peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all">
    <span className="z-10 w-1/2">Live</span>
    <span className="z-10 w-1/2">Upcoming</span>
  </div>
</label>
)

export default Toggle
