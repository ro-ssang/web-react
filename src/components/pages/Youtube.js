import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import Header from '../include/Header';
import Contents from '../include/Contents';
import Footer from '../include/Footer';
import WrapTitle from '../include/Wraptitle';
import Loader from '../include/Loader';
import YoutubeList from '../info/YoutubeList';
import YoutubeSearch from '../info/YoutubeSerach';

function Youtube() {
  const [videos, setVideos] = useState([]);

  const start = () => {
    gsap.set('.wrap__title h2 strong', { opacity: 0, y: 100 });
    gsap.set('.wrap__title h2 em', { opacity: 0, y: 100 });
    gsap.set('#header', { opacity: 0, top: '-100%' });
    gsap.set('#footer', { opacity: 0, bottom: '-100%' });
    gsap.set('.youtube__cont', { opacity: 0 });

    gsap.to('.wrap__title h2 strong', { duration: 0.4, delay: 1, y: 0, opacity: 1, ease: 'power3.out' });
    gsap.to('.wrap__title h2 em', { duration: 0.4, delay: 1.4, y: 0, opacity: 1, ease: 'power3.out' });
    gsap.to('#header', { duration: 0.4, delay: 1.8, top: 0, opacity: 1, ease: 'power3.out' });
    gsap.to('#footer', { duration: 0.4, delay: 1.8, bottom: 0, opacity: 1, ease: 'power3.out' });
    gsap.to('.youtube__cont', { duration: 0.4, delay: 2, opacity: 1, ease: 'power3.out' });
  };

  const search = (query) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}&type=video&key=AIzaSyA0wLMn28hCflpbDVWPKiLU8MvtEV4_zXo`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setVideos(result.items);
        start();
      });
  };

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=webstoryboy&type=video&key=AIzaSyA0wLMn28hCflpbDVWPKiLU8MvtEV4_zXo`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setVideos(result.items);
        start();
      });
  }, []);

  return (
    <div>
      {!videos.length ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Contents>
            <section id="youtubeCont">
              <div className="container">
                <WrapTitle text={['youtube', 'reference']} />
                <div className="youtube__cont">
                  <YoutubeSearch onSearch={search} />
                  <div className="youtube">
                    <YoutubeList videos={videos} />
                  </div>
                </div>
              </div>
            </section>
          </Contents>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Youtube;
