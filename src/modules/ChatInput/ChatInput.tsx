import { Button, Input, Typography } from 'src/components/UI';

import './ChatInput.scss';
import { PaperclipIcon, SendIcon } from 'src/components/Icons';
import { Flex } from 'src/components/Flex';

const ChatInput = () => {
  return (
    <div className='chat-input'>
      <Input
        wrapperClassName='chat-input__field'
        placeholder='Сообщение'
        autoFocus
        startAdornment={
          <Button variant='transparent'>
            <PaperclipIcon width={18} height={18} />
          </Button>
        }
        endAdornment={
          <Button className='chat-input__send'>
            <Flex gap={6} alignItems='center'>
              <SendIcon width={16} height={16} fill='var(--violet)' />
              <Typography color='white'>Отправить</Typography>
            </Flex>
          </Button>
        }
      />
    </div>
  );
};

export { ChatInput };
