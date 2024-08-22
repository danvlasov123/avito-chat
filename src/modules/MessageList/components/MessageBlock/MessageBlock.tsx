import { FC, PropsWithChildren } from 'react';
import { Flex } from 'src/components/Flex';

const MessageBlock: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex direction='column' gap={6} full>
      {children}
    </Flex>
  );
};

export { MessageBlock };
