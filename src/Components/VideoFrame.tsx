import React, { Component } from 'react';

class VideoFrame extends Component {
    render() {
        return (
            <div className="video-frame">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/ONqVgPKaoYQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        );
    }
}

export default VideoFrame;
