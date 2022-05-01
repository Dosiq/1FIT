import React from 'react'
import styles from './Navigations.css'
import YanMap from '../Maps/Map'




const Navigations = () => {

	return (
		
		<div className='Navigation'>
			<div className='Navigation_main'>

      <div className="Navigation_main">
				<div className="Navigation_content">
					<div className='Navigation_content_work'><h1>Занимайся где угодно и сколько угодно</h1></div>
					<div className='Navigation_content_home'>Возле дома, работы или учёбы</div>
					<div className='Navigation_content_map'> <YanMap /> </div>
				</div>
			</div>

			</div>
		</div>
		
	);
}
export default Navigations;