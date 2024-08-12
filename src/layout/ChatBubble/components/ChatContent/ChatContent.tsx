import { Flex } from 'src/components/Flex';
import { ChatInput, MessageList } from 'src/modules';

import './ChatContent.scss';

const ChatContent = () => {
  return (
    <Flex direction='column' full className='chat-content'>
      <MessageList />
      <ChatInput />
    </Flex>
  );
};

export { ChatContent };
