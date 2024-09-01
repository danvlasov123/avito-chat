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
};

const defaultValue = {
  selectedId: null,
  setSelectedId: () => {},
  data: [],
};

const StoreContext = createContext<StoreContextType>(defaultValue);

const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedId, setSelectedId] = useState<number | null>(2);

  const value = {
    selectedId,
    setSelectedId,
    data,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

// eslint-disable-next-line react-refresh/only-export-components
export { StoreProvider, StoreContext, useStore };
