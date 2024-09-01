import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Button, Typography } from 'src/components/UI';
import { Flex } from 'src/components/Flex';

const ConnectTgModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='dialog'>
      <div className='backdrop'>
        <DialogPanel className='dialog__panel'>
          <Typography fontWeight={500} fontSize={16}>
            Настройте уведомление в Телеграм
          </Typography>
          <Flex direction='column' gap={6} padding='18px 0 0 0'>
            <Typography color='var(--grey)' fontSize={14}>
              Подключите уведомление в телеграм, перейдя по ссылке:
            </Typography>
            <Typography color='blue' fontSize={14}>
              <a href='#'>https://telegram.com/valera-ssilka-connect</a>
            </Typography>
          </Flex>
          <Flex alignItems='center' gap={8} className='dialog__actions'>
            <Button variant='primary' onClick={() => setIsOpen(false)}>
              Перейти
            </Button>
            <Button variant='grey' onClick={() => setIsOpen(false)}>
              Закрыть
            </Button>
          </Flex>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export { ConnectTgModal };
