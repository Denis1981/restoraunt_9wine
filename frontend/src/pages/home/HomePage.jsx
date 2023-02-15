import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import axios from "axios";
import "./index.css";
import { logoMain, headerUnderLogo, vk, tg} from "../../assets";
import { API_URL_CONTACTS, API_URL_SEO } from '../../api/constant';
import FormsReserve from '../../components/forms/FormsReserve';

const HomePage = () => {

    const [contacts, setContacts]=useState([]);
    const [seoData, setSeoData]=useState([]);

     useEffect(()=>{
        const getContacts = async () => {
            const res = await axios.get(API_URL_CONTACTS);
            setContacts(res.data);
        }
        getContacts()
    }, []);

     useEffect(()=>{
        const getSeoData = async () => {
            const res = await axios.get(API_URL_SEO);
            setSeoData(res.data);
            console.log(res.data)
        }
        getSeoData()
    }, []);

   return (
      <>
        <section id="HomePage">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12 text-center">
                        <img src={logoMain} alt="" title="" className="HomePage__logoMain" />
                        <img src={headerUnderLogo} alt="" title="" className="HomePage__headerUnderLogo" />
                        <Link to="" className="btn HomePage__btn-reserve" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#reserveModal">зарезервировать</Link>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xxl-12">
                        <div className="HomePage__menu-block">
                            <ul className="list-unstyled text-center">
                                <li><Link to="/menu">Меню</Link></li>
                                <li><Link to="/about">О нас</Link></li>
                                <li><Link to="/celebrates">Мероприятия</Link></li>
                                <li><Link to="/interior">Интерьер</Link></li>
                                <li><Link to="/articles">Блог</Link></li>
                                <li><Link to="/contacts">Контакты</Link></li>
                            </ul>
                        </div>
                        {
                            contacts.map((contacts, i) => (
                        <div className="HomePage__social-block" key={contacts.id}>
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

            {
              seoData.map((seoData, i) => (
                  <div key={seoData.id}>
                    <Helmet>
                            <title>{seoData.title_page}</title>
                            <meta name="description" content={seoData.description} />
                            <meta name="keywords" content={seoData.keywords} />
                            <meta property="og:type" content={seoData.og_type} />
                            <meta property="og:title" content={seoData.og_title} />
                            <meta property="og:description" content={seoData.og_description} />
                            <meta name="twitter:creator" content={seoData.twitter_creator} />
                            <meta name="twitter:card" content={seoData.twitter_card} />
                            <meta name="twitter:title" content={seoData.twitter_title} />
                            <meta name="twitter:description" content={seoData.twitter_description} />
                       </Helmet>
                  </div>
               )
            )}

            <div className="modal fade" id="reserveModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header text-center">
                      <h3 className="modal-title fs-5" id="exampleModalLabel">Для того, чтобы забронировать стол в нашем ресторане, заполните форму бронирования</h3>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                  </div>
                  <div className="modal-body">
                         <FormsReserve />
                  </div>
                </div>
              </div>
            </div>
    </>
   );
};

export default HomePage;
