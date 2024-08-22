import { Flex } from 'src/components/Flex';
import { ChatInput, MessageList } from 'src/modules';

import './ChatContent.scss';
import { useState } from 'react';
import getHoursDifference from 'src/utils/hasOneHourPassed';

const ChatContent = () => {
  const [messages, setMessages] = useState([
    {
      isMy: false,
      date: new Date().toISOString(),
      messages: [
        {
          text: 'Привет! Как дела?',
          image: 'https://picsum.photos/seed/picsum/536/354',
        },
      ],
    },
    {
      isMy: true,
      date: '2024-08-22T10:35:23.702Z',
      messages: [
        {
          text: 'Привет! все ок!',
          image: '',
        },
        {
          text: 'У тебя как?',
          image: '',
        },
      ],
    },
  ]);

  const handleSend = ({ text, image }: { text: string; image: string }) => {
    if (
      getHoursDifference(
        messages[messages.length - 1].date,
        new Date().toISOString()
      ) < 1
    ) {
      return setMessages((stateMessages) => {
        const lastMessage = stateMessages[stateMessages.length - 1];

        const newMessage = {
          isMy: true,
          date: new Date().toISOString(),
          messages: [...lastMessage.messages, { text, image }],
        };

        const result = stateMessages.slice(0, -1);

        return [...result, newMessage];
      });
    }
    setMessages((prev) => [
      ...prev,
      {
        isMy: true,
        date: new Date().toISOString(),
        messages: [
          {
            text,
            image,
          },
        ],
      },
    ]);
  };

  return (
    <Flex direction='column' full className='chat-content'>
      <MessageList messages={messages} />
      <ChatInput onSubmit={handleSend} />
    </Flex>
  );
};

export { ChatContent };
