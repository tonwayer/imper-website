import { Icon } from '@iconify/react';

const CircleIcon = (props: {
  icon: string;
  fontSize?: string;
  classNames?: string;
}) => (
  <div
    className={
      'rounded-full bg-[#65474D] w-12 h-12 flex items-center justify-center cursor-pointer ' +
      props.classNames
    }
  >
    <Icon icon={props.icon} style={{ fontSize: props.fontSize || '24px' }} />
  </div>
);

export default CircleIcon;
