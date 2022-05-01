import styles from './Card.css'
import star from './star.png'
import photo from './1photo.png'



const Header = (img) =>{


    return (
        <div className='Card'>

              <div className='Card_main_content'>
                <div className='Card_main_content_photo_conteiner'><img src={photo} className='Card_main_content_photo'></img></div>

                <div className='Card_main_content_description'>
                  <div className='Card_main_content_description_starts'>
                    <img src={star} className='star'></img>
                    <img src={star} className='star'></img>
                    <img src={star} className='star'></img>
                    <img src={star} className='star'></img>
                    <img src={star} className='star'></img>
                  </div>
                  <div className='Card_main_content_description_name'>Namys Sk</div>
                  <div className='Card_main_content_description_types'>Йога, танцы, бокс</div>
                </div>

           </div>
        </div>
    );
}
    
export default Header;