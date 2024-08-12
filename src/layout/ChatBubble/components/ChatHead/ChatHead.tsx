import { Flex } from 'src/components/Flex';

import './ChatHead.scss';
import { Avatar } from 'src/components/Avatar';
import { Button, Typography } from 'src/components/UI';
import { ArrowRightIcon, SearchIcon } from 'src/components/Icons';

const data = {
  name: 'Ваня Пупкин',
  img: 'https://res.cloudinary.com/subframe/image/upload/v1711417512/shared/btvntvzhdbhpulae3kzk.jpg',
  message: 'Привет! Как дела?',
  date: '20:34',
  email: 'ivan@gmail.com',
};

const ChatHead = () => {
  return (
    <Flex
      className='chat-head'
      justifyContent='space-between'
      gap={16}
      alignItems='center'
    >
      <Flex gap={16} alignItems='center'>
        <Avatar width={42} height={42} src={data.img} alt={data.name} />
        <Flex direction='column' gap={2}>
          <Typography className='chat-head__name'>{data.name}</Typography>
          <Typography
            as='span'
            color='var(--grey)'
            className='chat-head__email'
          >
            {data.email}
          </Typography>
        </Flex>
      </Flex>
      <Flex gap={24} alignItems='center'>
        <Button variant='transparent'>
          <SearchIcon width={16} height={16} fill='var(--violet)' />
        </Button>
        <Button variant='transparent'>
          <Flex alignItems='center' gap={6}>
            <Typography color='var(--violet)'>К сделке</Typography>
            <ArrowRightIcon width={16} height={16} fill='var(--violet)' />
          </Flex>
        </Button>
      </Flex>
    </Flex>
  );
};

export { ChatHead };
