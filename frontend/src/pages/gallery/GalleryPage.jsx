import React from 'react';
import {Link} from 'react-router-dom';
import "./index.css";
import VideoGallery from '../../components/gallery/VideoGallery';



const GalleryPage = () => {


    return (<>


    <section id="GalleryPage">
        <div className="container">
            <div className="row">
                <div className="col-xxl-12 text-center">
                     <h1>Почувствуйте атмосферу <strong>9wines</strong></h1>
                </div>
            </div>
            <div className="row">
                <VideoGallery />
            </div>

        </div>
    </section>



    </>);
}

export default GalleryPage;