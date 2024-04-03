import Fullmovie from './components/Fullmovie';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Details from './components/Details';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Search from './components/Search';



function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/movies/:id" element={<Fullmovie />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/search" element={<Search/>} />

    </Routes>
    </BrowserRouter>

  );
}

export default App