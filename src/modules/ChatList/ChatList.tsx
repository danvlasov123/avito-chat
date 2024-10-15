import { FC, useCallback } from 'react';
import { Chat } from 'src/components/Chat';
import { Flex } from 'src/components/Flex';
import { ChatListProps } from './types';
import cn from 'classnames';

import { motion, Reorder } from 'framer-motion';

import './ChatList.scss';
import { useStore } from 'src/context/StoreContext';

const ChatList: FC<ChatListProps> = ({ className, ...props }) => {
  const { selectedId, setSelectedId, data, setMessages } = useStore();

  const chatListClassName = cn('chat-list', className);

  const handleSelect = useCallback((id: number) => {
    setSelectedId(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex direction='column' className={chatListClassName} gap={6} {...props}>
      <Reorder.Group values={data} onReorder={setMessages} className='w-full'>
        {data.map((user, index) => {
          const isSelected = selectedId === user.id;
          return (
            <Reorder.Item
              key={user.id}
              value={user}
              transition={{ duration: 0.2 }}
            >
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
            </Reorder.Item>
          );
        })}
      </Reorder.Group>
    </Flex>
  );
};

export { ChatList };
