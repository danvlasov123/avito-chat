import { STATUS_MESSAGE } from './constants';

export type MessageStatuses = keyof typeof STATUS_MESSAGE;

export type MessageProps = {
  text: string;
  status?: MessageStatuses;
  date?: string;
  isMy?: boolean;
};
