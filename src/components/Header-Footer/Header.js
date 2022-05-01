import './Header.css'
import logo from "./photos/52818.jpg"
import { Route, Routes, Switch, Link } from 'react-router-dom';

const Header = () =>{
    return (
        <div className='Header'>
            <div className='Header_main'>

            <Link to="/" className='Header_logocity_conteiner'>
                <div className='Header_logo'>
                    <img src={logo} className="logo"></img>
                </div>
            </Link>

            <div className='Header_spisok'>
                <div className='spisok'>
                       <Link to="/Halls" className='spiok_conteiner'>Залы и студии</Link>
                       <div className='spiok_conteiner'>Как это работает</div>
                       <div className='spiok_conteiner'>Цены</div>
                      <div className='spiok_conteiner'>Блог</div>
                </div>
            </div>

            <div className='Header_city_conteiner'>
                <div className='Header_city'>
                    <select className='city'>
                        <option>Алматы</option>
                        <option>Нур-Султан</option>
                        <option>Шымкент</option>
                    </select>
                </div>

                <div className='Header_aut_conteiner'>
                    <Link to="/SignIn" className='Header_login'>Вход</Link>
                    <div className='Header_signup'>Регистрация</div>
                </div>
           </div>

           </div>
        </div>
        );
    }
    
    export default Header;