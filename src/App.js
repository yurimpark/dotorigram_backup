import "./App.css";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import ContentUpload from "./components/contents/ContentUpload";
import PostedContent from "./components/contents/PostedContent";
import Comments from "./components/contents/Comments";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Mainpage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/contentupload' element={<ContentUpload />} />
      <Route path='/postedcontent' element={<PostedContent />} />

    </Routes>
  );
}

export default App;
