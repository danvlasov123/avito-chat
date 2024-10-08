import { Fragment } from 'react';
import { ChatBubble, Sidebar } from './layout';
import { Flex } from './components/Flex';

import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { useStore } from './context/StoreContext';
import { useMediaQuery } from 'usehooks-ts';

import './styles/dropdown.scss';
import './styles/dialog.scss';
import 'react-toastify/dist/ReactToastify.css';

import { ConnectTgModal } from './components/Modals/ConnectTg';
import { ToastContainer } from 'react-toastify';

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
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </Fragment>
  );
};

export default App;
