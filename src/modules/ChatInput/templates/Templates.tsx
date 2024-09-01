import { PropsWithChildren, FC } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

import { Typography } from 'src/components/UI';

const templates = [
  {
    title: 'Шаблон 1',
    text: 'Всем привет кого не видел',
  },
  {
    title: 'Привествие',
    text: 'Привет я Даня',
  },
  {
    title: 'Здарова бандит',
    text: 'Здарова бандит',
  },
];

export type ChatInputTemplatesType = {
  onChange: (text: string) => void;
};

const ChatInputTemplates: FC<PropsWithChildren<ChatInputTemplatesType>> = ({
  children,
  onChange,
}) => {
  return (
    <Menu>
      <MenuButton>{children}</MenuButton>

      <MenuItems anchor='top start' className='dropdown__menu'>
        <Typography
          uppercase
          color='var(--grey)'
          fontSize={10}
          padding='2px 16px'
        >
          Шаблоны
        </Typography>
        {templates.map((item, index) => (
          <MenuItem key={index}>
            <button
              className='dropdown__menu--item'
              onClick={() => onChange(item.text)}
            >
              {item.title}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export { ChatInputTemplates };
