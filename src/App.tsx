import { ChatBubble, Sidebar } from './layout';
import { Flex } from './components/Flex';

const App = () => {
  return (
    <Flex>
      <Sidebar />
      <ChatBubble />
    </Flex>
  );
};

export default App;
