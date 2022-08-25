import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Home from './components/Home';
import MainPage from './components/MainPage';

function App() {
  return (
     <>
     <NavBar/> 
     <Routes>
      <Route exact path='/' element={<MainPage/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route  exact path='/education' element={<Education/>}/>
      <Route  exact path='/projects' element={<Projects/>}/>
      <Route  exact path='/skills' element={<Skills/>}/>
     </Routes>
    </>
  );
}

export default App;
