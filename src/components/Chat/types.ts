import { MessageStatuses } from '../Message';

export type ChatProps = {
  name: string;
  img: string;
  message: string;
  date: string;
  isSelected: boolean;
  status: MessageStatuses;
  type: 'group' | 'chat',
  id: number;
  onSelect: (id: number) => void;
};
