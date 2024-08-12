import { CSSProperties, FC } from 'react';
import './Avatar.scss';
import { AvatarProps } from './types';

const Avatar: FC<AvatarProps> = (props) => {
  const { width = 48, height = 48, ...rest } = props;

  const style: CSSProperties = {
    width,
    height,
  };

  return (
    <div className='avatar' style={style}>
      <img {...rest} width={width} height={height} />
    </div>
  );
};

export { Avatar };
