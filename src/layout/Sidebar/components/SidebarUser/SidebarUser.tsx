import { Avatar } from 'src/components/Avatar';
import { Flex } from 'src/components/Flex';

import './SidebarUser.scss';
import { Typography } from 'src/components/UI';

const SidebarUser = () => {
  return (
    <Flex className='sidebar-user' alignItems='center' gap={12} full>
      <Avatar />
      <Flex direction='column' gap={4}>
        <Typography fontSize={15} fontWeight={600} lineHeight={1}>
          User Name
        </Typography>
        <Typography
          lineHeight={1}
          as='span'
          fontSize={12}
          fontWeight={600}
          color='var(--grey)'
        >
          user@gmail.com
        </Typography>
      </Flex>
    </Flex>
  );
};

export { SidebarUser };
