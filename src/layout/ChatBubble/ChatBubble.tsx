import { Flex } from 'src/components/Flex';
import { ChatHead, ChatContent } from './components';

import './ChatBubble.scss';

const ChatBubble = () => {
  return (
    <Flex className='chat-bubble' direction='column'>
      <ChatHead />
      <ChatContent />
    </Flex>
  );
};

export { ChatBubble };
