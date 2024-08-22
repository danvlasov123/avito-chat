import { ChatList } from 'src/modules';
import { Fragment } from 'react';

import './SidebarChatList.scss';
import { Typography } from 'src/components/UI';

import { motion } from 'framer-motion';

const SidebarChatList = () => {
  return (
    <Fragment>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Typography
          padding='0 8px 8px'
          fontSize={14}
          uppercase
          color='var(--grey)'
        >
          Сообщения
        </Typography>
      </motion.div>
      <ChatList className='w-full' />
    </Fragment>
  );
};

export { SidebarChatList };
