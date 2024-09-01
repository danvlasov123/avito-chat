import { Fragment } from 'react';
import { ChatBubble, Sidebar } from './layout';
import { Flex } from './components/Flex';

import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { useStore } from './context/StoreContext';
import { useMediaQuery } from 'usehooks-ts';

import './styles/dropdown.scss';
import './styles/dialog.scss';

import { ConnectTgModal } from './components/Modals/ConnectTg';

const App = () => {
  const { selectedId } = useStore();

  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Fragment>
      <Flex>
        {isMobile ? !selectedId && <Sidebar /> : <Sidebar />}
        {isMobile ? selectedId && <ChatBubble /> : <ChatBubble />}
      </Flex>
      <ConnectTgModal />
    </Fragment>
  );
};

export default App;
