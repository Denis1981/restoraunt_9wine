import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import Pagination from './PaginationArticle';
import Article from './Article';


function ArticlesPage() {
    const [articles, setArticles]=useState([])
    const [loading, setLoading]=useState([false])
    const [currentPage, setCurrentPage] = useState(1)
    const [articlesPerPage] = useState(6)

    useEffect(()=>{
        const getArticles = async () => {
            setLoading(true);
            const res = await axios.get('http://127.0.0.1:8000/api/v1/articles/?format=json');
            setArticles(res.data);
            setLoading(false);
        }
        getArticles()
    }, [])

    const lastArticlesIndex = currentPage * articlesPerPage
    const firstArticlesIndex = lastArticlesIndex - articlesPerPage
    const currentArticles = articles.slice(firstArticlesIndex, lastArticlesIndex)
    const paginate = pageNumber => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage (prev => prev + 1)
    const prevPage = () => setCurrentPage (prev => prev - 1)

    return (
      <>
          <Article articles={currentArticles} loading={loading}/>
          <div>
              <nav>
                <div className="row justify-content-start">
                    <div className="col-xx-12">
                        <ul className="pagination">
                            <li className="page-item">
                              <Link className="page-link" to="" aria-label="Previous" onClick={prevPage}>
                                <span aria-hidden="true">&laquo;</span>
                              </Link>
                            </li>
                            <Pagination
                                articlesPerPage={articlesPerPage}
                                totalArticles={articles.length}
                                currentPage={currentPage}
                                paginate={paginate}
                             />
                            <li className="page-item">
                              <Link className="page-link" to="" aria-label="Next" onClick={nextPage}>
                                <span aria-hidden="true">&raquo;</span>
                              </Link>
                            </li>
                        </ul>
                    </div>
                </div>

              </nav>
          </div>
      </>
  )
}

export default ArticlesPage;

// доделать пагинацию