import React from 'react'
import styles from './Halls.css'
import YanMapTwo from '../Maps/MapTwo'
import Footer from '../Header-Footer/Footer'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { Route, Routes, Link } from 'react-router-dom';


const Halls = () => {

	return (
		
		<div className='Halls'>
      <div className='Halls_conteiner'>

        <div className='Halls_conteiner_conteiner_content'>
          <div className='Halls_conteiner_content_header'>
            <li className='Halls_conteiner_content_header_text1'>
              <Link to='/' className='Halls_conteiner_content_header_text1_main'>Главная</Link>
              <a className='Halls_conteiner_content_header_text1_sign'>/</a>
            </li>
            <li className='Halls_conteiner_content_header_text1'>Студии</li>
          </div>

          <h1 className='Halls_conteiner_conteiner_content_title'>Студии в Алматы</h1>

          <ul className='Halls_conteiner_conteiner_content_ul'>
            <li className='Halls_conteiner_conteiner_content_li'>Залы и студии - 417 студий в городе Алматы</li>
            <li className='Halls_conteiner_conteiner_content_li'>Залы и студии в Алматы с актуальными отзывами, контактами и фото</li>
            <li className='Halls_conteiner_conteiner_content_li'>Единый абонемент на занятия в залы и студии Алматы</li>
          </ul>

          <div className='Halls_conteiner_conteiner_content_selectors'>
            <FormControl sx={{ minWidth: 140 }}>
              <InputLabel id="demo-simple-select-label">Горд</InputLabel>
                <Select 
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 240 }}>
            <InputLabel id="demo-simple-select-label">Занятия</InputLabel>
              <Select 
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
          </FormControl>

          </div>

        </div>
        <div className='Main_content_map'>
          <YanMapTwo />
        </div>
      </div>
      
      <div><Footer/></div>
		</div>
		
	);
}
export default Halls;