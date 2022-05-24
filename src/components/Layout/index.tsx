import React from "react"

import Footer from "../Footer"
import Header from "../Header"
import "./index.css"

type Props = {
  children: React.ReactNode
}
const Layout = (props:Props) => {
  return <div className="bg-[#2E2224] md:px-x-huge px-4 relative overflow-hidden main">
    <Header />
    <div className="z-40 relative">{props.children}</div>
    <Footer />
    <div className="ellipse26 z-0" />
  </div>
}

export default Layout
