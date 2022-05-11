import { Link } from "react-router-dom"

const Header = () => {
  return <header>
    <div className="flex min-h-[80px] justify-between items-center text-white">
      <div className="flex items-center">
        <img src="/assets/logo.svg" alt="logo" />
        Imperator
      </div>
      <div>
        <Link to="/#home" className="mr-xxx-big">Home</Link>
        <Link to="/#home" className="mr-xxx-big">Projects</Link>
        <Link to="/#home" className="mr-xxx-big">Calculator</Link>
        <Link to="/#home" className="mr-xxx-big">Instituional staker</Link>
        <Link to="/#home" className="mr-xxx-big">Venture Captial</Link>
        <Link to="/#home" className="mr-xxx-big">Blog</Link>
      </div>
    </div>
  </header>
}

export default Header
