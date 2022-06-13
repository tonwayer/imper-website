import { MouseEventHandler } from 'react';

type Props = {
  handleClick?: MouseEventHandler;
  children: React.ReactNode;
  className?: string;
  to?: string;
};

const LinkButton = (props: Props) => {
  return (
    <a
      href={props.to ?? '#'}
      onClick={props.handleClick ? props.handleClick : undefined}
      type="button"
      className={
        'text-white bg-primary-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 hover:bg-primary-300 ' +
        props.className
      }
    >
      {props.children}
    </a>
  );
};

export default LinkButton;
