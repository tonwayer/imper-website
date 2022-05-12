import { Icon } from "@iconify/react"
import Button from "../../components/Button"
import CornerBorderDiv from "../CornerBorderDiv"

const HeroSection = () => (
  <section>
    <div className="max-w-[587px] md:mb-xx-sm mb-24">
      <CornerBorderDiv className="right-top-corner left-bottom-corner pl-16 pb-16 pt-8">
        <div className="-mr-16">
          <h2 className="font-bold text-d-lg leading-[64px] mb-2">
            Imperator.co
            <p>The next level  <br /> of staking services</p>
          </h2>
          <p className="font-inter mb-x-big text-sm">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum
          </p>
          <Button className="px-[60px] py-4">
            See the projects
            <Icon icon="bi:arrow-down" className="ml-md" />
          </Button>
        </div>
      </CornerBorderDiv>
    </div>
    <div className="md:grid md:grid-cols-4">
      <div className="col-end-4">
        <div className="mb-md">
          <span>More than</span>
          <h2 className="font-bold text-d-lg leading-[64px]">
            5000
          </h2>
          <span>
            Customers worldwide
          </span>
        </div>
        <div className="mb-md">
          <span>More than</span>
          <h2 className="font-bold text-d-lg leading-[64px]">
            15M
          </h2>
          <span>
            Delegated to us
          </span>
        </div>
      </div>
      <div className="col-end-5">
        <div className="mb-md">
          <span>We operate on</span>
          <h2 className="font-bold text-d-lg leading-[64px]">
            147
          </h2>
          <span>
            Projects
          </span>
        </div>
        <div className="mb-md">
          <span>More than</span>
          <h2 className="font-bold text-d-lg leading-[64px]">
            $35M
          </h2>
          <span>
            Distributed revenues
          </span>
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection
