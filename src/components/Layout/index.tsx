import React from "react"

import Footer from "../Footer"
import Header from "../Header"
import "./index.css"

type Props = {
  children: React.ReactNode
}
const Layout = (props: Props) => {
  return <div className="bg-[#2E2224] md:px-x-huge px-4 relative main overflow-hidden">
    <div className="max-w-[1440px] mx-auto relative">
      <Header />
      <div className="z-40 relative">{props.children}</div>
      <Footer />
      <div className="ellipse26 z-0" />
    </div>
  </div>
}

export default Layout
