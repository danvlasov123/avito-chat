import { ChatBubble, Sidebar } from './layout';
import { Flex } from './components/Flex';

import '@fancyapps/ui/dist/fancybox/fancybox.css';

const App = () => {
  return (
    <Flex>
      <Sidebar />
      <ChatBubble />
    </Flex>
  );
};

export default App;
