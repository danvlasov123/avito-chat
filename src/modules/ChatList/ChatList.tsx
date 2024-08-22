import { FC, useCallback, useState } from 'react';
import { Chat } from 'src/components/Chat';
import { Flex } from 'src/components/Flex';
import { ChatListProps } from './types';
import cn from 'classnames';

import { motion } from 'framer-motion';

import './ChatList.scss';
import { STATUS_MESSAGE } from 'src/components/Message';

const data = [
  {
    name: 'Ваня Пупкин',
    img: '',
    message: 'Привет! Как дела?',
    date: '20:34',
    status: STATUS_MESSAGE.SEND,
    id: 1,
  },
  {
    name: 'Ваня Пупкин',
    img: '',
    message: 'Привет! Как дела?',
    date: '20:34',
    status: STATUS_MESSAGE.READ,
    id: 2,
  },
  {
    name: 'Ваня Пупкин',
    img: '',
    message: 'Привет! Как дела?',
    date: '20:34',
    status: STATUS_MESSAGE.READ,
    id: 3,
  },
  {
    name: 'Ваня Пупкин',
    img: '',
    message: 'Привет! Как дела?',
    date: '20:34',
    status: STATUS_MESSAGE.READ,
    id: 4,
  },
  {
    name: 'Ваня Пупкин',
    img: '',
    message: 'Привет! Как дела?',
    date: '20:34',
    status: STATUS_MESSAGE.READ,
    id: 5,
  },
  {
    name: 'Ваня Пупкин',
    img: '',
    message: 'Привет! Как дела?',
    date: '20:34',
    status: STATUS_MESSAGE.READ,
    id: 6,
  },
  {
    name: 'Ваня Пупкин',
    img: '',
    message: 'Привет! Как дела?',
    date: '20:34',
    status: STATUS_MESSAGE.READ,
    id: 7,
  },
  {
    name: 'Ваня Пупкин',
    img: '',
    message: 'Привет! Как дела?',
    date: '20:34',
    status: STATUS_MESSAGE.READ,
    id: 8,
  },
  {
    name: 'Ваня Пупкин',
    img: '',
    message: 'Привет! Как дела?',
    date: '20:34',
    status: STATUS_MESSAGE.READ,
    id: 9,
  },
  {
    name: 'Ваня Пупкин',
    img: '',
    message: 'Привет! Как дела?',
    date: '20:34',
    status: STATUS_MESSAGE.READ,
    id: 10,
  },
];

const ChatList: FC<ChatListProps> = ({ className, ...props }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const chatListClassName = cn('chat-list', className);

  const handleSelect = useCallback((id: number) => {
    setSelectedId(id);
  }, []);
  return (
    <Flex direction='column' className={chatListClassName} gap={6} {...props}>
      {data.map((user, index) => {
        const isSelected = selectedId === user.id;
        return (
          <motion.div
            key={user.id}
            className='w-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.05 + 0.2 }}
          >
            <Chat
              key={user.id}
              {...user}
              isSelected={isSelected}
              onSelect={handleSelect}
            />
          </motion.div>
        );
      })}
    </Flex>
  );
};

export { ChatList };
