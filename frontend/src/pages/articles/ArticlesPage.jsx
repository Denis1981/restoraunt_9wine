import React from 'react';
import { Helmet } from 'react-helmet-async';
import "./index.css";
import Articles from '../../components/articles/Articles';

const ArticlesPage = () => {

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
        <section id="ArticlesPage">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12 text-center">
                        <h1>события и новости <strong>NINEWINES</strong></h1>
                    </div>
                </div>
                <div className="row">
                     <Articles />
                </div>
            </div>
        </section>
    </>);
}

export default ArticlesPage;

