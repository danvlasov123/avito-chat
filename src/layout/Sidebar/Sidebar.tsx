import { FC } from 'react';

import { Flex } from 'src/components/Flex';

import { SidebarSearch, SidebarChatList } from './components';

import './Sidebar.scss';

const Sidebar: FC = () => {
  return (
    <Flex className='sidebar' direction='column'>
      <Flex className='sidebar__head'>
        <SidebarSearch />
      </Flex>
      <SidebarChatList />
    </Flex>
  );
};

export { Sidebar };
