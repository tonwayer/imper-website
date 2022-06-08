import { Icon } from "@iconify/react"
import { useEffect, useMemo, useState } from "react"
import Button from "../../components/Button"
import CornerBorderDiv from "../CornerBorderDiv"
import FadeInSection from "../FadeInSection"
import Lode from "../Lode"
const t = 0.01

const HeroSection = () => {

  const [scrollRate, setScrollRate] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true)
    return () => {
      window.removeEventListener('scroll', handleScroll, true)
    }
  }, [])

  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scrollRate = winScroll / height
    setScrollRate(scrollRate)
  }

  const topMargin = useMemo(() => {
    if (scrollRate < t) {
      return 115
    } else {
      return 115 - 5000 * (scrollRate - t)
    }
  }, [scrollRate])

  const marginX = useMemo(() => {
    return 8000 * scrollRate
  }, [scrollRate])

  return <section
    className={`md:px-[180px] left-0 right-0 mt-0 md:fixed md:top-[115px] relative`}
    style={{
      marginTop: topMargin,
      opacity: 1 - scrollRate * 10,
    }}
  >
    <Lode />
    <div className="max-w-[587px] md:mb-xx-sm mb-[80px] relative">
      <CornerBorderDiv
        className="block md:hidden pt-[380px]"
      >
        <div className="md:-mr-16">
          <h2 className="font-bold md:text-d-lg leading-[64px] mb-2 text-center md:text-left text-[45px]">
            <FadeInSection>
              Imperator.co
            </FadeInSection>
            <p>Venture Capital</p>
          </h2>
          <p className="font-inter mb-x-big text-sm">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
          </p>
          <Button className="px-[60px] py-4 w-full">
            <div className="flex items-center justify-center">
              See the projects
              <Icon icon="bi:arrow-down" className="ml-md" />
            </div>
          </Button>
        </div>
      </CornerBorderDiv>
      <CornerBorderDiv
        className="hidden md:block right-top-corner left-bottom-corner md:pl-16 md:pb-16 md:pt-8"
        style={{ left: -marginX }}
      >
        <div className="md:-mr-16">
          <h2 className="font-bold md:text-d-lg leading-[64px] mb-2 text-center md:text-left text-[45px]">
            <FadeInSection>
              Imperator.co
            </FadeInSection>
            <p>The next level  <br /> of staking services</p>
          </h2>
          <p className="font-inter mb-x-big text-sm">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum
          </p>
          <Button className="px-[60px] py-4">
            <div className="flex items-center">
              See the projects
              <Icon icon="bi:arrow-down" className="ml-md" />
            </div>
          </Button>
        </div>
      </CornerBorderDiv>
    </div>
    <div className="md:grid md:grid-cols-5 md:ml-[110px] md:-mt-5 fixed w-full"
      style={{ right: -marginX }}
    >
      <div className="col-end-5">
        <FadeInSection>
          <div className="md:mb-md mb-[70px]">
            <span>More than</span>
            <h2 className="font-bold text-d-lg leading-[64px]">
              5000
            </h2>
            <span>
              Customers worldwide
            </span>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="md:mb-md mb-[70px]">
            <span>More than</span>
            <h2 className="font-bold text-d-lg leading-[64px]">
              15M
            </h2>
            <span>
              Delegated to us
            </span>
          </div>
        </FadeInSection>
      </div>
      <div className="col-end-6 md:mt-1">
        <FadeInSection>
          <div className="md:mb-md mb-[70px]">
            <span>We operate on</span>
            <h2 className="font-bold text-d-lg leading-[64px]">
              147
            </h2>
            <span>
              Projects
            </span>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="md:mb-md">
            <span>More than</span>
            <h2 className="font-bold text-d-lg leading-[64px]">
              $35M
            </h2>
            <span>
              Distributed revenues
            </span>
          </div>
        </FadeInSection>
      </div>
    </div>
  </section>
}

export default HeroSection
