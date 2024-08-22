import { FC } from 'react';

import { Flex } from 'src/components/Flex';

import { SidebarSearch, SidebarChatList } from './components';

import { motion } from 'framer-motion';

import './Sidebar.scss';

const Sidebar: FC = () => {
  return (
    <Flex className='sidebar' direction='column'>
      <motion.p
        className='logo'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0 }}
      >
        Amo Chat
      </motion.p>
      <SidebarSearch />
      <motion.div
        className='sidebar-hr'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <hr />
      </motion.div>
      <SidebarChatList />
    </Flex>
  );
};

export { Sidebar };
