import './ImageList.scss';
import { Flex } from 'src/components/Flex';
import { Typography } from 'src/components/UI';

const ImageList = () => {
  return (
    <Flex className='image-list' direction='column' gap={8}>
      <Typography fontSize={14} color='var(--grey)' padding='0 0 0 16px'>
        12 сентября
      </Typography>
      <div className='image-list__images'>
        <div className='image-list__image'>
          <a
            data-fancybox='gallery'
            href='https://picsum.photos/seed/picsum/1600/1200'
          >
            <img src='https://picsum.photos/seed/picsum/536/354' alt='img' />
          </a>
        </div>
        <div className='image-list__image'>
          <a
            data-fancybox='gallery'
            href='https://picsum.photos/seed/picsum/1600/1200'
          >
            <img src='https://picsum.photos/seed/picsum/536/354' alt='img' />
          </a>
        </div>
        <div className='image-list__image'>
          <a
            data-fancybox='gallery'
            href='https://picsum.photos/seed/picsum/1600/1200'
          >
            <img src='https://picsum.photos/seed/picsum/536/354' alt='img' />
          </a>
        </div>
      </div>
      <Typography fontSize={14} color='var(--grey)' padding='8px 0 0 16px'>
        12 сентября
      </Typography>
      <div className='image-list__images'>
        <div className='image-list__image'>
          <a
            data-fancybox='gallery'
            href='https://picsum.photos/seed/picsum/1600/1200'
          >
            <img src='https://picsum.photos/seed/picsum/536/354' alt='img' />
          </a>
        </div>
        <div className='image-list__image'>
          <a
            data-fancybox='gallery'
            href='https://picsum.photos/seed/picsum/1600/1200'
          >
            <img src='https://picsum.photos/seed/picsum/536/354' alt='img' />
          </a>
        </div>
        <div className='image-list__image'>
          <a
            data-fancybox='gallery'
            href='https://picsum.photos/seed/picsum/1600/1200'
          >
            <img src='https://picsum.photos/seed/picsum/536/354' alt='img' />
          </a>
        </div>
        <div className='image-list__image'>
          <a
            data-fancybox='gallery'
            href='https://picsum.photos/seed/picsum/1600/1200'
          >
            <img src='https://picsum.photos/seed/picsum/536/354' alt='img' />
          </a>
        </div>
        <div className='image-list__image'>
          <a
            data-fancybox='gallery'
            href='https://picsum.photos/seed/picsum/1600/1200'
          >
            <img src='https://picsum.photos/seed/picsum/536/354' alt='img' />
          </a>
        </div>
      </div>
      <Typography fontSize={14} color='var(--grey)' padding='8px 0 0 16px'>
        12 сентября
      </Typography>
      <div className='image-list__images'>
        <div className='image-list__image'>
          <a
            data-fancybox='gallery'
            href='https://picsum.photos/seed/picsum/1600/1200'
          >
            <img src='https://picsum.photos/seed/picsum/536/354' alt='img' />
          </a>
        </div>
      </div>
    </Flex>
  );
};

export { ImageList };
