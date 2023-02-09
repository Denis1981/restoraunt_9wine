import React from "react";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import "./index.css";
import FormsReserve from '../../components/forms/FormsReserve';
import {API_URL_CONTACTS} from '../../api/constant';


const ReservePage = () => {

    const [contacts, setContacts]=useState([]);

     useEffect(()=>{
        const getContacts = async () => {
            const res = await axios.get(API_URL_CONTACTS);
            setContacts(res.data);
        }
        getContacts()
    }, []);

    return (<>

    <section id="reservePage">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12 text-center">
                        <h2>зарезервировать стол</h2>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-xxl-7 text-center">
                        {
                            contacts.map((contacts, i) => (
                               <div key={contacts.id}>
                                    <p><b>часы работы</b></p>
                                   <ul className="reservePage__time list-unstyled">
                                        <li>
                                            {contacts.time1}
                                        </li>
                                        <li>
                                            {contacts.time2}
                                        </li>
                                        <li>
                                            {contacts.time3}
                                        </li>
                                    </ul>
                                    <p><b>информация и резерв:</b></p>
                                    <p><a href={`tel: ${contacts.phone}`}>{contacts.phone}</a></p>
                                    <p><a href="{`mailto: ${contacts.mail}`}">{contacts.mail}</a></p>
                                    <p dangerouslySetInnerHTML={{ __html: contacts.content}}/>
                                    <div className="reservePage__social-block">
                                        <ul className="list-unstyled">
                                             <li>
                                                 <Link to={contacts.vk} rel="nofollow">
                                                    <svg className="t-sociallinks__svg" width="40px" height="40px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50ZM25 34c.406 19.488 10.15 31.2 27.233 31.2h.968V54.05c6.278.625 11.024 5.216 12.93 11.15H75c-2.436-8.87-8.838-13.773-12.836-15.647C66.162 47.242 71.783 41.62 73.126 34h-8.058c-1.749 6.184-6.932 11.805-11.867 12.336V34h-8.057v21.611C40.147 54.362 33.838 48.304 33.556 34H25Z" fill="#000000"/></svg>
                                                </Link>
                                             </li>
                                             <li>
                                                 <Link to={contacts.telegram} rel="nofollow">
                                                     <svg className="t-sociallinks__svg" width="40px" height="40px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z" fill="#000000"/></svg>
                                                </Link>
                                             </li>
                                       </ul>
                                 </div>
                               </div>
                            ))
                        }
                    </div>
                     <div className="col-xxl-7">
                         <div className="formReserve">
                             <h3>Для того, чтобы забронировать стол в нашем ресторане, заполните форму бронирования</h3>
                             <FormsReserve />
                         </div>
                     </div>
                </div>
            </div>
        </section>
    </>);
}

export default ReservePage;