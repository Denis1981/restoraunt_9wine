import React, {useEffect, useState} from "react";
import { Helmet } from 'react-helmet-async';
import axios from "axios";
import "./index.css";
import {
    photo_menu,
} from "../../assets";
import { API_URL_BIRTHDAY, API_URL_SEO } from '../../api/constant';

const BirthdayPage = () => {

    const [birth, setBirth]=useState([]);

    useEffect(()=>{
            const getBirth = async () => {
                const res = await axios.get(API_URL_BIRTHDAY);
                setBirth(res.data);
            }
            getBirth()
        }, []);

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
        <section id="BirthdayPage">
            <div className="container">
                <div className="row">
                    <h2>BirthdayPage</h2>
                </div>
            </div>
        </section>

        {
          seoData.map((seoData, i) => (
               (seoData.id === 9)  && (
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

export default BirthdayPage;