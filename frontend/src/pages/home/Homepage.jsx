import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import "./index.css";
import { logoMain, headerUnderLogo, vk, tg} from "../../assets";
import {API_URL_CONTACTS} from '../../api/constant';


const Homepage = () => {

    const [contacts, setContacts]=useState([]);

     useEffect(()=>{
        const getContacts = async () => {
            const res = await axios.get(API_URL_CONTACTS);
            setContacts(res.data);
        }
        getContacts()
    }, []);

   return (
       <>

            <section id="main">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 text-center">
                            <img src={logoMain} alt="" title="" className="main__logoMain" />
                            <img src={headerUnderLogo} alt="" title="" className="main__headerUnderLogo" />
                            <Link to="/booking" className="btn main__btn-reserve">забронировать</Link>
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
                            {
                                contacts.map((contacts, i) => (
                            <div className="main__social-block" key={contacts.id}>
                                <ul className="list-unstyled text-center">
                                     <li>
                                         <Link to={contacts.vk} rel="nofollow">
                                             <img src={vk} />
                                         </Link>
                                     </li>
                                     <li>
                                         <Link to={contacts.telegram} rel="nofollow">
                                             <img src={tg} />
                                         </Link>
                                     </li>
                                </ul>
                            </div>
                                 ))
                        }
                        </div>
                    </div>
                </div>
            </section>








    </>
   );
}

export default Homepage;
