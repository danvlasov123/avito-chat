import { Flex } from 'src/components/Flex';
import { Message } from 'src/components/Message';
import { MessageBlock } from './components/MessageBlock';

import { STATUS_MESSAGE } from 'src/components/Message';

import './MessageList.scss';

const MessageList = () => {
  return (
    <Flex direction='column' gap={32} className='message-list' full>
      <MessageBlock>
        <Message text='Привет! Как дела?' />
        <Message text='Привет! Как дела?' />
        <Message text='Привет! Как дела?' date='12:03' />
      </MessageBlock>
      <MessageBlock>
        <Message
          text='Привет! Нормально, у тебя как?'
          status={STATUS_MESSAGE.READ}
          date='12:03'
          isMy
        />
        <Message
          text='Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'
          status={STATUS_MESSAGE.READ}
          date='12:30'
          isMy
        />
        <Message
          text='Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'
          status={STATUS_MESSAGE.READ}
          date='12:30'
          isMy
        />
      </MessageBlock>
      <MessageBlock>
        <Message
          text='Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'
          status={STATUS_MESSAGE.READ}
          date='12:30'
          isMy
        />
        <Message
          text='Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'
          status={STATUS_MESSAGE.READ}
          date='12:30'
          isMy
        />
      </MessageBlock>
    </Flex>
  );
};

export { MessageList };
