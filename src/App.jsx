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



// 26:08
function App() {
  return (
    <BrowserRouter>
      <main>
        <Header/>
        <Routes>

        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

                
        </Routes>
       
      </main>
      
    </BrowserRouter>
  );
}

export default App;
