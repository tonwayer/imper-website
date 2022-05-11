import { Link } from "react-router-dom"

const Header = () => {
  return <header>
    <div className="flex min-h-[80px] justify-between">
      <div className="flex">
        <img src="/assets/logo.svg" alt="logo" />
        Imperator
      </div>
      <div>
        <Link to="/#home">Home</Link>
        <Link to="/#home">Projects</Link>
        <Link to="/#home">Calculator</Link>
        <Link to="/#home">Institutional Work</Link>
      </div>
    </div>
  </header>
}

export default Header
