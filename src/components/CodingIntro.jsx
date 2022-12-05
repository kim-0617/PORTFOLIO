import React, { useEffect } from 'react';
import { Bubble } from '../others';

function CodingIntro() {
  useEffect(() => {
    function bubbles() {
      $.each($(".particletext.bubbles"), function () {
        var bubblecount = ($(this).width() / 50) * 10;
        for (var i = 0; i <= bubblecount; i++) {
          var size = $.rnd(40, 80) / 10;
          $(this).append(
            '<span class="particle" style="top:' +
            $.rnd(20, 80) +
            "%; left:" +
            $.rnd(0, 95) +
            "%;width:" +
            size +
            "px; height:" +
            size +
            "px;animation-delay: " +
            $.rnd(0, 30) / 10 +
            's;"></span>'
          );
        }
      });
    }

    jQuery.rnd = function (m, n) {
      m = parseInt(m);
      n = parseInt(n);
      return Math.floor(Math.random() * (n - m + 1)) + m;
    };
    bubbles();
  }, []);

  return (
    <>
      <article id="CodingIntro">
        <div className="CodingIntro__inner">
          <div className="first">
            <div className="first__first">
              <span className="ir particletext bubbles">중간 쉬어가는 글자</span>
            </div>
            <div className="first__second">
              <span className="ir particletext bubbles">중간 쉬어가는 글자</span>
            </div>
          </div>
          <div className="second">
            <div className="second__first">
              <span className="ir particletext bubbles">중간 쉬어가는 글자</span>
            </div>
            <div className="second__second">
              <span className="ir particletext bubbles">중간 쉬어가는 글자</span>
            </div>
          </div>
          <div className="third">
            <div className="third__first">
              <span className="ir particletext bubbles">중간 쉬어가는 글자</span>
            </div>
            <div className="third__second">
              <span className="ir particletext bubbles">중간 쉬어가는 글자</span>
            </div>
          </div>
        </div>
        <div className="bubble">
          <span className="ir">비눗방울</span>
        </div>
      </article>
    </>
  );
}

export default CodingIntro;
