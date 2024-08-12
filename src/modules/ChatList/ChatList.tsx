import { FC, useCallback, useState } from 'react';
import { Chat } from 'src/components/Chat';
import { Flex } from 'src/components/Flex';
import { ChatListProps } from './types';
import cn from 'classnames';

import './ChatList.scss';
import { STATUS_MESSAGE } from 'src/components/Message';

const data = [
  {
    name: 'Ваня Пупкин',
    img: 'https://res.cloudinary.com/subframe/image/upload/v1711417512/shared/btvntvzhdbhpulae3kzk.jpg',
    message: 'Привет! Как дела?',
    date: '20:34',
    status: STATUS_MESSAGE.SEND,
    id: 1,
  },
  {
    name: 'Ваня Пупкин',
    img: 'https://res.cloudinary.com/subframe/image/upload/v1711417512/shared/btvntvzhdbhpulae3kzk.jpg',
    message: 'Привет! Как дела?',
    date: '20:34',
    status: STATUS_MESSAGE.READ,
    id: 2,
  },
  {
    name: 'Ваня Пупкин',
    img: 'https://res.cloudinary.com/subframe/image/upload/v1711417512/shared/btvntvzhdbhpulae3kzk.jpg',
    message: 'Привет! Как дела?',
    date: '20:34',
    status: STATUS_MESSAGE.READ,
    id: 3,
  },
];

const ChatList: FC<ChatListProps> = ({ className, ...props }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const chatListClassName = cn('chat-list', className);

  const handleSelect = useCallback((id: number) => {
    setSelectedId(id);
  }, []);
  return (
    <Flex direction='column' className={chatListClassName} gap={18} {...props}>
      {data.map((user) => {
        const isSelected = selectedId === user.id;
        return (
          <Chat key={user.id} {...user} isSelected={isSelected} onSelect={handleSelect} />
        );
      })}
    </Flex>
  );
};

export { ChatList };
