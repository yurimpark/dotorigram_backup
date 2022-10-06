import React from "react";


import { AiOutlineHeart } from "react-icons/ai";
import { TbMessageCircle2 } from "react-icons/tb";
const FeedContent = () => {
  return (
    <div className='mx-3'>
      <div className='mt-2'>
        <button className='mr-2'>
          <FavoriteBorderRoundedIcon className='text-xl' />
        </button>
        <button>
          <ChatBubbleOutlineOutlinedIcon className='text-xl' />
        </button>
      </div>
      <div className='mt-2 font-bold'>좋아요 3,690,234개</div>
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
