import './App.css';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
function App() {
  return (
    <Routes>
      {/* <Route path="/" element={} />
        <Route path="/login" element={} />
        <Route path="/signup" element={} />
        <Route path="/detail/:id" element={} />
        <Route path="/addpost" element={} />
        <Route path="/mypage" element={} /> */}
      <Route path='/' element={<Mainpage />} />
    </Routes>
  );
}

export default App;
