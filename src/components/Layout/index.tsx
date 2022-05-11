import React from "react"
import Footer from "../Footer"
import Header from "../Header"

type Props = {
  children: React.ReactNode
}
const Layout = (props:Props) => {
  return <div className="bg-[#2E2224] px-x-huge">
    <Header />
    <div>{props.children}</div>
    <Footer />
  </div>
}

export default Layout
