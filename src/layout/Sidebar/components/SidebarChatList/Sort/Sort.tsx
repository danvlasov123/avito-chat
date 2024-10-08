import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react';

import { Button, Typography } from 'src/components/UI';

import { FaSort } from 'react-icons/fa';

import { DayPicker } from 'react-day-picker';
import { ru } from 'react-day-picker/locale';
import 'react-day-picker/style.css';
import 'src/styles/popover.scss';

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
          <Popover className={'z-10'}>
            <PopoverButton className='w-full'>
              <button className='dropdown__menu--item'>Выбрать дату</button>
            </PopoverButton>
            <PopoverPanel transition anchor='bottom end' className='popover'>
              <DayPicker locale={ru} mode='single' />
            </PopoverPanel>
          </Popover>
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
