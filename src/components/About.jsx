import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap-trial/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function About() {
  useEffect(() => {
    gsap.utils.toArray('section').forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: false,
      });
    });
  }, []);

  return (
    <section id="about">
      <div className="about__inner">
        <h2>ABOUT</h2>
        <div className="aImg">
          <img src="image/about.png" alt="어바웃페이지 사진입니다." />
        </div>
        <div className="calc">
          <span className="ir">계산기그림</span>
        </div>
        <div className="date">
          <span className="ir">달력그림</span>
        </div>
        <div className="tworec">
          <span className="ir">이중사각형</span>
        </div>
        <div className="rec">
          <span className="ir">사각형</span>
        </div>
        <div className="twocir">
          <span className="ir">이중사각형</span>
        </div>
      </div>
    </section>
  );
}

export default About;
