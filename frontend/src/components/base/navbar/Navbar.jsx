import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import {CustomLink} from '../CustomLink';
import "./index.css";
import { logoFooter} from "../../../assets";

const Navbar = () => {

    const [contacts, setContacts]=useState([]);

     useEffect(()=>{
        const getContacts = async () => {
            const res = await axios.get('http://127.0.0.1:8000/api/v1/contacts/?format=json');
            setContacts(res.data);
        }
        getContacts()
    }, []);

    return (
            <>
              <nav className="navbar navbar-expand-lg fixed-top">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logoFooter} className="logo" alt="" title=""/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                {
                  contacts.map((contacts, i) => (
                <div className="collapse navbar-collapse" id="navbarSupportedContent" key={contacts.id}>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <CustomLink className="nav-link" to="/">Главная</CustomLink>
                        </li>
                        <li className="nav-item">
                          <CustomLink className="nav-link" to="/about">О нас</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="nav-link" to="/menu">Меню ресторана</CustomLink>
                       </li>
                       <li className="nav-item">
                            <CustomLink className="nav-link" to="/articles">Блог</CustomLink>
                       </li>
                         <li className="nav-item">
                            <CustomLink className="nav-link" to="/celebrates">Мероприятия</CustomLink>
                       </li>

                        <li className="nav-item">
                         <CustomLink className="nav-link" to="/reviews">Отзывы</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="nav-link" to="/contacts">Контакты</CustomLink>
                        </li>
                       <li className="nav-item">
                         <CustomLink className="nav-link" to="" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#reserveModal">Зарезервировать</CustomLink>
                        </li>
                    </ul>
                    <p>
                         <Link to={contacts.vk} rel="nofollow">
                            <svg className="t-sociallinks__svg" width="40px" height="40px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50ZM25 34c.406 19.488 10.15 31.2 27.233 31.2h.968V54.05c6.278.625 11.024 5.216 12.93 11.15H75c-2.436-8.87-8.838-13.773-12.836-15.647C66.162 47.242 71.783 41.62 73.126 34h-8.058c-1.749 6.184-6.932 11.805-11.867 12.336V34h-8.057v21.611C40.147 54.362 33.838 48.304 33.556 34H25Z" fill="#000000"/></svg>
                         </Link>
                    </p>
                    <p>
                         <Link to={contacts.telegram} rel="nofollow">
                             <svg className="t-sociallinks__svg" width="40px" height="40px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z" fill="#000000"/></svg>
                         </Link>
                    </p>
                  <button className="btn btn-reserve-menu" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#callModal">заказать звонок</button>
                </div>
                ))
                }
              </div>
            </nav>
        </>
)
}

export default Navbar;