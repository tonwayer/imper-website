import React from 'react'

import CornerBorderDiv from "../CornerBorderDiv"
import CryptoIconBox from "../CryptoIconBox"
import FadeInSection from "../FadeInSection"
import Toggle from "../Toggle"

const StakeSection = () => {
  const [isVisible, setVisible] = React.useState(false)
  const domRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    });
    if (domRef?.current) {

      observer.observe(domRef.current)
    }
  }, [domRef])

  return <section>
    <div className='md:block hidden'>
      <div ref={domRef} className={`absolute mt-36 -left-[470px] ${isVisible ? 'translate-x-[220px]' : ''}`} style={{ transition: 'transform 1s ease-in-out 0.5s' }}>
        <img src="/assets/pilonne1.png" alt="plonne1" />
      </div>
      <div ref={domRef} className={`absolute mt-36 -right-[440px] ${isVisible ? '-translate-x-[220px]' : ''}`} style={{ transition: 'transform 1s ease-in-out 0.5s' }}>
        <img src="/assets/pilonne2.png" alt="plonne2" />
      </div>
    </div>
    <div className="max-w-[587px] mx-auto md:mt-[155px] mt-[30px]">
      <CornerBorderDiv className="left-top-corner right-bottom-corner text-center">
        <div className="md:pl-lg md:pb-[42px] md:pr-xxx-big pt-2">
          <FadeInSection>
            <h4 className="font-bold text-md text-primary-500 font-inter mb-2">Stake now</h4>
            <h3 className="font-bold md:text-[45px] md:leading-[64px] text-4xl mb-2 text-center md:text-left">
              Our supported projects
            </h3>
          </FadeInSection>
          <p className="font-inter mb-x-big text-sm">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum
          </p>
        </div>
      </CornerBorderDiv>
    </div>
    <div className="md:flex md:justify-center md:mt-7 md:mb-16">
      <Toggle width="w-full" />
    </div>
    <div className="hidden md:grid md:grid-cols-4 grid-cols-3 xl:px-[200px] mt-8">
      <CryptoIconBox fee={0} label="Icon text label" icon={"crypto_icon_1"} />
      <CryptoIconBox fee={0} label="Icon text label" icon={"crypto_icon_2"} />
      <CryptoIconBox fee={0} label="Icon text label" icon={"crypto_icon_3"} />
      <CryptoIconBox label="Icon text label" icon={"crypto_icon_4"} />
      <CryptoIconBox label="Icon text label" icon={"crypto_icon_5"} />
      <CryptoIconBox label="Icon text label" icon={"crypto_icon_6"} />
      <CryptoIconBox label="Icon text label" icon={"crypto_icon_7"} />
      <CryptoIconBox label="Icon text label" icon={"crypto_icon_8"} />
      <CryptoIconBox label="Icon text label" icon={"crypto_icon_1"} />
      <CryptoIconBox label="Icon text label" icon={"crypto_icon_2"} />
      <CryptoIconBox label="Icon text label" icon={"crypto_icon_3"} />
      <CryptoIconBox label="Icon text label" icon={"crypto_icon_4"} />
      <CryptoIconBox label="Icon text label" icon={"crypto_icon_5"} />
      <CryptoIconBox label="Icon text label" icon={"crypto_icon_6"} />
      <CryptoIconBox label="Icon text label" icon={"crypto_icon_7"} />
      <CryptoIconBox label="Icon text label" icon={"crypto_icon_8"} />
    </div>
    <div className="grid md:hidden md:grid-cols-4 grid-cols-3 md:px-[200px] mt-8">
      <CryptoIconBox fee={0} label="Icon text label" icon={"crypto_icon_1"} />
      <CryptoIconBox fee={0} label="Icon text label" icon={"crypto_icon_2"} />
      <CryptoIconBox fee={0} label="Icon text label" icon={"crypto_icon_3"} />
      <CryptoIconBox label="Icon text label" icon={"crypto_icon_4"} />
      <CryptoIconBox label="Icon text label" icon={"crypto_icon_5"} />
      <CryptoIconBox label="Icon text label" icon={"crypto_icon_6"} />
      <CryptoIconBox label="Icon text label" icon={"crypto_icon_7"} />
      <CryptoIconBox label="Icon text label" icon={"crypto_icon_8"} />
      <CryptoIconBox label="Icon text label" icon={"crypto_icon_1"} />
      <CryptoIconBox label="Icon text label" icon={"crypto_icon_2"} />
      <CryptoIconBox label="Icon text label" icon={"crypto_icon_3"} />
      <CryptoIconBox label="Icon text label" icon={"crypto_icon_4"} />
    </div>
  </section>
}

export default StakeSection
