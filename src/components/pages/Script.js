import React from 'react';
import Header from '../include/Header';
import Contents from '../include/Contents';
import Footer from '../include/Footer';
import WrapTitle from '../include/Wraptitle';

function Script() {
  return (
    <div>
      <Header />
      <Contents>
        <section id="scriptCont">
          <div className="container">
            <WrapTitle text={['script', 'javascript']} />
            <div className="script__cont"></div>
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

export default Script;
