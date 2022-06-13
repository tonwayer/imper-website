import { useEffect, useState } from 'react';
import Card from '../Card';
import CornerBorderDiv from '../CornerBorderDiv';
import Button from '../../components/Button';
import DropDown from '../Dropdown';
import FadeInSection from '../FadeInSection';
import NumberInput from '../NumberInput';
import Progress from '../Progress';

import { ItemProps } from '../Dropdown';
import { useAxios } from '../../services/useAxios';
import { useMemo } from 'react';
import { nFormatter } from '../../services/utils';

const CalculatorSection = () => {
  const { data } = useAxios('/projects/all', 'get')
  const [selectedItem, setSelectedItem] = useState<ItemProps | null>(null);
  const [asset, setAsset] = useState(0)

  const activeItems = useMemo(() => {
    if (data && data.length) {
      const items = data.filter((project: { project_state: number; }) => project.project_state === 1)
      return items.map((item: any) => ({
        name: item.project_name,
        fee: item.project_commission_rate * 100,
        image: item.project_image,
        project_apr: item.project_apr,
        token_price: item.token_price,
      }))
    }
    else return []
  }, [data])


  useEffect(() => {
    if (data && data.length) {
      setSelectedItem(data[0])
    }
    else
      setSelectedItem(null)
  }, [data])

  const handleClickItem = (item: ItemProps) => {
    setSelectedItem(item)
  }

  const handleChangeAsset = (value: number) => {
    setAsset(value)
  }

  const yearlyEarning = useMemo(() => {
    console.log(selectedItem, asset)
    if (selectedItem) {
      console.log(selectedItem?.project_apr * selectedItem?.token_price * asset)
      return selectedItem?.project_apr * selectedItem?.token_price * asset
    }
    else
      return 0
  }, [selectedItem, asset])

  return <section className="md:mt-[330px] md:px-[10px]">
    <div className="md:flex">
      <div className="md:w-2/5 md:mr-x-huge">
        <CornerBorderDiv className="right-top-corner left-bottom-corner md:py-5 md:px-10 md:pb-8">
          <div>
            <FadeInSection>
              <h4 className="font-bold text-md text-primary-500 font-inter mb-2">
                Simulate your earn
              </h4>
              <h3 className="medium-title mb-2 text-center md:text-left">
                Calculator
              </h3>
            </FadeInSection>
            <p className="hidden md:block font-inter mb-x-big text-base">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum
            </p>
            <p className="block md:hidden font-inter mb-x-big text-base">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </CornerBorderDiv>
      </div>
      <div className="md:w-3/5 md:mt-[85px]">
        <Card className="calc-card  ml-auto">
          <h4 className="hidden md:block font-spaceGrotesk text-2xl font-bold text-center mb-5">
            Simulate your earn
          </h4>
          <DropDown items={activeItems} handleClickItem={handleClickItem} />
          <Progress progress={45} />
          <div className="flex justify-between md:mt-0 mt-8">
            <p className="text-left">
              How many <span className="text-info">{`{ASSET}`}</span> do you
              have?
            </p>
            <p>Yearly return</p>
          </div>
          <div className="flex justify-between font-spaceGrotesk md:text-[45px] font-bold text-[32px]">
            <span className="border-b-[1px] border-b-imperGrey w-1/2">
              <NumberInput handleChange={handleChangeAsset} value={asset} />
            </span>
            <span className="text-success">{`+${selectedItem?.project_apr}%`}</span>
          </div>
          <div className="relative my-4 block md:hidden ">
            <div className="bg-[#3f5d4a] rounded-full overflow-hidden">
              <div
                className="bg-success w-1/2 h-4"
                role="progressbar"
                aria-label="music progress"
              ></div>
            </div>
            <div className="bg-white absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center rounded-full shadow border-0"></div>
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
                <td className="text-imperGrey pb-2 pt-6 min-w-[60px]">{`$${nFormatter(yearlyEarning / 36, 2)}`}</td>
              </tr>
              <tr className="border-b text-sm">
                <td className="text-left text-imperGrey pb-2 pt-6">
                  Monthly earnings
                </td>
                <td className="text-[#E5E7EB] font-bold pb-2 pt-6">
                  208.98 ASSETS
                </td>
                <td className="text-imperGrey pb-2 pt-6 min-w-[60px]">{`$${nFormatter(yearlyEarning / 12, 2)}`}</td>
              </tr>
              <tr className="border-b text-sm">
                <td className="text-left text-imperGrey pb-2 pt-6">
                  Yearly earnings
                </td>
                <td className="text-[#E5E7EB] font-bold pb-2 pt-6">
                  2978.76 ASSETS
                </td>
                <td className="text-imperGrey pb-2 pt-6 min-w-[60px]">{`$${nFormatter(yearlyEarning, 2)}`}</td>
              </tr>
            </tbody>
          </table>
          <Button className="w-full mt-4">Stake now</Button>
        </Card>
      </div>
    </div>
  </section>
};

export default CalculatorSection;
