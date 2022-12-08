import React from 'react';

function Footer() {
  // 스킵 메뉴
  document.querySelectorAll('#skip a').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(a.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

  const onClickFooter = (e) => {
    if (e.target.tagName === 'A' && !e.target.classList.contains('not')) {
      e.preventDefault();
      document.querySelector(e.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

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
          <ul onClick={onClickFooter}>
            <li>
              <a href="header">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#coding">My Working</a>
            </li>
            <li>
              <a className="not" href="mailto:kimsh5993@gmail.com" title="Email" rel="noopener noreferrer">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__right">
          <div className="contact">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="#" title="myname">
                  Kim seong hyeon
                </a>
              </li>
              <li>
                <a href="mailto:kimsh5993@gmail.com" title="Email" rel="noopener noreferrer">
                  kimsh5993@gmail.com
                </a>
              </li>
              <li>
                <a href="#" title="myphone">
                  010-3351-0617
                </a>
              </li>
              <li>
                <a href="http://linecomputerart.com/" title="github" target="_blank" rel="noopener noreferrer">
                  라인아트 컴퓨터 학원
                </a>
              </li>
              <li>
                <a href="https://wtss.tistory.com/" title="webs" target="_blank" rel="noopener noreferrer">
                  webstroyboy
                </a>
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
          <a
            href="https://www.figma.com/file/pm3ghQhBqbBolleXCZYmYa/%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0?node-id=0%3A1&t=qAsXDMWl7ieQ9lnl-1"
            title="figma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ir">피그마 아이콘</span>
          </a>
          <a href="https://codepen.io/your-work" title="codepen" target="_blank" rel="noopener noreferrer">
            <span className="ir">코드펜 아이콘</span>
          </a>
          <a
            href="https://www.notion.so/PLANNING-1e1b35450c8e434b8c64ff434c1de74d"
            title="notion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ir">노션 아이콘</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
