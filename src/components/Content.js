import React from 'react'
import styles from './Content.css'
import YanMap from './Maps/Map'
import HowToWork1 from './Howtowork/HowToWork1'
import Work from './Work/Work'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Carousel from './Carousel/Carousel'
import Rate from './Rate/Rate'
import Page1 from './1page/Page1'
import Navigations from './Navigations/Navigations'
import Popular from './Popular/Popular'
import Price from './Price/Price'
import Footer from './Header-Footer/Footer'




const Content = () => {

	return (
		
		<div className='Main'>
			<div className='Main_main'>

			<Page1/>

			<Navigations/>

			<Popular />

			<Price />

			<HowToWork1 />

			<div className='Main_content_rate_conteiner'>
				<div className='Main_Rate_text'>Выбери свой абонемент 1 Fit</div>
				<div className='Main_Rate'>
					<div className='Main_Rate_conteiner'>
						<Rate title='1 мяс бездимита' price='29 990 ₸'/>	
						<Rate title='2 мяс бездимита' price='39 990 ₸'/>	
						<Rate title='3 мяс бездимита' price='49 990 ₸'/>	
						<Rate title='4 мяс бездимита' price='59 990 ₸'/>	
						<Rate title='на год' price='89 990 ₸'/>	
					</div>
				</div>
			</div>
			

			
			
			
				
			

			
			</div>
		</div>
		
	);
}
export default Content;