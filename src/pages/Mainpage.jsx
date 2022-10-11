import React from 'react';
import TopNavbar from '../components/main/TopNavbar';
import FeedList from '../components/main/FeedList';
import BottomNavbar from '../components/main/BottomNavbar';
const Mainpage = ({ id }) => {
  return (
    <div>
      <TopNavbar />
      <div className='py-12'>
        {/* <StoryList /> */}
        <FeedList id={id} />
        <FeedList id={id} />
        <FeedList id={id} />
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Mainpage;
