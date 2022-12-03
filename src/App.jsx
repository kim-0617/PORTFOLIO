import { Header, Main, Footer } from './layouts';
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import './assets/js/lenis';
import { useEffect } from 'react';

function App() {
  gsap.registerPlugin(ScrollTrigger);

  // // create the smooth scroller FIRST!
  // let smoother = ScrollSmoother.create({
  //   wrapper: '#smooth-wrapper',
  //   content: '#smooth-content',
  //   smooth: 2,   // seconds it takes to "catch up" to native scroll position
  //   effects: true // look for data-speed and data-lag attributes on elements and animate accordingly
  // });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    })
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'section',
        scrub: true
      }
    })
      .to('section', {
        stagger: 1,
        y: 0,
      })
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
