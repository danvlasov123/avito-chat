import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { IoCloseOutline } from 'react-icons/io5';

import './MessageFile.css';
import { Flex } from 'src/components/Flex';
import { Button, Input, Typography } from 'src/components/UI';
import { InputProps } from 'src/components/UI/Input/types';

function getBase64(
  file: File,
  callback: (value: string | ArrayBuffer | null) => void
) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    callback(reader.result);
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
}

export type MessagePropsFile = {
  file: File;
  onClose: () => void;
  inputProps?: InputProps;
  onSubmit: (image: string) => void;
};

const MessageFileModal: FC<MessagePropsFile> = ({
  onClose,
  onSubmit,
  file,
  inputProps,
}) => {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    getBase64(file, (value) => setPreview(value as string));
  }, [file]);

  return createPortal(
    <div className='backdrop'>
      <div className='modal-file'>
        <Flex alignItems='center' justifyContent='space-between' gap={24}>
          <Typography fontSize={17} fontWeight={500}>
            Отправить файл
          </Typography>
          <Button
            variant='transparent'
            className='align-items-center'
            onClick={onClose}
          >
            <IoCloseOutline size={24} fill='var(--grey)' />
          </Button>
        </Flex>
        <Flex className='modal-file-content' justifyContent='center'>
          {preview && <img src={preview} alt='preview' />}
        </Flex>
        <Flex>
          <Input
            variant='secondary'
            placeholder='Добавить подпись...'
            endAdornment={
              <Button onClick={() => onSubmit(preview || '')}>Отправить</Button>
            }
            {...inputProps}
          />
        </Flex>
      </div>
    </div>,
    document.body
  );
};

export { MessageFileModal };
