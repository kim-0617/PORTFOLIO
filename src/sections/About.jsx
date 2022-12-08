import { AboutIntro, Focus, Skill } from '../components';
import { useRef, useState, useEffect } from 'react';

function About() {
  const aboutRef = useRef(null);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 923 - window.innerHeight / 3) {
      setScroll(true);
    }

    if (window.scrollY >= window.innerHeight * 2.5) {
      document.querySelector('#intro').style.background = '#f64c0e';
    } else {
      document.querySelector('#intro').style.background = '#0000e9';
    }
  };

  return (
    <section id="about" ref={aboutRef}>
      <AboutIntro scroll={scroll} />
      <Focus />
      <Skill />
    </section>
  );
}

export default About;
