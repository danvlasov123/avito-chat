import { Button, Input, Typography } from 'src/components/UI';

import './ChatInput.scss';
import { PaperclipIcon, SendIcon } from 'src/components/Icons';
import { Flex } from 'src/components/Flex';
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { MessageFileModal } from 'src/components/Modals';

import { motion } from 'framer-motion';
import { useMediaQuery } from 'usehooks-ts';

import { TbMessageDots } from 'react-icons/tb';
import { ChatInputTemplates } from './templates';
import { useStore } from 'src/context/StoreContext';

type ChatInputProps = {
  onSubmit: (value: { text: string; image: string }) => void;
};

const ChatInput: FC<ChatInputProps> = ({ onSubmit }) => {
  const { handleTopMessage } = useStore();
  const [file, setFile] = useState<File | null>(null);
  const [value, setValue] = useState('');

  const fileRef = useRef<HTMLInputElement | null>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleClickAttachment = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const handleSend = (image: string) => {
    handleTopMessage();
    onSubmit({ text: value, image });
    setValue('');
    setFile(null);
  };

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files.length) {
      return null;
    }

    setFile(e.target.files[0]);
    if (fileRef.current) {
      fileRef.current.value = '';
    }
  };

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (
        (event.code === 'Enter' || event.code === 'NumpadEnter') &&
        !event.shiftKey
      ) {
        if (value) {
          onSubmit({ text: value, image: '' });
          handleTopMessage();
        }
        setValue('');
        event.preventDefault();
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    const event = async (e: ClipboardEvent) => {
      e.preventDefault();
      if (!e?.clipboardData?.files.length) {
        return;
      }
      const file = e.clipboardData.files[0];

      setFile(file);
    };
    document.addEventListener('paste', event);

    return () => document.removeEventListener('paste', event);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className='w-full'
    >
      {file && (
        <MessageFileModal
          file={file}
          onClose={() => setFile(null)}
          onSubmit={(image) => handleSend(image)}
          inputProps={{
            value,
            onChange: (value: string) => setValue(value),
          }}
        />
      )}
      <div className='chat-input'>
        <input
          ref={fileRef}
          type='file'
          hidden
          onChange={handleChangeFile}
          accept='image/*'
        />
        <Input
          as='textarea'
          value={value}
          wrapperClassName='chat-input__field'
          placeholder='Сообщение'
          onChange={(value: string) => {
            setValue(value);
          }}
          autoFocus
          startAdornment={
            <Flex alignItems='center' gap={4}>
              <Button
                onClick={handleClickAttachment}
                variant='transparent'
                className='chat-input__attachment'
              >
                <PaperclipIcon width={16} height={16} />
              </Button>
              <ChatInputTemplates
                onChange={(text) => setValue((prev) => prev + text)}
              >
                <Button
                  variant='transparent'
                  className='chat-input__attachment'
                >
                  <TbMessageDots size={20} color='var(--grey)' />
                </Button>
              </ChatInputTemplates>
            </Flex>
          }
          endAdornment={
            <Button
              defaultValue={value}
              className='chat-input__send'
              disabled={!value}
              onClick={() => handleSend('')}
            >
              <Flex gap={6} alignItems='center'>
                <SendIcon width={16} height={16} fill='var(--violet)' />
                {!isMobile && <Typography color='white'>Отправить</Typography>}
              </Flex>
            </Button>
          }
        />
      </div>
    </motion.div>
  );
};

export { ChatInput };
