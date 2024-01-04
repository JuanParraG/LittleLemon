import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Reservations from './pages/Reservations';
import Login from './pages/Login';
function App() {
  return (
    <>
    <Routes>
      <Route path="/"element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Reservations" element={<Reservations/>}></Route>
      <Route path="//Login" element={<Login/>}></Route>
    </Routes>
    </>
  );
}

export default App;
