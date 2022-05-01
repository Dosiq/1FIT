import logo from './logo.svg';
import './App.css';
import Content from './components/Content.js'
import Header from './components/Header-Footer/Header'
import Footer from './components/Header-Footer/Footer'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Rate from './components/Rate'
import Halls from './components/Halls'
import Article from './Article'
import { Route, Routes, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App_conteainer'>
        <div className='App_Header'><Header /></div>

      
        <div className="App">
            <Routes>
              <Route exact path='/' element={<Content/>}></Route>
              <Route exact path='/' element={<Halls/>}></Route>
            </Routes>
        </div>

        <div className='App_Footer'><Footer/></div>
    </div>
  );
}

export default App;
