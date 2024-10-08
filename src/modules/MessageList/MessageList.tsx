import { Flex } from 'src/components/Flex';
import { Message } from 'src/components/Message';

import { STATUS_MESSAGE } from 'src/components/Message';

import './MessageList.scss';
import { FC, useEffect, useRef } from 'react';
import { MessageBlock } from './components/MessageBlock';

import { motion } from 'framer-motion';
import { Fancybox } from 'src/components/Fancybox';

type MessageListProps = {
  messages: {
    date: string;
    isMy: boolean;
    messages: {
      text: string;
      image: string;
    }[];
  }[];
};

const MessageList: FC<MessageListProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className='message-list'>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <Flex direction='column' gap={32} className='message-list__content'>
          {messages.map((m, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='w-full'
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <MessageBlock>
                  {m.messages.map((message, index2) => {
                    if (index2 === m.messages.length - 1) {
                      return (
                        <Message
                          text={message.text}
                          image={message.image}
                          key={index + index2}
                          isMy={m.isMy}
                          status={STATUS_MESSAGE.READ}
                          date={`${new Date(m.date).getHours()}:${new Date(
                            m.date
                          ).getMinutes()}`}
                        />
                      );
                    }
                    return (
                      <Message
                        text={message.text}
                        image={message?.image}
                        key={index + index2}
                        isMy={m.isMy}
                      />
                    );
                  })}
                </MessageBlock>
              </motion.div>
            );
          })}
          <div ref={messagesEndRef} />
        </Flex>
      </Fancybox>
    </div>
  );
};

export { MessageList };
