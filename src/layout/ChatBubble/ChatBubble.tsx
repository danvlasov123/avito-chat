import { Flex } from 'src/components/Flex';
import { ChatHead, ChatContent, ChatInfo } from './components';

import './ChatBubble.scss';
import { useState } from 'react';

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex className='chat-bubble'>
      <Flex className='chat-bubble__content' direction='column' full>
        <ChatHead setIsOpen={setIsOpen} />
        <ChatContent />
      </Flex>
      <ChatInfo isOpen={isOpen} setIsOpen={setIsOpen} />
    </Flex>
  );
};

export { ChatBubble };
