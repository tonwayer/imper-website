import { Link } from "react-router-dom"

import CircleIcon from "../CircleIcon"

const Header = () => {
  return <header className="px-[90px]">
    <div className="flex min-h-[80px] justify-between items-center text-white">
      <div className="flex items-center">
        <img src="/assets/logo.svg" alt="logo" />
        Imperator
      </div>
      <div className="font-inter text-[14px] md:flex hidden">
        <Link to="/#home" className="mr-xxx-big">Home</Link>
        <Link to="/#home" className="mr-xxx-big">Projects</Link>
        <Link to="/calculator" className="mr-xxx-big">Calculator</Link>
        <Link to="/#home" className="mr-xxx-big">Instituional staker</Link>
        <Link to="/#home" className="mr-xxx-big">Venture Captial</Link>
        <Link to="/#home" className="mr-xxx-big">Blog</Link>
        <div className="flex ml-x-lg">
          <div className="mr-[30px]">
            <Link to="#">
              <CircleIcon icon="fontisto:discord" classNames="w-x-big h-x-big" fontSize="12px" />
            </Link>
          </div>
          <div className="mr-[30px]">
            <Link to="#">
              <CircleIcon icon="akar-icons:medium-fill" classNames="w-x-big h-x-big" fontSize="12px" />
            </Link>
          </div>
          <div className="mr-[30px]">
            <Link to="#">
              <CircleIcon icon="akar-icons:twitter-fill" classNames="w-x-big h-x-big" fontSize="12px" />
            </Link>
          </div>
          <div>
            <Link to="#">
              <CircleIcon icon="akar-icons:linkedin-fill" classNames="w-x-big h-x-big" fontSize="12px" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </header>
}

export default Header
