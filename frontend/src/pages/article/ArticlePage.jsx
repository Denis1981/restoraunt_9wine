import React from "react";
import {useParams, Link, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import { Helmet } from 'react-helmet-async';
import axios from "axios";
import {API_URL_ARTICLE} from '../../api/constant';
import "./index.css";

const ArticlePage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const[article, setArticle]=useState(null);
    const goBack = () => navigate(-1);
    const[loading, setLoading]=useState([false])

    useEffect(() => {
        const getArticle = async () => {
             setLoading(true);
             const res = await axios.get(API_URL_ARTICLE + `${id}` + '/?format=json');
             setArticle(res.data);
             setLoading(false);
         }
        getArticle()
    }, [])

    if(loading) {
        return (<h2>Загрузка...</h2>)
    }

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
        <section id="ArticlePage">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <h1>{article.title}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-12">
                        {article && (
                        <>
                            <p className="ArticlePage__text-content-article" dangerouslySetInnerHTML={{ __html: article.content }} />
                            <button className="btn btn_ArticlePage__goback" onClick={goBack}>назад</button>
                        </>
                    )}
                    </div>
                </div>
            </div>
        </section>
    </>);
};

export default ArticlePage;

