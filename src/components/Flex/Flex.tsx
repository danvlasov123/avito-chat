import { CSSProperties, FC, forwardRef, PropsWithChildren } from 'react';
import { FlexProps } from './types';

import cn from 'classnames';

import './Flex.scss';

const Flex: FC<PropsWithChildren<FlexProps>> = forwardRef(
  (
    {
      children,
      justifyContent = 'start',
      alignItems = 'start',
      direction = 'row',
      full = false,
      gap = 0,
      padding,
      ...props
    },
    ref
  ) => {
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
      ...(padding && { padding }),
      ...props.style,
    };

    return (
      <div {...props} className={flexClassName} style={flexStyle} ref={ref}>
        {children}
      </div>
    );
  }
);

export { Flex };
