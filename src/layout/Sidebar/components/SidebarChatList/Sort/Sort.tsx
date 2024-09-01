import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

import { Button, Typography } from 'src/components/UI';

import { FaSort } from 'react-icons/fa';


const SidebarMessagesSort = () => {
  return (
    <Menu>
      <MenuButton>
        <Button variant='transparent'>
          <FaSort fill='var(--grey)' />
        </Button>
      </MenuButton>

      <MenuItems anchor='bottom end' className='dropdown__menu'>
        <Typography
          uppercase
          color='var(--grey)'
          fontSize={10}
          padding='2px 16px'
        >
          Фильтр
        </Typography>
        <MenuItem>
          <button className='dropdown__menu--item'>За сегодня</button>
        </MenuItem>
        <MenuItem>
          <button className='dropdown__menu--item'>За вчера</button>
        </MenuItem>
        <MenuItem>
          <button className='dropdown__menu--item'>Выбрать дату</button>
        </MenuItem>
        <Typography
          uppercase
          color='var(--grey)'
          fontSize={10}
          padding='2px 16px'
        >
          Сортировка
        </Typography>
        <MenuItem>
          <button className='dropdown__menu--item'>Последний ответ</button>
        </MenuItem>
        <MenuItem>
          <button className='dropdown__menu--item'>Ожиданиe клиента</button>
        </MenuItem>
        <MenuItem>
          <button className='dropdown__menu--item'>Ожиданиe менеджера</button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export { SidebarMessagesSort };
