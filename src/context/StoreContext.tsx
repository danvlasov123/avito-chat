import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import { MessageType, data } from './constants';

export type StoreContextType = {
  selectedId: number | null;
  setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
  data: MessageType[];
  handleTopMessage: () => void;
  setMessages: React.Dispatch<React.SetStateAction<MessageType[]>>;
};

const defaultValue = {
  selectedId: null,
  setSelectedId: () => {},
  handleTopMessage: () => {},
  data: [],
  setMessages: () => {},
};

const StoreContext = createContext<StoreContextType>(defaultValue);

const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedId, setSelectedId] = useState<number | null>(2);

  const [messages, setMessages] = useState(data);

  const handleTopMessage = () => {
    if (selectedId) {
      const sorted = [...data].sort((a) => {
        return a.id !== selectedId ? 0 : a ? -1 : 1;
      });
      setMessages(sorted);
    }
  };

  const value = {
    selectedId,
    setSelectedId,
    data: messages,
    handleTopMessage,
    setMessages,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

// eslint-disable-next-line react-refresh/only-export-components
export { StoreProvider, StoreContext, useStore };
