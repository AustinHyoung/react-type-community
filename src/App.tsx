import Nav from 'components/Nav';
import Community from 'page/Community';
import Item3 from 'page/Item3';
import Login from 'page/Login';
import Main from 'page/Main';
import Password from 'page/Password';
import QnA from 'page/QnA';
import QnADetail from 'page/QnADetail';
import Signup from 'page/Signup';
import QnAWrite from 'page/QnAWrite';
import { Route, Routes } from 'react-router-dom';
import 'App.css';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Nav />}>
          <Route path="/" element={<Main />} />
          <Route path="/qna" element={<QnA />} />
          <Route path="/qna/detail/:qnaNo" element={<QnADetail />} />
          <Route path="/community" element={<Community />} />
          <Route path="/item3" element={<Item3 />} />
          <Route path="/qna/write" element={<QnAWrite />} />
        </Route>

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password" element={<Password />} />
      </Routes>
    </>
  );
}

export default App;
