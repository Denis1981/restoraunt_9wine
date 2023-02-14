import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import "./index.css";
import {
    photo_menu,
    wine_menu,
    winebar_menu,
    bar_menu,
    menu_menu,
    line_menu
} from "../../assets";
import { API_URL_MENUS, API_URL_MENUREST } from '../../api/constant';

const MenuPage = () => {

     const [menus, setMenus]=useState([])
     const [loading, setLoading]=useState([false])

     useEffect(()=>{
        const getMenus = async () => {
            setLoading(true);
            const res = await axios.get(API_URL_MENUS);
            console.log(res.data);
            setMenus(res.data);
            setLoading(false);
        }
        getMenus()
    }, [])

    return (
        <>
        <section id="MenuPage">
            <div className="container">
               <div className="row">
                   <div className="col-xxl-12">
                       <img src={photo_menu} className="MenuPage__photo_menu" alt="" title="" />
                   </div>
               </div>
               <div className="row MenuPage__wine_menu">
                   <div className="col-xxl-5 text-center">
                       <img src={line_menu} className="MenuPage__photo_item"/>
                   </div>
                   <div className="col-xxl-2 text-center">
                       <h2>wine</h2>
                   </div>
                   <div className="col-xxl-4 text-center">
                       <img src={line_menu} className="MenuPage__photo_item"/>
                   </div>
                    <div className="col-xxl-12">
                        {
                            menus.map((menus, i) => (
                                ((menus.category === 1) && (menus.tags[0] === 1)) && (
                                    <div className="row" key={menus.id}>
                                            <div className="col-xxl-8"><p>{menus.title}</p></div>
                                            <div className="col-xxl-3"><p>{menus.itemPrice}</p></div>
                                            <div className="col-xxl-1"><p>{menus.itemPriceTotal}</p></div>
                                     </div>
                            )))
                        }
                    </div>
               </div>
                <div className="row MenuPage__winebar_menu">
                   <div className="col-xxl-5 text-center">
                       <img src={line_menu} className="MenuPage__photo_item"/>
                   </div>
                   <div className="col-xxl-2 text-center">
                       <h2>wine & bar</h2>
                   </div>
                   <div className="col-xxl-5 text-center">
                       <img src={line_menu} className="MenuPage__photo_item"/>
                   </div>
               </div>
                <div className="row MenuPage__bar_menu">
                   <div className="col-xxl-5 text-center">
                       <img src={line_menu} className="MenuPage__photo_item"/>
                   </div>
                   <div className="col-xxl-2 text-center">
                       <h2>bar</h2>
                   </div>
                   <div className="col-xxl-5 text-center">
                       <img src={line_menu} className="MenuPage__photo_item"/>
                   </div>
               </div>
                <div className="row MenuPage__menu_menu">
                   <div className="col-xxl-5 text-center">
                       <img src={line_menu} className="MenuPage__photo_item"/>
                   </div>
                   <div className="col-xxl-2 text-center">
                       <h2>menu</h2>
                   </div>
                   <div className="col-xxl-5 text-center">
                       <img src={line_menu} className="MenuPage__photo_item"/>
                   </div>
               </div>
            </div>
        </section>
        </>);
};

export default MenuPage;