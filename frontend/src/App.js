// import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyComplaints from './pages/MyComplaints';
import Complain from './pages/Complain';
import Community from './pages/Community';

function App() {
  return (
    <div>
      <BrowserRouter > 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mycomplaints" element={<MyComplaints />} />
          <Route path="/complain" element={<Complain />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
