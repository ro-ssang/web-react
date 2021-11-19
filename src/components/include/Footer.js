import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer id="footer">
      <div>
        <h4>email</h4>
        <p>
          <a href="mailto:fashionfish@naver.com">fashionfish@naver.com</a>
        </p>
      </div>
      <div>
        <h4>Kakao</h4>
        <p>
          <a href="/">@rossang</a>
        </p>
      </div>
      <div>
        <h4>social</h4>
        <ul>
          <li>
            <Link to="/youtube">Youtube</Link>
          </li>
          <li>
            <a href="http://fashionfish.dothome.co.kr/port2/">Portfolio</a>
          </li>
          <li>
            <a href="https://github.com/ro-ssang">Github</a>
          </li>
          <li>
            <a href="https://app.gitbook.com/s/0kCK0KZwIIpCVLGYNxR2/">Gitbook</a>
          </li>
          <li>
            <a href="https://separated-friday-d46.notion.site/DEVELOPMENT-1ed675efe7a743d19267d76ae7d50f07">Notion</a>
          </li>
          <li>
            <Link to="/reference">Reference</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
