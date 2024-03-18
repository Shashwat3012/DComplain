// import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Blogs from './pages/Blogs';

function App() {
  return (
    <div>
      <BrowserRouter > 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
