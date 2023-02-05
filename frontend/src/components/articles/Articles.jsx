import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import Article from './Article';

function ArticlesPage() {
    const [articles, setArticles]=useState([])
    const [currentPage, setCurrentPage]=useState(1)
    const [fetching, setFetching]=useState(true)
    const [loading, setLoading]=useState([false])

    useEffect(()=>{
        setLoading(false)
        if(fetching) {
            setTimeout(() => {
                axios.get(`http://127.0.0.1:8000/api/v1/articles/?format=json&page_size=3&page=${currentPage}`)
                .then(res => {
                    setLoading(true);
                    setArticles([...articles, ...res.data.results]);
                    //setArticles(res.data.results);
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

export default ArticlesPage;

