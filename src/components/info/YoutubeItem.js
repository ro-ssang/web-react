import React from 'react';

function YotubeItem(props) {
  return (
    <div>
      <a href="/">
        <img src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title} />
        <p className="title">{props.video.snippet.title}</p>
      </a>
    </div>
  );
}

export default YotubeItem;
