import React from 'react';
import {Link} from 'react-router-dom';
import "./index.css";
import {
    bron,
    menus,
    happy,
    degustation,
    gallery,
} from "../../assets";

const CelebratesPage = () => {

    return (
        <>
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
                            <img src={bron} className="CelebratesPage__image_1" alt="" title=""/>
                            <h2 className="">
                                <Link to="" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#reserveModal">
                                    Забронировать стол
                                </Link>
                            </h2>
                        </div>
                    </div>
                    <div className="col-xxl-4">
                        <div className="CelebratesPage__itemPage">
                            <img src={menus} className="CelebratesPage__image_2" alt="" title=""/>
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
                            <img src={degustation} className="CelebratesPage__image_3" alt="" title=""/>
                            <h2>
                                <Link to="/degustation">
                                    Дегустационный винный вечер
                                </Link>
                            </h2>
                        </div>
                    </div>
                    <div className="col-xxl-4">
                        <div className="CelebratesPage__itemPage">
                            <img src={happy} className="CelebratesPage__image_4" alt="" title=""/>
                            <h2>
                                <Link to="/wineday">
                                    Винный день рождения
                                </Link>
                            </h2>
                        </div>
                    </div>
                    <div className="col-xxl-4">
                        <div className="CelebratesPage__itemPage">
                            <img src={gallery} className="CelebratesPage__image_5" alt="" title=""/>
                            <h2>
                                <Link to="/gallery">
                                    Галерея
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

