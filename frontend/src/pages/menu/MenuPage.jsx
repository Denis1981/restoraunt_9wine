import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
import { API_URL_MENUREST, API_URL_SEO} from '../../api/constant';

const MenuPage = () => {

     const [menus, setMenus]=useState([]);
     const [loading, setLoading]=useState([false]);
     const [seoData, setSeoData]=useState([]);

     useEffect(()=>{
        const getMenus = async () => {
            setLoading(true);
            const res = await axios.get(API_URL_MENUREST);
            setMenus(res.data);
            setLoading(false);
        }
        getMenus()
    }, [])

    useEffect(()=>{
        const getSeoData = async () => {
            const res = await axios.get(API_URL_SEO);
            setSeoData(res.data);
        }
        getSeoData()
    }, []);

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
                                <div className="col-xxl-12" key={menus.id}>
                                    <p dangerouslySetInnerHTML={{ __html: menus.wine }}/>
                                </div>
                            ))
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
                    <div className="col-xxl-12">
                        {
                            menus.map((menus, i) => (
                                <div className="col-xxl-12" key={menus.id}>
                                    <p dangerouslySetInnerHTML={{ __html: menus.wine_bar }}/>
                                </div>
                            ))
                        }
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
                    <div className="col-xxl-12">
                        {
                            menus.map((menus, i) => (
                                <div className="col-xxl-12" key={menus.id}>
                                    <p dangerouslySetInnerHTML={{ __html: menus.bar }}/>
                                </div>
                            ))
                        }
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
                    <div className="col-xxl-12">
                        {
                            menus.map((menus, i) => (
                                <div className="col-xxl-12" key={menus.id}>
                                    <p dangerouslySetInnerHTML={{ __html: menus.menu }}/>
                                </div>
                            ))
                        }
                    </div>
               </div>
            </div>
        </section>

        {
          seoData.map((seoData, i) => (
               (seoData.id === 3)  && (
              <div key={seoData.id}>
                <Helmet>
                        <title>{seoData.title_page}</title>
                        <meta name="description" content={seoData.description} />
                        <meta name="keywords" content={seoData.keywords} />
                        <meta property="og:type" content={seoData.og_type} />
                        <meta property="og:title" content={seoData.og_title} />
                        <meta property="og:description" content={seoData.og_description} />
                        <meta name="twitter:creator" content={seoData.twitter_creator} />
                        <meta name="twitter:card" content={seoData.twitter_card} />
                        <meta name="twitter:title" content={seoData.twitter_title} />
                        <meta name="twitter:description" content={seoData.twitter_description} />
                   </Helmet>
              </div>
           )))
        }
        </>);
};

export default MenuPage;