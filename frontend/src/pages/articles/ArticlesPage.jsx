import React, {useEffect, useState} from "react";
import { Helmet } from 'react-helmet-async';
import axios from "axios";
import "./index.css";
import Articles from '../../components/articles/Articles';
import { API_URL_SEO } from '../../api/constant';


const ArticlesPage = () => {

    const [seoData, setSeoData]=useState([]);

    useEffect(()=>{
            const getSeoData = async () => {
                const res = await axios.get(API_URL_SEO);
                setSeoData(res.data);
            }
            getSeoData()
        }, []);

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

        {
          seoData.map((seoData, i) => (
               (seoData.id === 4)  && (
              <div key={seoData.id}>
                <Helmet>
                        <title>{seoData.title_page}</title>
                        <meta name="description" content={seoData.description} />
                        <meta name="keywords" content={seoData.keywords} />
                        <meta property="og:type" content={seoData.og_type} />
                        <meta property="og:title" content={seoData.og_title} />
                        <meta property="og:description" content={seoData.og_description} />
                        <meta name="twitter:creator" content={seoData.twitter_creator} />
                        <meta name="twitter:card" content={seoData.twitter_card} />
                        <meta name="twitter:title" content={seoData.twitter_title} />
                        <meta name="twitter:description" content={seoData.twitter_description} />
                   </Helmet>
              </div>
           )))
        }
    </>);
}

export default ArticlesPage;

