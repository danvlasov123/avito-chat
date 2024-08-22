import { FC } from 'react';
import { Typography } from '../UI';
import { MessageProps } from './types';

import './Message.scss';
import { Flex, FlexJustifyContent } from '../Flex';
import { DoubleCheckIcon } from '../Icons';
import cn from 'classnames';

const STATUS_TRANSLATE = {
  SEND: 'Отправлено',
  READ: 'Прочитано',
} as const;

const Message: FC<MessageProps> = ({
  text,
  status,
  date,
  isMy = false,
  image,
}) => {
  const justifyContentMessageInfo: FlexJustifyContent = status
    ? 'space-between'
    : 'end';

  const classNameMessage = cn('message', {
    'message--me': isMy,
  });

  const color = {
    SEND: 'var(--grey)',
    READ: 'var(--green)',
  };

  return (
    <Flex className={classNameMessage} direction='column'>
      <div className='message__content'>
        {image && (
          <a data-fancybox='gallery' href={image}>
            <div className='message__image'>
              <img src={image} alt='image' />
            </div>
          </a>
        )}
        {text && (
          <Typography
            className='message__text'
            color={isMy ? 'white' : 'black'}
          >
            {text}
          </Typography>
        )}
      </div>
      {(status || date) && (
        <Flex
          alignItems='center'
          className='message__info'
          justifyContent={justifyContentMessageInfo}
          full
        >
          {status && (
            <Flex className='message__status' alignItems='center' gap={6}>
              <DoubleCheckIcon width={12} height={12} fill={color[status]} />
              {text.length > 16 && (
                <Typography fontSize={12} as='span' color='var(--grey)'>
                  {STATUS_TRANSLATE[status]}
                </Typography>
              )}
            </Flex>
          )}
          {date && (
            <Typography color='var(--grey)' className='message__date'>
              {date}
            </Typography>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export { Message };
