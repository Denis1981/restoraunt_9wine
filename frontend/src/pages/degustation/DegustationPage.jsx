import React, {useEffect, useState} from "react";
import { Helmet } from 'react-helmet-async';
import "./index.css";
import {
    photo_menu,
} from "../../assets";
import { API_URL_DEGUSTATION } from '../../api/constant';

const DegustationPage = () => {


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
        <section id="DegustationPage">
            <div className="container">
                <h2>DegustationPage</h2>
            </div>
        </section>
    </>);
}

export default DegustationPage;