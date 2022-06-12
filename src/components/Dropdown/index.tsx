import { Icon } from '@iconify/react';
import { useState } from 'react';

import './index.css';

const items = [
  { name: 'Cosmos', fee: '0% fees', image: 1 },
  { name: 'Osmosis', fee: '0% fees', image: 3 },
  { name: 'Akash Network', fee: '0% fees', image: 2 },
  { name: 'Juno', fee: null, image: 4 },
  { name: 'Alexar', fee: null, image: 5 },
  { name: 'Ki Chain', fee: null, image: 6 },
];

const DropDown = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={`flex items-center bg-[#332424]/50 w-full p-2 rounded-lg ${
          collapsed ? 'rounded-b-none' : ''
        }`}
      >
        <img
          src="/assets/crypto_icon_1.svg"
          alt="crypto_icon_1.svg"
          className="w-8 h-8 mr-3"
        />
        Cosmos
        <span className="ml-2 bg-success text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">
          0% fees
        </span>
        <Icon
          icon={collapsed ? 'ep:arrow-up' : 'ep:arrow-down'}
          style={{ fontSize: '24px' }}
          className="ml-auto"
        />
      </button>
      {collapsed && (
        <div
          id="dropdown"
          className="absolute z-10 divide-y divide-gray-100 w-full"
        >
          <ul
            className="dropdown-list text-sm text-white bg-[#65474D] rounded-b-lg"
            aria-labelledby="dropdownDefault"
          >
            <li className="flex items-center p-[10px]">
              <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <Icon
                    icon="ph:magnifying-glass"
                    style={{ fontSize: '24px' }}
                  />
                </div>
                <input className="bg-[#332424] rounded-[20px] p-2 pl-10 w-full" />
              </div>
            </li>
            {items.map((item, index) => (
              <li className="flex items-center p-[10px]" key={index}>
                <img
                  src={`/assets/crypto_icon_${item.image}.svg`}
                  alt={`/assets/crypto_icon_${item.image}.svg`}
                  className="w-8 h-8 mr-3"
                />
                {item.name}
                {item.fee && (
                  <span className="ml-auto bg-success text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">
                    {item.fee}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
