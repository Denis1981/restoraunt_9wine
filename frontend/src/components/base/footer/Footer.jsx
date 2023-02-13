import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import "./index.css";
import { logoFooter } from ".././././../../assets";
import {API_URL_CONTACTS} from '.././././../../api/constant';
import FormsReserve from '../../../components/forms/FormsReserve';
import FormsCall from '../../../components/forms/FormsCall';
import FormsReserveDegustation from '../../../components/forms/FormReserveDegustation';
import FormsReserveHappy from '../../../components/forms/FormReserveHappy';

const Footer = () => {

     const [contacts, setContacts]=useState([]);
     useEffect(()=>{
        const getContacts = async () => {
            const res = await axios.get(API_URL_CONTACTS);
            setContacts(res.data);
        }
        getContacts()
    }, []);

    return ( <>
              <footer>
                  <section id="footer-block" className="z-depth-1">
                      <div className="container">
                          <div className="row">
                            {contacts.map((contacts, i) => (
                              <div className="col-xxl-3 text-center" key={contacts.id}>
                                  <Link to="/">
                                      <img src={logoFooter} alt="" title="" className="logo" />
                                  </Link>
                                  <p dangerouslySetInnerHTML={{ __html: contacts.address}} className="address"/>
                                  <p>
                                      <a href={`tel: ${contacts.phone}`}>{contacts.phone}</a>
                                  </p>
                              </div>
                            ))
                            }
                              <div className="col-xxl-2">
                                  <div className="footer-block__text">
                                      <p><Link to="/">Главная</Link></p>
                                      <p><Link to="/about">О нас</Link></p>
                                      <p><Link to="/menu">Меню ресторана</Link></p>
                                      <p><Link to="/reviews">Отзывы</Link></p>
                                      <p><Link to="/articles">Блог</Link></p>
                                  </div>
                              </div>
                              <div className="col-xxl-3">
                                   <div className="footer-block__text">
                                       <p><b>Мероприятия</b></p>
                                       <p><Link to="/wineevening">Винный вечер</Link></p>
                                       <p><Link to="/birthday">Винный день рождения</Link></p>
                                       <p><Link to="/nightclub">Ночной клуб</Link></p>
                                       <p><Link to="/gallery">Галерея</Link></p>
                                   </div>
                              </div>
                              <div className="col-xxl-3">
                                   <div className="footer-block__text">
                                      <p><Link to="/contacts">Контакты</Link></p>
                                      <p><Link to="/polytics">Политика конфиденциальности</Link></p>
                                       <p>
                                          <button type="button" className="btn btn-reserve z-depth-1" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#reserveModal">зарезервировать стол</button>
                                       </p>
                                   </div>
                              </div>
                          </div>
                      </div>
                  </section>
              </footer>

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

            <div className="modal fade" id="callModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header text-center">
                      <h3 className="modal-title fs-5" id="exampleModalLabel">Введите свои данные и мы перезвоним вам в течение 10 минут</h3>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                  </div>
                  <div className="modal-body">
                     <FormsCall />
                  </div>
                </div>
              </div>
            </div>


            <div className="modal fade" id="degustationModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header text-center">
                      <h3 className="modal-title fs-5" id="exampleModalLabel">Введите свои данные и мы перезвоним вам в течение 10 минут</h3>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                  </div>
                  <div className="modal-body">
                     <FormsReserveDegustation />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="happyModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header text-center">
                      <h3 className="modal-title fs-5" id="exampleModalLabel">Введите свои данные и мы перезвоним вам в течение 10 минут</h3>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                  </div>
                  <div className="modal-body">
                     <FormsReserveHappy />
                  </div>
                </div>
              </div>
            </div>








        </>)
};

export default Footer;

