import React from 'react';

function Footer() {
  return (
    <footer id="footer">
      <div className="footer__inner">
        <h2>
          FRONTEND
          <span>
            PORT <br /> FOLIO
          </span>
        </h2>

        <div className="navigation">
          <h3>Navigation</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">My Working</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer__right">
          <div className="contact">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="#">Kim seong hyeon</a>
              </li>
              <li>
                <a href="#">kimsh5993@gmail.com</a>
              </li>
              <li>
                <a href="#">010-1234-5678</a>
              </li>
              <li>
                <a href="#">라인아트 컴퓨터 학원</a>
              </li>
              <li>
                <a href="#">webstroyboy</a>
              </li>
            </ul>
          </div>

          <div className="workThrough">
            <h3>Work Through</h3>
            <ul>
              <li>
                <a href="#">html</a>
              </li>
              <li>
                <a href="#">css</a>
              </li>
              <li>
                <a href="#">javascript</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__icon">
          <a href="https://github.com/kim-0617" title="github" target="_blank" rel="noopener noreferrer">
            <span className="ir">깃허브 아이콘</span>
          </a>
          <a href="https://kim0617.tistory.com/" title="blog" target="_blank" rel="noopener noreferrer">
            <span className="ir">블로그 아이콘</span>
          </a>
          <a href="https://codepen.io/your-work" title="codepen" target="_blank" rel="noopener noreferrer">
            <span className="ir">코드펜 아이콘</span>
          </a>
          <a
            href="https://www.figma.com/file/pm3ghQhBqbBolleXCZYmYa/%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0?node-id=0%3A1&t=qAsXDMWl7ieQ9lnl-1"
            title="figma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ir">피그마 아이콘</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
