import logo from './logo.svg';
import './Article.css';
import Header from './components/Header-Footer/Header'
import Footer from './components/Header-Footer/Footer'
import Halls from './components/Halls'

function App() {
  return (
    <div className='App_conteainer'>
      <div className='App_Header'><Header /></div>
      <div className='App_Content'><Halls /></div>
      <div className='App_Footer'><Footer/></div>
    </div>
  );
}

export default App;
