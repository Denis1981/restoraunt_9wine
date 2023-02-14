import React from 'react';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import "./index.css";
import {
    bron,
    menus,
    happy,
    degustation,
    gallery,
    nightclub,
} from "../../assets";

const CelebratesPage = () => {

    return (
        <>
        <Helmet>
            { /* Standard metadata tags */ }
            <title>страница</title>
            <meta name='description' content="" />
            <meta name='keywords' content="" />
            { /* End standard metadata tags */ }
            { /* Facebook tags */ }
            <meta property="og:type" content="{type}" />
            <meta property="og:title" content="{title}" />
            <meta property="og:description" content="{description}" />
            { /* End Facebook tags */ }
            { /* Twitter tags */ }
            <meta name="twitter:creator" content="{name}" />}
            <meta name="twitter:card" content="{type}" />
            <meta name="twitter:title" content="{title}" />
            <meta name="twitter:description" content="{description}" />
            { /* End Twitter tags */ }
        </Helmet>
        <section id="CelebratesPage">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12 text-center">
                        <h1>мероприятия NineWines</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-8">
                        <div className="CelebratesPage__itemPage">
                            <img src={bron} className="CelebratesPage__image_1 z-depth-1" alt="" title=""/>
                            <h2 className="">
                                <Link to="" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#reserveModal">
                                    Забронировать стол
                                </Link>
                            </h2>
                        </div>
                    </div>
                    <div className="col-xxl-4">
                        <div className="CelebratesPage__itemPage">
                            <img src={menus} className="CelebratesPage__image_2 z-depth-1" alt="" title=""/>
                            <h2>
                                <Link to="/menu">
                                    Меню
                                </Link>
                            </h2>
                        </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xxl-4">
                        <div className="CelebratesPage__itemPage">
                            <img src={degustation} className="CelebratesPage__image_3 z-depth-1" alt="" title=""/>
                            <h2>
                                <Link to="/wineevening">
                                    Дегустационный винный вечер
                                </Link>
                            </h2>
                        </div>
                    </div>
                    <div className="col-xxl-4">
                        <div className="CelebratesPage__itemPage">
                            <img src={happy} className="CelebratesPage__image_4 z-depth-1" alt="" title=""/>
                            <h2>
                                <Link to="/birthday">
                                    Винный день рождения
                                </Link>
                            </h2>
                        </div>
                    </div>
                    <div className="col-xxl-4">
                        <div className="CelebratesPage__itemPage">
                            <img src={gallery} className="CelebratesPage__image_5 z-depth-1" alt="" title=""/>
                            <h2>
                                <Link to="/gallery">
                                    Галерея
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="CelebratesPage__itemPage">
                            <img src={nightclub} className="CelebratesPage__image_6 z-depth-1" alt="" title=""/>
                            <h2>
                                <Link to="/nightclub">
                                    Ночной клуб
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default CelebratesPage;

