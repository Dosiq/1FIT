import React from 'react'
import styles from './Popular.css'
import Carousel from '../Carousel/Carousel'




const Popular = () => {

	return (
		
		<div className='Main'>
			<div className='Main_main'>

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

			</div>
		</div>
		
	);
}
export default Popular;