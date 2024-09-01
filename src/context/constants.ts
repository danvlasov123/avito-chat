import { STATUS_MESSAGE } from 'src/components/Message';

export type MessageType = {
  name: string;
  img: string;
  message: string;
  date: string;
  status: STATUS_MESSAGE;
  id: number;
  type: 'chat' | 'group';
};

export const data: MessageType[] = [
  {
    name: 'Ваня Пупкин',
    img: '',
    message: 'Привет! Как дела?',
    date: '20:34',
    status: STATUS_MESSAGE.SEND,
    id: 1,
    type: 'chat',
  },
  {
    name: 'Ваня Пупкин',
    img: '',
    message: 'Привет! Как дела?',
    date: '20:34',
    status: STATUS_MESSAGE.READ,
    type: 'chat',
    id: 2,
  },
  {
    name: 'Ваня Пупкин',
    img: '',
    message: 'Привет! Как дела?',
    date: '20:34',
    status: STATUS_MESSAGE.READ,
    type: 'group',
    id: 3,
  },
  {
    name: 'Ваня Пупкин',
    img: '',
    message: 'Привет! Как дела?',
    date: '20:34',
    status: STATUS_MESSAGE.READ,
    type: 'chat',
    id: 4,
  },
  {
    name: 'Ваня Пупкин',
    img: '',
    message: 'Привет! Как дела?',
    date: '20:34',
    status: STATUS_MESSAGE.READ,
    type: 'chat',
    id: 5,
  },
  {
    name: 'Ваня Пупкин',
    img: '',
    message: 'Привет! Как дела?',
    date: '20:34',
    status: STATUS_MESSAGE.READ,
    type: 'chat',
    id: 6,
  },
  {
    name: 'Ваня Пупкин',
    img: '',
    message: 'Привет! Как дела?',
    date: '20:34',
    status: STATUS_MESSAGE.READ,
    type: 'chat',
    id: 7,
  },
  {
    name: 'Ваня Пупкин',
    img: '',
    message: 'Привет! Как дела?',
    date: '20:34',
    status: STATUS_MESSAGE.READ,
    type: 'chat',
    id: 8,
  },
  {
    name: 'Ваня Пупкин',
    img: '',
    message: 'Привет! Как дела?',
    date: '20:34',
    status: STATUS_MESSAGE.READ,
    type: 'chat',
    id: 9,
  },
  {
    name: 'Ваня Пупкин',
    img: '',
    message: 'Привет! Как дела?',
    date: '20:34',
    status: STATUS_MESSAGE.READ,
    type: 'chat',
    id: 10,
  },
];
