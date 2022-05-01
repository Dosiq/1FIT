import React from 'react'
import styles from './Price.css'





const Price = () => {

	return (
		
		<div className='Main'>
			<div className='Main_main'>

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
			
			</div>
		</div>
		
	);
}
export default Price;