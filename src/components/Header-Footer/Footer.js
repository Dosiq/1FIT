import './Footer.css'
import apple from "./photos/apple.png"
import playMarket from "./photos/market.png"
import Ali from "./photos/huawei.png"
import insta from "./photos/insta.png"
import facebook from "./photos/facebook.png"
import whatsapp from "./photos/whatsapp.png"
import telega from "./photos/telega.png"



const Footer = () =>{
    return (
            <div className='Footer'>
               <div className='Footer_main'>
                   
                   <div className='Footer_main_questions'>
                        <div className='Footer_main_questions_main'>
                            <div className='Footer_main_questions_texts'>
                                <div className='Footer_main_questions_texts_one'>Получи рекомендации по тренировкам от экспертов</div>
                                <div className='Footer_main_questions_texts_two'>Наши менеджеры с радостью помогут тебе с выбором подходящего абонемента</div>
                            </div>

                            <div className='Footer_main_questions_inputs'>
                                
                                <input className='Footer_main_questions_inputs_name' placeholder='Введи свое имя'></input>
                                <input className='Footer_main_questions_inputs_phone' placeholder='Введи свой телефон '></input>

                                <div className='Footer_main_questions_inputs_buttons'>

                                    <p className='Footer_main_questions_inputs_buttons_personal'>
                                        <span className='Footer_main_questions_inputs_buttons_personal_text1'>Нажимая на кнопку, я соглашаюсь на обработку</span>
                                        <a className='Footer_main_questions_inputs_buttons_personal_text2'>персональных данных</a>
                                    </p>
                                    <div className='Footer_main_questions_inputs_buttons_button'>
                                        <button className='Footer_main_questions_inputs_buttons_button'>Получить рекомендации</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    

                   <div className='Footer_main_data'>  
                        <div className='Footer_main_data_content'>

                            <div className='Footer_main_data_content_address'>
                                <div className='Footer_main_data_content_address_phone'>+7 (705) 777-27-76</div>
                                <div className='Footer_main_data_content_address_address'>Алматы, БЦ 'VERUM',
                                                                                            Мынбаева, 151,
                                                                                            7-этаж
                                </div>
                                <div className='Footer_main_data_content_address_email'>support@1fit.app</div>
                            </div>

                            <div className='Footer_main_data_content_company'>
                                <div className='Footer_main_data_content_company_comp'>Компания «1FIT»</div>
                                <div className='Footer_main_data_content_company_halls'>
                                    <div className='Footer_main_data_content_company_halls_studios'>Залы и студии</div>
                                    <div className='Footer_main_data_content_company_halls_contacts'>Контакты</div>
                                </div>
                            </div>

                            <div className='Footer_main_data_content_cooperation'>
                                <div className='Footer_main_data_content_cooperation_coop'>Сотрудничество</div>
                                <div className='Footer_main_data_content_cooperation_data'>
                                    <div className='Footer_main_data_content_cooperation_data_client'>Корпоративные клиенты</div>
                                    <div className='Footer_main_data_content_cooperation_data_partnner'>Стать нашим партнером</div>
                                </div>
                            </div>

                            <div className='Footer_main_data_content_others'>
                                <div className='Footer_main_data_content_others_other'>Разное</div>
                                <div className='Footer_main_data_content_others_data'>
                                    <div className='Footer_main_data_content_others_data_oferta'>Публичная оферта</div>
                                    <div className='Footer_main_data_content_others_data_use'>Правила пользования</div>
                                    <div className='Footer_main_data_content_others_data_conf'>Политика конфиденциальности</div>
                                    <div className='Footer_main_data_content_others_data_faq'>FAQ</div>
                                </div>
                            </div>

                            <div className='Footer_main_data_content_buttons'>
                                <div className='Main_HowTo_Work_paragrafone_conteiner_lorem_buttons_cont'>

                                    <div className='Main_HowTo_Work_paragrafone_conteiner_button'>
                                        <div>
                                        <img className='Main_HowTo_Work_paragrafone_conteiner_button_apple' src={apple}></img>
                                        </div>
                                        <div className='button_petya_seconf'>
                                        <div className='Main_HowTo_Work_paragrafone_conteiner_button_text1'>Download on the</div>
                                        <div className='Main_HowTo_Work_paragrafone_conteiner_button_text2'>App Store</div>
                                        </div>
                                    </div>
                                    
                                    <div className='Main_HowTo_Work_paragrafone_conteiner_button'>
                                        <div>
                                        <img className='Main_HowTo_Work_paragrafone_conteiner_button_apple' src={playMarket}></img>
                                        </div>
                                        <div className='button_petya_seconf'>
                                        <div className='Main_HowTo_Work_paragrafone_conteiner_button_text1'>GET IT ON</div>
                                        <div className='Main_HowTo_Work_paragrafone_conteiner_button_text2'>Google Play</div>
                                        </div>
                                    </div>

                                    <div className='Main_HowTo_Work_paragrafone_conteiner_button'>
                                        <div>
                                        <img className='Main_HowTo_Work_paragrafone_conteiner_button_apple' src={Ali}></img>
                                        </div>
                                        <div className='button_petya_seconf'>
                                        <div className='Main_HowTo_Work_paragrafone_conteiner_button_text1'>EXPLORE IT ON</div>
                                        <div className='Main_HowTo_Work_paragrafone_conteiner_button_text2'>AppGallery</div>
                                        </div>
                                    </div>
                                 </div>
                            </div>

                        </div>
                    </div>

                    <hr className='Footer_main_line'></hr>

                    <div className='Footer_main_firm'>
                       <div className='Footer_main_firm_text'>Copyright ©1Fit, 2022 Все права защищены.</div>
                       <div className='Footer_main_firm_icons'>
                            <img src={insta} className='Footer_main_firm_icon'></img>
                            <img src={facebook} className='Footer_main_firm_icon'></img>
                            <img src={whatsapp} className='Footer_main_firm_icon'></img>
                            <img src={telega} className='Footer_main_firm_icon'></img>
                       </div>
                    </div>

                </div> 
            </div>
        );
    }
    
    export default Footer;