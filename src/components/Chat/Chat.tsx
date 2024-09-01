import { FC, memo, useState } from 'react';
import { Avatar } from '../Avatar';
import { Flex } from '../Flex';
import { Typography } from '../UI';
import { Button } from '../UI';

import './Chat.scss';
import { ChatProps } from './types';
import cn from 'classnames';
import { STATUS_MESSAGE } from '../Message';
import { useInterval } from 'usehooks-ts';

import { intervalToDuration } from 'date-fns';

const Chat: FC<ChatProps> = memo((props) => {
  const {
    name,
    message,
    isSelected = false,
    status,
    date,
    type,
    id,
    onSelect,
  } = props;

  const [count, setCount] = useState({
    seconds: 1000,
    format: '16:40',
  });

  const formattedStopwatch = (s: number) => {
    const result = intervalToDuration({ start: 0, end: s * 1000 });

    return `${String(result.minutes || '00').padStart(2, '0')}:${String(
      result.seconds || '00'
    ).padStart(2, '0')}`;
  };

  useInterval(
    () => {
      setCount({
        seconds: count.seconds + 1,
        format: formattedStopwatch(count.seconds + 1),
      });
    },
    isSelected ? null : 1000
  );

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
      <Avatar
        width={46}
        height={46}
        icon={type === 'group' ? undefined : 'telegram'}
        alt={type === 'group' ? 'Разработка' : name}
        name={type === 'group' ? 'Р' : 'В'}
      />
      <Flex direction='column' gap={4} justifyContent='center' full>
        <Flex justifyContent='space-between' alignItems='center' gap={24} full>
          <Typography className='chat__name'>
            {type === 'group' ? 'Разработка' : name}
          </Typography>
          <Flex alignItems='center' gap={8}>
            {!isSelected && status === 'SEND' && (
              <Typography
                as='span'
                className='chat__timer'
                color={'var(--grey)'}
              >
                {count.format}
              </Typography>
            )}
            <Typography as='span' className='chat__date' color={color[status]}>
              {date}
            </Typography>
          </Flex>
        </Flex>
        <Flex alignItems='center' justifyContent='space-between' full>
          <Typography as='span' className='chat__message' color={color[status]}>
            {type === 'group' && 'Андрей:'} {message}
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
