import React from 'react';
import YoutubeItem from '../info/YoutubeItem';

function YoutubeList(props) {
  return (
    <>
      {props.vidoes.map((video) => (
        <YoutubeItem key={video.id.videoId} video={video} />
      ))}
    </>
  );
}

export default YoutubeList;
