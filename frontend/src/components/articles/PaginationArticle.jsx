import React from "react";

const paginationArticle = ({articlesPerPage, totalArticles, paginate, currentPage }) => {
    const pageNumbers = []
    for (let i=1; i<=Math.ceil((totalArticles/articlesPerPage)); i++){
        pageNumbers.push(i)
    }
    return (
        <>

        {
               pageNumbers.map(number =>(
                   <li className={"page-item" +
                       (number === currentPage ? " active" : "")
                       }
                        key={"number_" + number}
                   >
                       <button className="page-link" onClick={()=> paginate(number)}>
                           {number}
                       </button>
                   </li>
            ))
            }
        </>
    )
}

export default paginationArticle;

// доделать пагинацию