import './App.css';
import Header from './components/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import IndexPage from './pages/IndexPage';
import Login from './pages/Login';
import Register from './pages/Register';
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';

// 3:16:57

function App() {
  return (
   <UserContextProvider>
     <BrowserRouter>
      <main>
        <Header/>
        <Routes>

        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/create" element={<CreatePost/>} />
        <Route path="/post/:id" element={<PostPage/>} />
        <Route path="/edit/:id" element={<EditPost/>} />

                
        </Routes>
       
      </main>
      
    </BrowserRouter>
   </UserContextProvider>
  );
}

export default App;
