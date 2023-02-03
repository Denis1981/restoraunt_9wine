import React from "react";
import {useParams, Link, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import "./index.css";

const Article = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const[article, setArticle]=useState(null);
    const goBack = () => navigate(-1);
    const[loading, setLoading]=useState([false])

    useEffect(() => {
        const getArticle = async () => {
             setLoading(true);
             const res = await axios.get(`http://127.0.0.1:8000/api/v1/articles/${id}/?format=json`);
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
        <section id="article">

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
                            <img src={article.photo} className="article__image-top-article" alt={article.category} title={article.title}/>

                            <p className="article__text-content-article" dangerouslySetInnerHTML={{ __html: article.content }} />
                            <button className="btn btn_article__goback" onClick={goBack}>назад</button>
                        </>
                    )}
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Article;

