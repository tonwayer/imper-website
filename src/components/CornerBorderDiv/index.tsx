import React from 'react';

import './index.css';

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: any;
};

const CornerBorderDiv = (props: Props) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    if (domRef?.current) {
      observer.observe(domRef.current);
    }
  }, [domRef]);

  return (
    <div
      className={
        `corner-border ${isVisible ? 'is-visible' : ''} ` + props.className
      }
      ref={domRef}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default CornerBorderDiv;
