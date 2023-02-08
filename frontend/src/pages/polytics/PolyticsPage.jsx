import React, {useEffect, useState} from "react";
import axios from "axios";
import "./index.css";
import {API_URL_POLYTICS} from '../../api/constant';

const Polyticspage = () => {

    const [polytics, setPolytics]=useState([]);

     useEffect(()=>{
        const getPolytics = async () => {
            const res = await axios.get(API_URL_POLYTICS);
            setPolytics(res.data);
        }
        getPolytics()
    }, []);

    return (<>

    <section id="polytics">
        <div className="container">
            <div className="row">
                <div className="col-xxl-8">
                    <h2>Политика конфиденциальности в отношении обработки персональных данных</h2>
                </div>
            </div>
            <div className="row">
                 {
                 polytics.map((polytics, i) => (
                <div className="col-xxl-12" key={polytics.id}>
                    <p dangerouslySetInnerHTML={{ __html: polytics.content}}/>
                </div>
                ))
                 }
            </div>
        </div>
    </section>

    </>);
}

export default Polyticspage;