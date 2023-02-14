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

                
        </Routes>
       
      </main>
      
    </BrowserRouter>
   </UserContextProvider>
  );
}

export default App;
