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

			<div className='Main_HowToWork1'><HowToWork1 /></div>

			<Rate />

			<Footer />
			
				
			

			
			</div>
		</div>
		
	);
}
export default Content;