import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import "./index.css";
import { photo_menu1
} from "../../assets";

const Menupage = () => {

     const [menus, setMenus]=useState([])
     const [loading, setLoading]=useState([false])

     useEffect(()=>{
        const getArticles = async () => {
            setLoading(true);
            const res = await axios.get('http://127.0.0.1:8000/api/v1/menus/?format=json');
            setMenus(res.data);
            setLoading(false);
        }
        getArticles()
    }, [])
    



    return (
        <>
        <section id="menu">
            <div className="container">
               <div className="row">
                   <div className="col-xxl-12">
                       <img src={photo_menu1} className="menu__photo_menu1" alt="" title="" />
                   </div>
               </div>
               <div className="row">
                    <div className="col-xxl-12">
                        {
                            menus.map((menus, i) => (
                                <div className="" key={menus.id}>
                                    <p>{menus.title}</p>
                                    <p>{menus.itemPrice}</p>
                                    <p>{menus.itemPriceTotal}</p>



                                 </div>
                            ))
                        }
                    </div>
               </div>
            </div>
        </section>
        </>);
}

export default Menupage;