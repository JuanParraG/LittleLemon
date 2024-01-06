import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Reservations from './pages/Reservations';
import Login from './pages/Login';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
})

function App() {
  return (
    <>
    <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/"element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Reservations" element={<Reservations/>}></Route>
      <Route path="//Login" element={<Login/>}></Route>
    </Routes>
    </ChakraProvider>
    </>
  );
}

export default App;
