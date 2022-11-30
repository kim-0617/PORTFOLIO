import { Header, Main, Footer } from './layouts';
import { gsap } from 'gsap-trial';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { useEffect } from 'react';

// smooth scroll 설정

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

function App() {
  useEffect(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.6,
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
