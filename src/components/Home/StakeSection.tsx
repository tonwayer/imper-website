import CornerBorderDiv from "../CornerBorderDiv"
import CryptoIconBox from "../CryptoIconBox"

const StakeSection = () => (
  <section>
    <div className="max-w-[587px] mx-auto mt-[200px]">
      <CornerBorderDiv className="left-top-corner right-bottom-corner text-center">
        <div className="pl-lg pb-x-sm pr-xxx-big pt-2">
          <h4 className="font-bold text-md text-primary-500 font-inter mb-2">Stake now</h4>
          <h3 className="font-bold text-[45px] leading-[64px] mb-2 text-center md:text-left">
            Our supported projects
          </h3>
          <p className="font-inter mb-x-big text-sm">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum
          </p>
        </div>
      </CornerBorderDiv>
    </div>
    <div className="grid md:grid-cols-4 grid-cols-3">
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
  </section>
)

export default StakeSection
