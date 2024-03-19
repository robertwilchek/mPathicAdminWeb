import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReactDOM } from 'react-dom/client';
import Landing_Page from './pages/landing';
import Login from './pages/login';
import Home_Page from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing_Page />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home_Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
