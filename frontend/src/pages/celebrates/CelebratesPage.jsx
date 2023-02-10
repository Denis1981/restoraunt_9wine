import React from 'react';
import "./index.css";
import Celebrates from '../../components/celebrates/Celebrates';

const CelebratesPage = () => {

    return (
        <>
        <section id="celebrates">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12 text-center">
                        <h1>мероприятия NineWines</h1>
                    </div>
                </div>
                <div className="row">
                     <Celebrates />
                </div>
            </div>
        </section>
    </>);
}

export default CelebratesPage;

