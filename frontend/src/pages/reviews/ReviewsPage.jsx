import React from 'react';
import "./index.css";
import Reviews from '../../components/reviews/Reviews';

const ReviewsPage = () => {

    return (
        <>
        <section id="ReviewsPage">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12 text-center">
                        <h1>отзывы клиентов <strong>NINEWINES</strong></h1>
                    </div>
                </div>
                <div className="row">
                     <Reviews />
                </div>
            </div>
        </section>
    </>);
}

export default ReviewsPage;


