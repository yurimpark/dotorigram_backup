import './App.css';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Login from './pages/Login';
import Register from './pages/Register';
import ContentUpload from './pages/ContentUpload';
import PostedContent from './pages/PostedContent';
import Mypage from './pages/Mypage';
import CommentsBox from './pages/CommentsBox';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Mainpage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/contentupload' element={<ContentUpload />} />
      <Route path='/postedcontent' element={<PostedContent />} />
      <Route path='/commentsbox' element={<CommentsBox />} />
      <Route path='/mypage' element={<Mypage />} />
    </Routes>
  );
}

export default App;
