import {Link} from 'react-router-dom';
import "./index.css";
import { logoFooter } from ".././././../../assets";
import { footer } from ".././././../../constants";

const Footer = () => {


    return ( <>

              <footer>
                  <section id="footer-block">
                      <div className="container">
                          <div className="row">
                              <div className="col-xxl-4 text-center">
                                  <img src={logoFooter} alt="" title="" className="logo" />
                                  <address>
                                       {footer.map((textFooter) => (
                                           <p className="p-4" key={textFooter.id}>
                                                <b>
                                                    {textFooter.address}
                                                    <br />
                                                    <a href={`tel: ${textFooter.tel}`}>{textFooter.tel}</a>
                                                </b>
                                            </p>

                                       ))}

                                  </address>
                              </div>
                              <div className="col-xxl-2">
                                  <div className="footer-block__text">
                                      <p><Link to="/">Главная</Link></p>
                                      <p><Link to="/about">О нас</Link></p>
                                      <p><Link to="/menu">Меню ресторана</Link></p>
                                      <p><Link to="/new-year">Новый год</Link></p>
                                  </div>
                              </div>
                              <div className="col-xxl-3">
                                   <div className="footer-block__text">
                                      <p><b>Мероприятия</b></p>
                                      <p><Link to="/degustation">Дегустационные вечера</Link></p>
                                      <p><Link to="/corporates">Корпоративы</Link></p>
                                      <p><Link to="/happy-birthday">День рождения в Nine Wines</Link></p>

                                   </div>

                              </div>
                              <div className="col-xxl-3">
                                   <div className="footer-block__text">
                                      <p><b>Дополнительно</b></p>
                                      <p><Link to="/articles">Блог</Link></p>
                                      <p><Link to="/booking">Бронирование</Link></p>
                                      <p><Link to="/polytics">Политика конфиденциальности</Link></p>
                                   </div>
                              </div>
                          </div>
                      </div>
                  </section>
              </footer>
        </>)
};

export default Footer;

