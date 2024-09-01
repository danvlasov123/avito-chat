import { ChatList } from 'src/modules';
import { Fragment } from 'react';

import './SidebarChatList.scss';
import { Typography } from 'src/components/UI';

import { motion } from 'framer-motion';
import { SidebarMessagesSort } from './Sort';

const SidebarChatList = () => {
  return (
    <Fragment>
      <motion.div
        className='sidibar__chat-list--title'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Typography fontSize={14} uppercase color='var(--grey)'>
          Сообщения
        </Typography>
        <SidebarMessagesSort />
      </motion.div>
      <ChatList className='w-full' />
    </Fragment>
  );
};

export { SidebarChatList };
