import {Link} from 'react-router-dom';
import "./index.css";
import { logo } from ".././././../../assets";
import { footer } from ".././././../../constants";

const Footer = () => {


    return ( <>

              <footer>
                  <section id="footer-block">
                      <div className="container">
                          <div className="row">
                              <div className="col-xxl-3">
                                  <img src={logo} alt="" className="logo" />
                                  <p><Link to="">Политика конфиденциальности</Link></p>
                                  <address>
                                       {footer.map((textFooter) => (
                                            <p>{textFooter.content}</p>
                                       ))}

                                  </address>
                              </div>
                              <div className="col-xxl-3">
                                  колонка 2
                              </div>
                              <div className="col-xxl-3">
                                  колонка 3
                              </div>
                              <div className="col-xxl-3">
                                  колонка 4
                              </div>

                          </div>
                      </div>
                  </section>
              </footer>
        </>)
};

export default Footer;

