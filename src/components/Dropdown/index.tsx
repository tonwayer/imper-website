import { Icon } from '@iconify/react';
import React, { useMemo, useState } from 'react';

import './index.css';

export type ItemProps = { name: string; fee: number | null; image: number; project_apr: number; token_price: number };

type DropDownProps = {
  items: Array<ItemProps>;
  handleClickItem: Function;
};

const DropDown = (props: DropDownProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedItem, setSelectedItem] = useState(props.items[0] ?? null);
  const [filter, setFilter] = useState('');

  const handleSelectItem = (item: ItemProps) => {
    props.handleClickItem(item);
    setSelectedItem(item);
    collapseMenu();
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const collapseMenu = () => {
    setCollapsed(!collapsed);
    setFilter('');
  };

  const filteredItems = useMemo(() => {
    return props.items.filter(
      (item: ItemProps) =>
        item.name.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1
    );
  }, [props.items, filter]);

  return (
    <div className="relative">
      <button
        onClick={() => collapseMenu()}
        className={`flex items-center bg-[#332424]/50 w-full p-2 rounded-lg ${
          collapsed ? 'rounded-b-none' : ''
        }`}
      >
        <img
          src={`/assets/${selectedItem?.image ?? 'crypto_icon_1.svg'}`}
          alt="crypto_icon_1.svg"
          className="w-8 h-8 mr-3"
        />
        {selectedItem?.name ?? 'crypto'}
        {
          <span className="ml-2 bg-success text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">
            {`${selectedItem?.fee ?? 0}% fees`}
          </span>
        }
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
          <div className="flex items-center p-[10px] bg-[#65474D]">
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <Icon icon="ph:magnifying-glass" style={{ fontSize: '24px' }} />
              </div>
              <input
                className="bg-[#332424] rounded-[20px] p-2 pl-10 w-full"
                onChange={handleFilterChange}
              />
            </div>
          </div>
          <ul
            className="dropdown-list text-sm text-white bg-[#65474D] rounded-b-lg"
            aria-labelledby="dropdownDefault"
          >
            {filteredItems.map((item: ItemProps, index: number) => (
              <li
                className="flex items-center p-[10px] cursor-pointer"
                onClick={() => handleSelectItem(item)}
                key={index}
              >
                <img
                  src={`/assets/${item.image}`}
                  alt={`/assets/${item.image}`}
                  className="w-8 h-8 mr-3"
                />
                {item.name}
                {item.fee && (
                  <span className="ml-auto bg-success text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">
                    {`${item.fee}% fees`}
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
