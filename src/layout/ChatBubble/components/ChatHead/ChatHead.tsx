import { Flex } from 'src/components/Flex';

import './ChatHead.scss';
import { Avatar } from 'src/components/Avatar';
import { Button, Typography } from 'src/components/UI';
import { ArrowRightIcon, SearchIcon } from 'src/components/Icons';
import { Dispatch, SetStateAction, useState } from 'react';

import { MdKeyboardArrowLeft } from 'react-icons/md';
import { BiArrowToTop } from 'react-icons/bi';
import { PiImagesLight } from 'react-icons/pi';

import { CiSearch } from 'react-icons/ci';
import { IoIosSwap } from 'react-icons/io';

import { AnimatePresence, motion } from 'framer-motion';
import { useMediaQuery } from 'usehooks-ts';
import { useStore } from 'src/context/StoreContext';
import { Search } from 'src/components/Search';
import { IoCloseOutline } from 'react-icons/io5';
import cn from 'classnames';

const data = {
  name: 'Ваня Пупкин',
  img: 'https://res.cloudinary.com/subframe/image/upload/v1711417512/shared/btvntvzhdbhpulae3kzk.jpg',
  message: 'Привет! Как дела?',
  date: '20:34',
  email: 'ivan@gmail.com',
};

const ChatHead = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { setSelectedId } = useStore();

  const [isOpenSearch, setIsOpenSearch] = useState(true);

  const handleOpenSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpenSearch(true);
  };

  const handleCloseSearch = () => setIsOpenSearch(false);

  return (
    <Flex full direction='column'>
      <Flex
        className='chat-head'
        justifyContent='space-between'
        gap={16}
        alignItems='center'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className='chat-head__info'
        >
          {isMobile && (
            <Button
              style={{ display: 'flex', height: 'fit-content' }}
              variant='transparent'
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setSelectedId(null);
              }}
            >
              <MdKeyboardArrowLeft size={22} fill='var(--grey)' />
            </Button>
          )}
          <Flex gap={8} alignItems='center' className='chat-head__user'>
            <Avatar
              width={isMobile ? 30 : 42}
              height={isMobile ? 30 : 42}
              alt={data.name}
              iconProps={{
                style: {
                  background: 'white',
                },
              }}
              name={'В'}
            />
            <Flex direction='column' gap={2} className='chat-head__user--info'>
              <Typography
                className='chat-head__name'
                fontSize={16}
                fontWeight={500}
                style={{ letterSpacing: -0.2 }}
              >
                {data.name}
              </Typography>
              <Typography
                className='chat-head__email'
                as='span'
                color='var(--grey)'
                fontSize={13}
              >
                {data.email}
              </Typography>
            </Flex>
          </Flex>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className={cn('chat-head__actions', {
            'w-full': isOpenSearch,
          })}
        >
          <Flex gap={24} alignItems='center'>
            <AnimatePresence>
              {isOpenSearch && (
                <motion.div
                  onClick={(e) => e.stopPropagation()}
                  className='w-full'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Search
                    placeholder='Поиск'
                    className='chat-head__search'
                    endAdornment={
                      <Button variant='transparent' onClick={handleCloseSearch}>
                        <IoCloseOutline size={16} color='var(--grey)' />
                      </Button>
                    }
                  />
                </motion.div>
              )}
            </AnimatePresence>
            {!isOpenSearch && (
              <Button variant='transparent' onClick={handleOpenSearch}>
                <SearchIcon width={16} height={16} fill='var(--violet)' />
              </Button>
            )}
            <Button variant='transparent'>
              <Flex alignItems='center' gap={6}>
                <Typography color='var(--violet)' lineHeight={1}>
                  СДЕЛКА
                </Typography>
                <ArrowRightIcon
                  style={{ marginBottom: 2 }}
                  width={16}
                  height={16}
                  fill='var(--violet)'
                />
              </Flex>
            </Button>
          </Flex>
        </motion.div>
      </Flex>
      {isMobile && (
        <Flex
          justifyContent='space-between'
          alignItems='center'
          gap={12}
          full
          className='chat-head__other'
        >
          <Button
            variant='transparent'
            onClick={() =>
              document.querySelector('.message-list')?.scroll({
                top: 0,
                behavior: 'smooth',
              })
            }
          >
            <BiArrowToTop size={20} />
          </Button>
          <Button variant='transparent'>
            <CiSearch size={20} />
          </Button>
          <Button variant='transparent' onClick={() => setIsOpen(true)}>
            <PiImagesLight size={20} />
          </Button>
          <Button variant='transparent' onClick={() => setIsOpen(true)}>
            <IoIosSwap size={18} />
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export { ChatHead };
