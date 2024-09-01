import { CSSProperties, FC } from 'react';
import './Avatar.scss';
import { AvatarProps } from './types';
import useGradient from 'src/hooks/useGradient';
import { FaTelegram } from 'react-icons/fa6';
import { IoLogoWhatsapp } from 'react-icons/io';

const Avatar: FC<AvatarProps> = (props) => {
  const {
    width = 38,
    height = 38,
    src,
    icon,
    iconProps,
    name,
    ...rest
  } = props;

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
      {icon && (
        <span className='avatar__icon' {...iconProps}>
          {icon === 'telegram' && <FaTelegram size={16} fill='blue' />}
          {icon === 'whatsapp' && <IoLogoWhatsapp size={16} fill='green' />}
        </span>
      )}
    </div>
  );
};

export { Avatar };
