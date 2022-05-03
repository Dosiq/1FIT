import React from 'react'
import Rate_css from './Rate.css'
import check from '../images/check.png'
import next from '../Carousel/next.png'
import { Checkbox } from '@material-ui/core'



const Rate = (props) => {

	return (

          <div className='Rate_main_conteiner_box'>

            <div className='Rate_main_conteiner_box_price'>
              <p className='Rate_main_conteiner_box_price_time'>{props.title}</p>
              <p className='Rate_main_conteiner_box_price_cost'>{props.price}</p>
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
                  <Checkbox className='Rate_main_conteiner_box_info_slider_li_img' defaultChecked/>
                  <p className='Rate_main_conteiner_box_info_slider_li_text'>30 дней тренировок</p>
                </li>
                <li className='Rate_main_conteiner_box_info_slider_li'>
                  <Checkbox className='Rate_main_conteiner_box_info_slider_li_img' defaultChecked disabled/>
                  <p className='Rate_main_conteiner_box_info_slider_li_text'>Занятия в 708+ залах</p>
                </li>
                <li className='Rate_main_conteiner_box_info_slider_li'>
                  <Checkbox className='Rate_main_conteiner_box_info_slider_li_img' defaultChecked disabled/>
                  <p className='Rate_main_conteiner_box_info_slider_li_text'>Занятия в 708+ залах</p>
                </li>
                <li className='Rate_main_conteiner_box_info_slider_li'>
                  <Checkbox className='Rate_main_conteiner_box_info_slider_li_img' defaultChecked disabled/>
                  <p className='Rate_main_conteiner_box_info_slider_li_text'>Занятия в 708+ залах</p>
                </li>
              </ul>
              <button className='Rate_main_conteiner_box_info_button'>
                <div className='Rate_main_conteiner_box_info_button_conteiner'>Купить абонемент <img src={next} className='Rate_main_conteiner_box_info_button_img'/></div>
              </button>
            </div>

          </div> 
		
	);
}
export default Rate;