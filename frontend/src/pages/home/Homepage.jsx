import React from "react";
import {Link} from 'react-router-dom';
import "./index.css";
import { logoMain, headerUnderLogo, vk, tg} from "../../assets";
import Header from '../../components/base/header/Header';


const Homepage = () => {


   return (
       <>
            <Header/>
            <section id="main">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 text-center">
                            <img src={logoMain} alt="" title="" className="main__logoMain" />
                            <img src={headerUnderLogo} alt="" title="" className="main__headerUnderLogo" />
                            <button className="btn main__btn-reserve">забронировать</button>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xxl-12">
                            <div className="main__menu-block">
                                <ul className="list-unstyled text-center">
                                    <li><Link to="/menu">Меню</Link></li>
                                    <li><Link to="/about">О нас</Link></li>
                                    <li><Link to="/events">Мероприятия</Link></li>
                                    <li><Link to="/interior">Интерьер</Link></li>
                                    <li><Link to="/articles">Блог</Link></li>
                                    <li><Link to="/contacts">Контакты</Link></li>
                                </ul>
                            </div>
                            <div className="main__social-block">
                                <ul className="list-unstyled text-center">
                                     <li><Link to="https://vk.com/ninewines"><img src={vk} /></Link></li>
                                     <li><Link to="https://t.me/ninewines"><img src={tg} /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>








    </>
   );
}

export default Homepage;
