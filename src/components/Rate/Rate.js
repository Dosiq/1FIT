import React from 'react'
import styles from './Rate.css'
import check from '../images/check.png'
import next from '../Carousel/next.png'



const Rate = () => {

	return (
		
		<div className='Rate'>
      <div className='Rate_main'>

        <div className='Rate_main_text'>Выбери свой абонемент 1 Fit</div>

        <div className='Rate_main_conteiner'>
          <div className='Rate_main_conteiner_box'>

            <div className='Rate_main_conteiner_box_price'>
              <p className='Rate_main_conteiner_box_price_time'>1 МЕСЯЦ БЕЗЛИМИТА</p>
              <p className='Rate_main_conteiner_box_price_cost'>29 990 ₸</p>
              <div className='Rate_main_conteiner_box_price_conteiner'>
                <div className='Rate_main_conteiner_box_price_conteiner_info'>
                  <p className='Rate_main_conteiner_box_price_conteiner_info_payment'>В рассрочку от</p>
                  <p className='Rate_main_conteiner_box_price_conteiner_info_time'>9 996 ₸ в месяц</p>
                </div>
                <div className='Rate_main_conteiner_box_price_conteiner_button'> 3 мес</div>
              </div>
            </div>

            <div className='Rate_main_conteiner_box_info'>
              <ul className='Rate_main_conteiner_box_info_slider'>
                <li className='Rate_main_conteiner_box_info_slider_li'>
                  <img src={check} className='Rate_main_conteiner_box_info_slider_li_img'></img>
                  <p className='Rate_main_conteiner_box_info_slider_li_text'>30 дней тренировок</p>
                </li>
                <li className='Rate_main_conteiner_box_info_slider_li'>
                  <img src={check} className='Rate_main_conteiner_box_info_slider_li_img'></img>
                  <p className='Rate_main_conteiner_box_info_slider_li_text'>Занятия в 708+ залах</p>
                </li>
              </ul>
              <button className='Rate_main_conteiner_box_info_button'><div className='Rate_main_conteiner_box_info_button_conteiner'>Купить абонемент <img src={next} className='Rate_main_conteiner_box_info_button_img'/></div> </button>
            </div>

          </div>
          <div className='Rate_main_conteiner_box'>

            <div className='Rate_main_conteiner_box_price'>
              <p className='Rate_main_conteiner_box_price_time'>1 МЕСЯЦ БЕЗЛИМИТА</p>
              <p className='Rate_main_conteiner_box_price_cost'>29 990 ₸</p>
              <div className='Rate_main_conteiner_box_price_conteiner'>
                <div className='Rate_main_conteiner_box_price_conteiner_info'>
                  <p className='Rate_main_conteiner_box_price_conteiner_info_payment'>В рассрочку от</p>
                  <p className='Rate_main_conteiner_box_price_conteiner_info_time'>9 996 ₸ в месяц</p>
                </div>
                <div className='Rate_main_conteiner_box_price_conteiner_button'> 3 мес</div>
              </div>
            </div>

            <div className='Rate_main_conteiner_box_info'>
              <ul className='Rate_main_conteiner_box_info_slider'>
                <li className='Rate_main_conteiner_box_info_slider_li'>
                  <img src={check} className='Rate_main_conteiner_box_info_slider_li_img'></img>
                  <p className='Rate_main_conteiner_box_info_slider_li_text'>30 дней тренировок</p>
                </li>
                <li className='Rate_main_conteiner_box_info_slider_li'>
                  <img src={check} className='Rate_main_conteiner_box_info_slider_li_img'></img>
                  <p className='Rate_main_conteiner_box_info_slider_li_text'>Занятия в 708+ залах</p>
                </li>
              </ul>
              <button className='Rate_main_conteiner_box_info_button'><div className='Rate_main_conteiner_box_info_button_conteiner'>Купить абонемент <img src={next} className='Rate_main_conteiner_box_info_button_img'/></div> </button>
            </div>

          </div>
          <div className='Rate_main_conteiner_box'>

            <div className='Rate_main_conteiner_box_price'>
              <p className='Rate_main_conteiner_box_price_time'>1 МЕСЯЦ БЕЗЛИМИТА</p>
              <p className='Rate_main_conteiner_box_price_cost'>29 990 ₸</p>
              <div className='Rate_main_conteiner_box_price_conteiner'>
                <div className='Rate_main_conteiner_box_price_conteiner_info'>
                  <p className='Rate_main_conteiner_box_price_conteiner_info_payment'>В рассрочку от</p>
                  <p className='Rate_main_conteiner_box_price_conteiner_info_time'>9 996 ₸ в месяц</p>
                </div>
                <div className='Rate_main_conteiner_box_price_conteiner_button'> 3 мес</div>
              </div>
            </div>

            <div className='Rate_main_conteiner_box_info'>
              <ul className='Rate_main_conteiner_box_info_slider'>
                <li className='Rate_main_conteiner_box_info_slider_li'>
                  <img src={check} className='Rate_main_conteiner_box_info_slider_li_img'></img>
                  <p className='Rate_main_conteiner_box_info_slider_li_text'>30 дней тренировок</p>
                </li>
                <li className='Rate_main_conteiner_box_info_slider_li'>
                  <img src={check} className='Rate_main_conteiner_box_info_slider_li_img'></img>
                  <p className='Rate_main_conteiner_box_info_slider_li_text'>Занятия в 708+ залах</p>
                </li>
              </ul>
              <button className='Rate_main_conteiner_box_info_button'><div className='Rate_main_conteiner_box_info_button_conteiner'>Купить абонемент <img src={next} className='Rate_main_conteiner_box_info_button_img'/></div> </button>
            </div>

          </div>

          

          
        </div>

      </div>
		</div>
		
	);
}
export default Rate;