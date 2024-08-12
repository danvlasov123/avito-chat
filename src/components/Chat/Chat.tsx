import { FC, memo } from 'react';
import { Avatar } from '../Avatar';
import { Flex } from '../Flex';
import { Typography } from '../UI';
import { Button } from '../UI';

import './Chat.scss';
import { ChatProps } from './types';
import cn from 'classnames';
import { STATUS_MESSAGE } from '../Message';

const Chat: FC<ChatProps> = memo((props) => {
  const {
    name,
    img,
    message,
    isSelected = false,
    status,
    date,
    id,
    onSelect,
  } = props;

  const className = cn('chat', {
    'chat--selected': isSelected,
  });

  const color = {
    READ: 'var(--grey)',
    SEND: 'black',
  };
  return (
    <Flex
      className={className}
      gap={10}
      alignItems='center'
      onClick={() => onSelect(id)}
    >
      <Avatar width={48} height={48} src={img} alt={name} />
      <Flex direction='column' gap={4} justifyContent='center' full>
        <Flex justifyContent='space-between' alignItems='center' full>
          <Typography className='chat__name'>{name}</Typography>
          <Typography as='span' className='chat__date' color={color[status]}>
            {date}
          </Typography>
        </Flex>
        <Flex alignItems='center' justifyContent='space-between' full>
          <Typography as='span' className='chat__message' color={color[status]}>
            {message}
          </Typography>
          {status !== STATUS_MESSAGE.READ && !isSelected && (
            <Button variant='primary' className='chat__count'>
              1
            </Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
});

export { Chat };
