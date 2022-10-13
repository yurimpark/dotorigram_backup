import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CommentInput from '../components/comments/CommentInput';
import Content from '../components/comments/Comments';
import CommentsList from '../components/comments/CommentsList';
import BottomNavbar from '../components/main/BottomNavbar';

function CommentsBox() {
  return (
    <div className='max-w-470'>
      <div className='ml-5 mt-3 flex'>
        <ArrowBackIcon />
        <p className='ml-40 font-bold mb-3'>댓글</p>
      </div>
      <CommentInput />
      <Content />
      <CommentsList />
      <BottomNavbar />
    </div>
  );
}

export default CommentsBox;
