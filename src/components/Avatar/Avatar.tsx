import { CSSProperties, FC } from 'react';
import './Avatar.scss';
import { AvatarProps } from './types';
import useGradient from 'src/hooks/useGradient';

const Avatar: FC<AvatarProps> = (props) => {
  const { width = 38, height = 38, src, name, ...rest } = props;

  const gradient = useGradient(name);

  const style: CSSProperties = {
    width,
    height,
    ...(name && { background: gradient }),
  };

  return (
    <div className='avatar' style={style}>
      {src ? (
        <img src={src} width={width} height={height} alt='alt' {...rest} />
      ) : (
        name
      )}
    </div>
  );
};

export { Avatar };
