import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import Article from './Article';
import {API_URL_ARTICLES} from '../../api/constant';

function Articles() {
    const [articles, setArticles]=useState([])
    const [currentPage, setCurrentPage]=useState(1)
    const [fetching, setFetching]=useState(true)
    const [loading, setLoading]=useState([false])

    useEffect(()=>{
        setLoading(false)
        if(fetching) {
            setTimeout(() => {
                axios.get(API_URL_ARTICLES + `${currentPage}`)
                .then(res => {
                    setLoading(true);
                    setArticles([...articles, ...res.data.results]);
                    setCurrentPage(prevState => prevState + 1);
                    setLoading(false);
                })
                .finally(() => setFetching(false))
            }, 100)
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, []);

     const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
    };

    if(loading) {
        return (<h2>Загрузка...</h2>)
    }

    return (
      <>
          <Article articles={articles}/>
      </>
  )
}

export default Articles;

