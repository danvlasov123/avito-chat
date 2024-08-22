import { Dispatch, FC, SetStateAction } from 'react';

import './ChatInfo.scss';
import cn from 'classnames';
import { Flex } from 'src/components/Flex';
import { Button, Typography } from 'src/components/UI';

import { IoCloseOutline } from 'react-icons/io5';
import { ImageList } from './components';
import { Fancybox } from 'src/components/Fancybox';

export type ChatInfoProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const ChatInfo: FC<ChatInfoProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={cn('chat-info', {
        open: isOpen,
      })}
    >
      <div className='chat-info__content'>
        <Flex alignItems='center' gap={16} className='chat-info__head'>
          <Button
            variant='transparent'
            className='align-items-center'
            onClick={() => setIsOpen(false)}
          >
            <IoCloseOutline size={24} color='var(--grey)' />
          </Button>
          <Typography
            fontSize={15}
            fontWeight={400}
            uppercase
            color='var(--grey)'
          >
            Медиафайлы
          </Typography>
        </Flex>
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <ImageList />
        </Fancybox>
      </div>
    </div>
  );
};

export { ChatInfo };
