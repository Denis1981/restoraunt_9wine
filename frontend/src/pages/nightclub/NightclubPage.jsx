import React, {useEffect, useState} from "react";
import { API_URL_SEO } from '../../api/constant';
import { Helmet } from 'react-helmet-async';
import axios from "axios";
import "./index.css";
import {
    night_image1,
    night_image2,
    night_image3,
    night_image4,
    night_image5
} from "../../assets";


const NightclubPage = () => {

    const [seoData, setSeoData]=useState([]);

    useEffect(()=>{
            const getSeoData = async () => {
                const res = await axios.get(API_URL_SEO);
                setSeoData(res.data);
            }
            getSeoData()
        }, []);

    return (
        <>
        <section id="NightclubScreen1">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12 text-center">
                        <h1>Бар на Садовой</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-12 text-center">
                        <p>каждую пятницу и субботу</p>
                        <button type="button" className="btn btn-reserve z-depth-1" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#reserveModal">зарезервировать стол</button>
                    </div>
                </div>
            </div>
        </section>

        <section id="NightclubScreen2">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6">
                        <h2><strong>9WINES</strong> — бар-ресторан на каждый день с великолепной, ни на что не похожей винной картой.</h2>
                        <div className="NightclubScreen2__block1">
                            <p>Винотека, собранная по винодельням мира.</p>
                            <p>Адекватные цены за достойное по-настоящему вино, доставленное с тщательным расчетом логистики и без необходимости переплачивать за бренды.</p>
                        </div>
                    </div>
                    <div className="col-xxl-6">
                        <img src={ night_image1 } className="NightclubScreen2__image1 z-depth-1" alt="" title=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-6">
                        <img src={ night_image2 } className="NightclubScreen2__image2 z-depth-1" alt="" title=""/>
                    </div>
                    <div className="col-xxl-6">
                        <div className="NightclubScreen2__block2">
                            <p>Наша кухня лаконична, великолепно сочетается с винами и утоляет не только гастрономические ожидания, но и аппетит.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-4 text-center">
                        <img src={ night_image3 } className="NightclubScreen2__image3 z-depth-1" alt="" title=""/>
                    </div>
                    <div className="col-xxl-4 text-center">
                        <img src={ night_image4 } className="NightclubScreen2__image4 z-depth-1" alt="" title=""/>
                    </div>
                    <div className="col-xxl-4 text-center">
                        <img src={ night_image5 } className="NightclubScreen2__image5 z-depth-1" alt="" title=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-12 text-center">
                        <p>Каждую пятницу и субботу наш бар-ресторан превращается в изысканное и поистине тусовочное место, где вы с друзьями с наслаждением проведете ночь до утра, не заметив рассвета, под зажигательную стильную музыку.</p>
                        <button type="button" className="btn btn-reserve z-depth-1" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#reserveModal">зарезервировать стол</button>
                    </div>
                </div>
            </div>
        </section>

        {
          seoData.map((seoData, i) => (
               (seoData.id === 10)  && (
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
}

export default NightclubPage;