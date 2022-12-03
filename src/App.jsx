import { Header, Main, Footer } from './layouts';
import gsap from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger';

function App() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  // create the smooth scroller FIRST!
  let smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 2,   // seconds it takes to "catch up" to native scroll position
    effects: true // look for data-speed and data-lag attributes on elements and animate accordingly
  });

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
