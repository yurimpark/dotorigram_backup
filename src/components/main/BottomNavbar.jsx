import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Avatar from '@mui/material/Avatar';

const BottomNavbar = () => {
  return (
    <div className='z-10 bottom-0 w-screen fixed bg-white border-t-2'>
      <div className='h-12 flex justify-between mx-3 items-center'>
        <button>
          <HomeIcon />
        </button>
        <button>
          <AddBoxOutlinedIcon />
        </button>
        <button>
          <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
        </button>
      </div>
    </div>
  );
};

export default BottomNavbar;
