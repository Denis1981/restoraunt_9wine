import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import "./index.css";
import { logoFooter } from ".././././../../assets";
import { footer } from ".././././../../constants";
import {API_URL_CONTACTS} from '.././././../../api/constant';

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
                  <section id="footer-block">
                      <div className="container">
                          <div className="row">
                            {contacts.map((contacts, i) => (
                              <div className="col-xxl-4 text-center" key={contacts.id}>
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
                                  </div>
                              </div>
                              <div className="col-xxl-3">
                                   <div className="footer-block__text">
                                      <p><Link to="/celebrates">Мероприятия</Link></p>
                                      <p><Link to="/reviews">Отзывы</Link></p>
                                      <p><Link to="/articles">Блог</Link></p>
                                   </div>
                              </div>
                              <div className="col-xxl-3 text-center">
                                   <div className="footer-block__text">
                                      <p><Link to="/polytics">Политика конфиденциальности</Link></p>
                                       <p>
                                           <Link to="/booking">
                                                <button type="button" className="btn btn-more" data-bs-dismiss="modal">зарезервировать стол</button>
                                            </Link>
                                       </p>
                                   </div>
                              </div>
                          </div>
                      </div>
                  </section>
              </footer>
        </>)
};

export default Footer;

