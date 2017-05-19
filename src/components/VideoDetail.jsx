import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) { //to handle null prop, when this component attempts to render before the information is available
    return (
        <div> loading videos... </div>
      )
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`; //string interpolation, using backticks from the left of '1' key

  return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
};

export default VideoDetail;
