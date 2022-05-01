import React from 'react'
import styles from './HowToWork.css'
import apple from './social_apple_mac_65.png'
import playMarket from './google_play_icon_198147.png'
import Ali from './aliexpress_logo_icon_167892.png'
import PhoneOne from './step-1.png' 
import PhoneTwo from './step-2.png' 
import PhoneThree from './step-3.png'

const Content = () => {

	return (
		<div className='Main_HowTo_Work'>

      <div className='Main_HowTo_Work_text1'>Как работает 1Fit?</div>

        <div className='Main_HowTo_Work_paragrafone'>
          <div className='Main_HowTo_Work_paragrafone_conteiner'>

            <div className='Main_HowTo_Work_paragrafone_conteiner_lorem'>
                <div className='Main_HowTo_Work_paragrafone_conteiner_lorem_text1'>Установить приложение и зарегистрироваться</div>
                <div className='Main_HowTo_Work_paragrafone_conteiner_lorem_text2'>После установки приложения — зарегистрируйся. Мы попросим заполнить стандартные данные: номер, почту, имя и дату рождения. А еще выбрать цель, с которой ты хочешь начать заниматься. Заполни раздел подробно, и мы поможем подобрать залы и занятия.</div>
                
                <div className='Main_HowTo_Work_paragrafone_conteiner_lorem_buttons'>
                    <div className='Main_HowTo_Work_paragrafone_conteiner_lorem_buttons_cont'>
                      <div className='Main_HowTo_Work_paragrafone_conteiner_button'>
                        <div>
                          <img className='Main_HowTo_Work_paragrafone_conteiner_button_apple' src={apple}></img>
                        </div>
                        <div className='button_petya_seconf'>
                          <div className='Main_HowTo_Work_paragrafone_conteiner_button_text1'>Download on the</div>
                          <div className='Main_HowTo_Work_paragrafone_conteiner_button_text2'>App Store</div>
                        </div>
                      </div>
                      
                      <div className='Main_HowTo_Work_paragrafone_conteiner_button'>
                        <div>
                          <img className='Main_HowTo_Work_paragrafone_conteiner_button_apple' src={playMarket}></img>
                        </div>
                        <div className='button_petya_seconf'>
                          <div className='Main_HowTo_Work_paragrafone_conteiner_button_text1'>GET IT ON</div>
                          <div className='Main_HowTo_Work_paragrafone_conteiner_button_text2'>Google Play</div>
                        </div>
                      </div>

                      <div className='Main_HowTo_Work_paragrafone_conteiner_button'>
                        <div>
                          <img className='Main_HowTo_Work_paragrafone_conteiner_button_apple' src={Ali}></img>
                        </div>
                        <div className='button_petya_seconf'>
                          <div className='Main_HowTo_Work_paragrafone_conteiner_button_text1'>EXPLORE IT ON</div>
                          <div className='Main_HowTo_Work_paragrafone_conteiner_button_text2'>AppGallery</div>
                        </div>
                      </div>
                    </div>
                </div>

              </div>

              <div className='Main_HowTo_Work_paragrafone_conteiner_phoneOne'><img className='Main_HowTo_Work_paragrafone_conteiner_phoneOne' src={PhoneOne}></img></div>

          </div>
 
      </div>



      <div className='Main_HowTo_Work_paragraftwo'>
          <div className='Main_HowTo_Work_paragrafone_conteiner'>

            <div className='Main_HowTo_Work_paragrafone_conteiner_phoneOne'><img className='Main_HowTo_Work_paragrafone_conteiner_phoneOne' src={PhoneTwo}></img></div>

            <div className='Main_HowTo_Work_paragrafone_conteiner_loremtwo'>
                <div className='Main_HowTo_Work_paragrafone_conteiner_lorem_text1'>Установить приложение и зарегистрироваться</div>
                <div className='Main_HowTo_Work_paragrafone_conteiner_lorem_text2'>После установки приложения — зарегистрируйся. Мы попросим заполнить стандартные данные: номер, почту, имя и дату рождения. А еще выбрать цель, с которой ты хочешь начать заниматься. Заполни раздел подробно, и мы поможем подобрать залы и занятия.</div>

            </div>

          </div>
      </div>

      <div className='Main_HowTo_Work_paragrafthree'>
          <div className='Main_HowTo_Work_paragrafone_conteiner'>

            <div className='Main_HowTo_Work_paragrafone_conteiner_loremthree'>
                <div className='Main_HowTo_Work_paragrafone_conteiner_lorem_text1'>Записаться на занятия</div>
                <div className='Main_HowTo_Work_paragrafone_conteiner_lorem_text2'>Управляй своим абонементом в приложении. Записывайся на занятие, замораживай абонемент и продлевай его.</div>
            </div>

            <div className='Main_HowTo_Work_paragrafone_conteiner_phoneOne'><img className='Main_HowTo_Work_paragrafone_conteiner_phoneOne' src={PhoneThree}></img></div>

          </div>
      </div>




		</div>
		
	);
}
export default Content;