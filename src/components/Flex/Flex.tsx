import { CSSProperties, FC, PropsWithChildren } from 'react';
import { FlexProps } from './types';

import cn from 'classnames';

import './Flex.scss';

const Flex: FC<PropsWithChildren<FlexProps>> = ({
  children,
  justifyContent = 'start',
  alignItems = 'start',
  direction = 'row',
  full = false,
  gap = 0,
  ...props
}) => {
  const flexClassName = cn(
    'flex',
    `justify-content-${justifyContent}`,
    `align-items-${alignItems}`,
    `flex-direction-${direction}`,
    props.className
  );

  const flexStyle: CSSProperties = {
    gap,
    ...(full && { width: '100%' }),
    ...props.style,
  };

  return (
    <div {...props} className={flexClassName} style={flexStyle}>
      {children}
    </div>
  );
};

export { Flex };
