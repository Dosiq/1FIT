import logo from './logo.svg';
import './App.css';
import Content from './components/Content.js'
import Header from './components/Header-Footer/Header'
import Footer from './components/Header-Footer/Footer'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Rate from './components/Rate/Rate'
import Halls from './components/Halls/Halls'
import { Route, Routes, Switch } from 'react-router-dom';
import SignIn from './components/Signin/SignIn';

function App() {
  return (
    <div className='App_conteainer'>
        <div className='App_Header'><Header /></div>
        <div>
            <Routes>
              <Route exact path='/' element={<Content/>}></Route>
              <Route exact path='/Halls' element={<Halls/>}></Route>
              <Route exact path='/SignIn' element={<SignIn/>}></Route>
            </Routes>
          </div>
        
    </div>
  );
}

export default App;
