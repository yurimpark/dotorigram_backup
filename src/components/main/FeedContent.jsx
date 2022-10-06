import React from 'react';

import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
const FeedContent = () => {
  return (
    <div className='mx-3'>
      <div className='mt-2'>
        <button>
          <FavoriteBorderRoundedIcon className='text-xl' />
        </button>
        <button>
          <ChatBubbleOutlineOutlinedIcon className='text-xl' />
        </button>
      </div>
      <div className='mt-2'>좋아요 3,690,234개</div>
      <div className='my-2'>
        <div className='font-bold inline-block float-left mr-2'>strongrabbit</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ea sapiente sunt quo, velit ratione error mollitia. Libero cupiditate aliquam provident commodi sapiente veritatis excepturi.
          Ducimus quasi aperiam saepe ea.
        </div>
      </div>
    </div>
  );
};

export default FeedContent;
