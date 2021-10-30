import React, { useEffect, useState } from 'react';
import Header from '../include/Header';
import Contents from '../include/Contents';
import Footer from '../include/Footer';
import WrapTitle from '../include/Wraptitle';
import YoutubeList from '../info/YoutubeList';

function Youtube() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=webstoryboy&type=video&key=AIzaSyAQO4--_qVneHIQKraWOxjPtRnRjHQ4kJs',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <div>
      <Header />
      <Contents>
        <section id="youtubeCont">
          <div className="container">
            <WrapTitle text={['yotube', 'reference']} />
            <div className="youtube__cont">
              <div className="youtube">
                <YoutubeList vidoes={videos} />
              </div>
            </div>
          </div>
        </section>

        <section id="contactInfo">
          <div className="contact__info">
            <div>
              <p>Let’s create something new</p>
              <h3>
                LET`S Get IN
                <br />
                TOUCH
              </h3>
              <a href="contact.html" className="contact">
                Contact Me
              </a>
            </div>
          </div>
        </section>
      </Contents>
      <Footer />
    </div>
  );
}

export default Youtube;
