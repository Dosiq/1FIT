import React from 'react'
import styles from './Content.css'
import YanMap from './Map'
import HowToWork1 from './HowToWork1'
import Price from './Price.js'
import Work from './Work'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Carousel from './Carousel/Carousel'
import Rate from './Rate'




const Content = () => {

	return (
		
		<div className='Main'>
			<div className='Main_main'>

				<div className="Content_main">
					<div className='Content_main_introduction'>		
						<div className='Content_main_introduction_price'>
							<div className='Content_main_introduction_price_price'><p>От 12 499 ₸/месяц</p></div>
							<div className='Content_main_introduction_price_time'><p>0 · 0 · 12</p></div>
						</div>					
						<div className='Content_main_introduction_abonnement'>
							<div className='Content_main_introduction_abonnement_one'>Абонемент один, a залов больше <span className='Content_main_introduction_abonnement_one_697'>697</span></div>
							<div className='Content_main_introduction_abonnement_where'>Занимайся без ограничений в фитнес-клубах Алматы</div>
						</div>
						<div className='Content_main_introduction_buy'> 
							<button className='Content_main_introduction_buy_button' href='/work'>Купить абонемент</button>
						</div>
					</div>
			</div>
			

			<div className="Navigation_main">
				<div className="Navigation_content">
					<div className='Navigation_content_work'><h1>Занимайся где угодно и сколько угодно</h1></div>
					<div className='Navigation_content_home'>Возле дома, работы или учёбы</div>
					<div className='Navigation_content_map'> <YanMap /> </div>
				</div>
			</div>


			<div className="Pops_main">
				<div className="Pops_main_content">

					<div className='Pops_main_content_popular'>
						<div className='Pops_main_content_popular_hall'>Популярные залы 1Fit</div>
						<div className='Pops_main_content_popular_take'>Выбери зал, который тебе нравится и начни тренироваться уже сегодня!</div>
						<div><button className='Pops_main_content_popular_button'>Посмотреть все залы</button></div>
					</div>

					<div className='Pops_main_content_slider'>
						<Carousel />
					</div>

				</div>
			</div>

			<div className="Pops_main">
				<div className="Pops_main_content">

					<div className='Pops_main_content_popular'>
						<div className='Pops_main_content_popular_hall'>Новые залы 1Fit</div>
						<div className='Pops_main_content_popular_take'>Выбери зал, который тебе нравится и начни тренироваться уже сегодня!</div>
						<div><button className='Pops_main_content_popular_button'>Посмотреть все залы</button></div>
					</div>

					<div className='Pops_main_content_slider'>
						<Carousel />
					</div>

				</div>
			</div>


			<div className='Price_main'>
				<div className='Price_main_content'>

					<div className='Price_main_content_texts'>
						<div className='Price_main_content_texts_textone'>Почему люди выбирают Абонемент 1Fit</div>
						<div className='Price_main_content_texts_texttwo'>У нас самые выгодные абонементы, остается только выбрать свой</div>
					</div>

					<div className='Price_main_content_blocks'>

						<div className='Price_main_content_texts_priceone'>
							<div className='Price_main_content_texts_priceone_conteiner'>
								<div className='Price_main_content_texts_priceone_infinity'>
									<div className='Price_main_content_texts_priceone_infinity_icon'></div>
									<div className='Price_main_content_texts_priceone_infinity_text'>АБОНЕМЕНТ 1FIT</div>
								</div>
								<div className='Price_main_content_texts_priceone_text1'>134 990 ₸/год</div>
								<div className='Price_main_content_texts_priceone_text2'>704+ залов</div>
								<div className='Price_main_content_texts_priceone_text3'>Рассрочка на 3 месяца</div>
								<div className='Price_main_content_texts_priceone_text4'>Безлимит</div>
							</div>
						</div>

						<div className='Price_main_content_texts_versus'>VS</div>

						<div className='Price_main_content_texts_pricetwo'>
							<div className='Price_main_content_texts_pricetwo_conteiner'>
								<div className='Price_main_content_texts_pricetwo_infinity'>
									<div className='Price_main_content_texts_pricetwo_infinity_icon'></div>
									<div className='Price_main_content_texts_pricetwo_infinity_text'>ОБЫЧНЫЙ АБОНЕМЕНТ</div>
								</div>
								<div className='Price_main_content_texts_pricetwo_text1'>250 000 ₸/год</div>
								<div className='Price_main_content_texts_pricetwo_text2'>1 зал</div>
								<div className='Price_main_content_texts_pricetwo_text3'>Единоразовая оплата</div>
								<div className='Price_main_content_texts_pricetwo_text4'>12 занятий в месяц</div>
							</div>
						</div>

					</div>

					<div className='Price_main_content_button_conteiner'>
						<div className='Price_main_content_button'>
							<button className='Price_main_content_button'>Купить Абонемент 1FIT</button>
						</div>
					</div>

				</div>
			</div>

			<div className='Main_HowToWork1'><HowToWork1 /></div>

			<Rate />

			
				
			

			
			</div>
		</div>
		
	);
}
export default Content;