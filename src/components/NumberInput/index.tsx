import { useState } from 'react';
import { Icon } from '@iconify/react';
import CurrencyInput from 'react-currency-input-field';

type Props = {
  className?: string;
};

const NumberInput = (props: Props) => {
  const [value, setValue] = useState(600000);
  const handleStep = (type: string) => {
    if (type === 'up') {
      setValue(value + 1000);
    } else {
      setValue(value - 1000);
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
        value={value}
        className="w-full text-white md:text-[45px] font-bold text-[32px] bg-transparent border-0 focus:ring-0"
        placeholder="Please enter a number"
        decimalsLimit={2}
        onValueChange={(value) => setValue(Number(value))}
      />
    </div>
  );
};

export default NumberInput;
