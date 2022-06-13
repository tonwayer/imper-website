import { Icon } from '@iconify/react';
import CurrencyInput from 'react-currency-input-field';

type Props = {
  value: number;
  handleChange: Function;
  className?: string;
};

const NumberInput = (props: Props) => {
  const handleStep = (type: string) => {
    if (type === 'up') {
      props.handleChange(props.value + 1000);
    } else {
      props.handleChange(props.value - 1000);
    }
  };

  return (
    <div className={'flex ' + props.className}>
      <div className="flex flex-col justify-center">
        <div onClick={() => handleStep('up')} className="cursor-pointer">
          <Icon icon="bxs:up-arrow" style={{ fontSize: '16px' }} />
        </div>
        <div className="cursor-pointer mt-2" onClick={() => handleStep('down')}>
          <Icon icon="bxs:down-arrow" style={{ fontSize: '16px' }} />
        </div>
      </div>
      <CurrencyInput
        value={props.value}
        className="w-full text-white md:text-[45px] font-bold text-[32px] bg-transparent border-0 focus:ring-0"
        placeholder=""
        decimalsLimit={2}
        onValueChange={(value) => props.handleChange(value)}
      />
    </div>
  );
};

export default NumberInput;
