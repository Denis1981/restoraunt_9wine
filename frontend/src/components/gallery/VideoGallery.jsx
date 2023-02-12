import React from 'react';

const VideoGallery = () => {

    return (
        <>
            <div className="col-xxl-6 text-center">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/aZMQhEzSTRQ" frameborder="0" allowfullscreen/>
                </div>
            </div>
            <div className="col-xxl-6 text-center">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/Np0RpiFH6hs" frameborder="0" allowfullscreen/>
                </div>
            </div>

        </>);
}

export default VideoGallery;