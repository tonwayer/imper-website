import React from "react"
import { Link } from "react-router-dom"
import CircleIcon from "../CircleIcon"

const FooterCol = (props: { title: string, items: Array<{ title: string, address?: string }> }) => <div className="md:ml-[70px]">
  <h2 className="mb-md text-[24px] font-semibold font-spaceGrotesk text-white">{props.title}</h2>
  <ul className="text-imperGrey">
    {props.items.map((item, index) => (
      <li className="mb-1" key={index}>
        <Link to={item.address ? item.address : "#"}>{item.title}</Link>
      </li>
    ))}
  </ul>
</div>

const Footer = () => {
  return <footer className="relative text-white md:text-left text-center pt-[100px] md:px-[170px] z-40">
    <div className="md:flex md:justify-between">
      <div className="md:block flex md:justify-start justify-center mb-[54px]">
        <Link to="/#" className="flex items-center">
          <div className="flex items-center">
            <img src="/assets/logo.svg" alt="logo" />
          </div>
        </Link>
      </div>
      <div className="flex md:flex-row flex-col">
        <div className="md:order-1 order-2 mb-[52px]">
          <FooterCol
            title="Company"
            items={[
              { title: "Home", address: "/home" },
              { title: "Project" },
              { title: "Calculator", address: "/calculator" },
              { title: "Institutional Staker" },
              { title: "Venture Capital" },
              { title: "Blog" },
            ]}
          />
        </div>
        <div className="md:order-2 order-3 mb-[52px]">
          <FooterCol
            title="Legals"
            items={[
              { title: "Home" },
              { title: "Project" },
              { title: "Calculator" },
              { title: "Blog" },
            ]}
          />
        </div>
        <div className="md:order-3 order-1 mb-[52px]">
          <div className="md:ml-[70px]">
            <h2 className="mb-md text-[24px] font-semibold font-spaceGrotesk text-white">Find us on social media</h2>
            <div className="flex justify-center">
              <div className="mr-[30px]">
                <CircleIcon icon="fontisto:discord" />
              </div>
              <div className="mr-[30px]">
                <CircleIcon icon="akar-icons:medium-fill" />
              </div>
              <div className="mr-[30px]">
                <CircleIcon icon="akar-icons:twitter-fill" />
              </div>
              <div>
                <CircleIcon icon="akar-icons:linkedin-fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer
