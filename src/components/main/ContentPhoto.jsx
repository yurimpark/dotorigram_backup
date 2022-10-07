import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContentPhoto = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img src={require('../../static/img/feed_img.jpg')} className='w-100 h-100 m-auto' alt='' onClick={() => navigate('/postedcontent')} />
    </div>
  );
};

export default ContentPhoto;
