import * as React from 'react';

const Review = ({ reviews, loading } ) => {

    if(loading) {
        return (<h2>Загрузка...</h2>)
    }

    return (
        <>
            {
                reviews.map((reviews, i) => (
                    <div className="card mb-3" key={reviews.id}>
                        <div className="row">
                            <div className="col-xxl-4">
                                <img src={reviews.photo} className="reviews__photo" />
                            </div>
                            <div className="col-xxl-8">
                                <div className="card-body">
                                      <h3 className="card-title">{reviews.title}</h3>
                                      <p className="card-text" dangerouslySetInnerHTML={{ __html: reviews.content.slice(0,600) }}/>
                                      <p className="card-text"><small className="text-muted">{reviews.dateReview}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Review;

