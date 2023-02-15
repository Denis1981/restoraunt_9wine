import React, {useEffect, useState} from "react";
import {useParams, Link, useNavigate} from "react-router-dom";
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

        {article && (
              <div key={article.id}>
                <Helmet>
                        <title>{article.title_page}</title>
                        <meta name="description" content={article.description} />
                        <meta name="keywords" content={article.keywords} />
                        <meta property="og:type" content={article.og_type} />
                        <meta property="og:title" content={article.og_title} />
                        <meta property="og:description" content={article.og_description} />
                        <meta name="twitter:creator" content={article.twitter_creator} />
                        <meta name="twitter:card" content={article.twitter_card} />
                        <meta name="twitter:title" content={article.twitter_title} />
                        <meta name="twitter:description" content={article.twitter_description} />
                   </Helmet>
              </div>
           )
        }
    </>);
};

export default ArticlePage;

