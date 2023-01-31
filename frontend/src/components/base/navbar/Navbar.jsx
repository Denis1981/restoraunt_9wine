import {Link} from 'react-router-dom';
import {CustomLink} from '../CustomLink';

const Navbar = () => {


    return (
            <>
              <nav className="navbar navbar-expand-lg bg-light">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">LOGO</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <CustomLink className="nav-link" to="/">Главная</CustomLink>
                    </li>
                    <li className="nav-item">
                      <CustomLink className="nav-link" to="/about">О нас</CustomLink>
                    </li>
                       <li className="nav-item">
                            <CustomLink className="nav-link" to="/articles">Статьи</CustomLink>
                        </li>
                       <li className="nav-item">
                      <CustomLink className="nav-link" to="/news">Новости</CustomLink>
                    </li>
                       <li className="nav-item">
                      <CustomLink className="nav-link" to="/reviews">Отзывы</CustomLink>
                    </li>
                       <li className="nav-item">
                      <CustomLink className="nav-link" to="/partnership">Партнерская программа</CustomLink>
                    </li>
                    <li className="nav-item">
                      <CustomLink className="nav-link" to="/1">Интернет-магазин</CustomLink>
                    </li>
                    <li className="nav-item">
                        <CustomLink className="nav-link" to="/contacts">Контакты</CustomLink>
                    </li>
                  </ul>

                </div>
              </div>
            </nav>

        </>
)
}

export default Navbar;