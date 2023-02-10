import React from 'react';
import "./index.css";
import Articles from '../../components/articles/Articles';

const ArticlesPage = () => {

    return (
        <>
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

