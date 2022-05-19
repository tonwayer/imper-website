import Card from "../Card"
import CornerBorderDiv from "../CornerBorderDiv"
import Button from "../../components/Button"
import DropDown from "../Dropdown"

const CalculatorSection = () => (
  <section className="md:mt-[330px] md:px-[10px]">
    <div className="md:flex">
      <div className="md:w-2/5 md:mr-x-huge">
        <CornerBorderDiv className="right-top-corner left-bottom-corner py-5 px-10 pb-8">
          <h4 className="font-bold text-md text-primary-500 font-inter mb-2">Simulate your earn</h4>
          <h3 className="medium-title mb-2 text-center md:text-left">
            Calculator
          </h3>
          <p className="font-inter mb-x-big text-base">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum
          </p>
        </CornerBorderDiv>
      </div>
      <div className="md:w-3/5 md:mt-[85px]">
        <Card>
          <h4 className="font-spaceGrotesk text-2xl font-bold text-center mb-5">
            Simulate your earn
          </h4>
          <DropDown />
          <div className="relative my-4">
            <div className="bg-[#3f5d4a] rounded-full overflow-hidden">
              <div className="bg-success w-1/2 h-4" role="progressbar" aria-label="music progress">
              </div>
            </div>
            <div className="bg-white absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center rounded-full shadow border-0">
            </div>
          </div>
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
