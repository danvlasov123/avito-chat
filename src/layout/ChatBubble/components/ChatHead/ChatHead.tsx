import { Flex } from 'src/components/Flex';

import './ChatHead.scss';
import { Avatar } from 'src/components/Avatar';
import { Button, Typography } from 'src/components/UI';
import { ArrowRightIcon, SearchIcon } from 'src/components/Icons';
import { Dispatch, SetStateAction } from 'react';

import { motion } from 'framer-motion';

const data = {
  name: 'Ваня Пупкин',
  img: 'https://res.cloudinary.com/subframe/image/upload/v1711417512/shared/btvntvzhdbhpulae3kzk.jpg',
  message: 'Привет! Как дела?',
  date: '20:34',
  email: 'ivan@gmail.com',
};

const ChatHead = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Flex
      className='chat-head'
      justifyContent='space-between'
      gap={16}
      alignItems='center'
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        <Flex gap={8} alignItems='center'>
          <Avatar width={42} height={42} alt={data.name} name={'В'} />
          <Flex direction='column' gap={2}>
            <Typography
              className='chat-head__name'
              fontSize={16}
              fontWeight={500}
              style={{ letterSpacing: -0.2 }}
            >
              {data.name}
            </Typography>
            <Typography as='span' color='var(--grey)' fontSize={13}>
              {data.email}
            </Typography>
          </Flex>
        </Flex>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        <Flex gap={24} alignItems='center'>
          <Button variant='transparent'>
            <SearchIcon width={16} height={16} fill='var(--violet)' />
          </Button>
          <Button variant='transparent'>
            <Flex alignItems='center' gap={6}>
              <Typography color='var(--violet)' lineHeight={1}>
                СДЕЛКА
              </Typography>
              <ArrowRightIcon
                style={{ marginBottom: 2 }}
                width={16}
                height={16}
                fill='var(--violet)'
              />
            </Flex>
          </Button>
        </Flex>
      </motion.div>
    </Flex>
  );
};

export { ChatHead };
