import Card from "../Card"
import CornerBorderDiv from "../CornerBorderDiv"
import Button from "../../components/Button"

const CalculatorSection = () => (
  <section className="mt-[350px]">
    <div className="md:flex">
      <div className="md:w-1/3 md:mr-x-huge">
        <CornerBorderDiv className="right-top-corner left-bottom-corner py-5 px-10">
          <h4 className="font-bold text-md text-primary-500 font-inter mb-2">Simulate your earn</h4>
          <h3 className="font-bold text-[45px] leading-[64px] mb-2 text-center md:text-left">
            Calculator
          </h3>
          <p className="font-inter mb-x-big text-sm">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum
          </p>
        </CornerBorderDiv>
      </div>
      <div className="md:w-2/3 md:mt-[85px]">
        <Card>
          <h4 className="font-spaceGrotesk text-2xl font-bold text-center mb-5">
            Simulate your earn
          </h4>
          <select id="countries" className="bg-[#65474D] mb-8 border text-white text-sm rounded-lg block w-full p-2.5">
            <option value="1">
              {/* <img src="/assets/crypto_icon_1.svg" alt="crypto_icon_1.svg" className="w-xxx-big h-xxx-big" /> */}
              Cosmos
              {/* <span className="hidden md:block text-[11px] bg-success absolute text-white rounded-[5px] py-1 px-[5px]"> */}
                0 % fees
              {/* </span> */}
            </option>
            <option value="2">Solana</option>
          </select>
          <input id="medium-range" type="range" defaultValue="50" className="mb-6 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer " />
          <div className="flex justify-between">
            <p>How many <span className="text-info">{`{ASSET}`}</span> do you have?</p>
            <p>Yearly return</p>
          </div>
          <div className="flex justify-between font-spaceGrotesk md:text-[45px] font-bold text-[32px]">
            <span className="border-b-[1px] border-b-imperGrey">600,000</span>
            <span className="text-success">+17.65%</span>
          </div>
          <table className="w-full text-sm text-gray-500 text-right">
            <tbody>
              <tr className="border-b text-sm">
                <td className="text-left text-imperGrey pb-2 pt-6">
                  Daily earnings
                </td>
                <td className="text-[#E5E7EB] font-bold pb-2 pt-6">
                  8.01 ASSETS
                </td>
                <td className="text-imperGrey pb-2 pt-6">
                  $159.23
                </td>
              </tr>
              <tr className="border-b text-sm">
                <td className="text-left text-imperGrey pb-2 pt-6">
                  Monthly earnings
                </td>
                <td className="text-[#E5E7EB] font-bold pb-2 pt-6">
                  208.98 ASSETS
                </td>
                <td className="text-imperGrey pb-2 pt-6">
                  $169.865.23
                </td>
              </tr>
              <tr className="border-b text-sm">
                <td className="text-left text-imperGrey pb-2 pt-6">
                  Yearly earnings
                </td>
                <td className="text-[#E5E7EB] font-bold pb-2 pt-6">
                  2978.76 ASSETS
                </td>
                <td className="text-imperGrey pb-2 pt-6">
                  $2,187,985.55
                </td>
              </tr>
            </tbody>
          </table>

          <Button className="w-full mt-4">
            Stake now
          </Button>
        </Card>
      </div>
    </div>
  </section>
)

export default CalculatorSection
