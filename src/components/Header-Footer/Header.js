import './Header.css'
import logo from "./photos/52818.jpg"
const Header = () =>{
    return (
        <div className='Header'>
            <div className='Header_main'>

            <div className='Header_logocity_conteiner'>
                <div className='Header_logo'>
                    <img src={logo} className="logo"></img>
                </div>
            </div>

            <div className='Header_spisok'>
                <div className='spisok'>
                       <div className='spiok_conteiner'>Залы и студии</div>
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
                    <div className='Header_login'>Вход</div>
                    <div className='Header_signup'>Регистрация</div>
                </div>
           </div>

           </div>
        </div>
        );
    }
    
    export default Header;