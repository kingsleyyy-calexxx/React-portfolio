import './App.css';
import Home from './Components/Navbar';
import Intro from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Skills from './Components/Skills';
import Calex from './Components/Calex';
import Footer from './Components/Footer';
 function App() {
  return (
    <div className="App">
      <Home/>
      <Routes>
        <Route path='/' element={<Calex/>}/>
        <Route path='/home' element={<Intro/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/final' element={<Footer/>}/>
      </Routes>
    </div>
  );
}

export default App;