import React, { useState } from 'react';

type Props = {
  title: String;
  content: String;
};

const Accordion = (props: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="bg-[#65474D]/50 rounded-[8px]">
      <div
        className="flex justify-between items-center p-4 w-full font-medium text-left text-white cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="text-base font-bold">{props.title}</div>
        <div className="text-3xl">{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="p-4 pt-0">{props.content}</div>}
    </div>
  );
};

export default Accordion;
