import { Icon } from '@iconify/react';

const CircleIcon = (props: { icon: string }) => (
  <div className="rounded-full p-3 bg-[#65474D] w-12 h-12 flex items-center justify-center">
    <Icon icon={props.icon} style={{ fontSize: '24px' }} />
  </div>)

export default CircleIcon
