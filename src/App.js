import './App.css';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Four from './components/Four';
import Five from './components/Five';
import Six from './components/Six';
import Seven from './components/Seven';
import A from './components/A';
import B from './components/B';
import C from './components/C';
import D from './components/D';
import E from './components/E';
import F from './components/F';
import G from './components/G';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef();
  const q = gsap.utils.selector(appRef);
  gsap.defaults({ease:'none', duration:0.5});
  const tl = useRef();
  let lastScrollTop = 0;

window.addEventListener("scroll", function(){ 
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st < lastScrollTop && window.screenY + document.querySelector('.App').getBoundingClientRect().top > -662 && window.matchMedia('(min-width:958.1px').matches) {
    window.location.reload()
   } 
   lastScrollTop = st <= 0 ? 0 : st; 
}, false);

window.onbeforeunload=function(){
  window.scrollTo(0,0)
}

useEffect(()=>{
  var child  = document.querySelector('.owl-dots ')
  var dad = child.parentNode;
  var wrap = document.createElement('div')
  dad.replaceChild(wrap, child)
  wrap.appendChild(child)
  wrap.classList.add('owly')
    
  tl.current = gsap.timeline({ scrollTrigger: {
    trigger: q('.one'),
    toggleActions: 'restart reset reset reset',
    start: 'top top',
    end: '+=4000,',
    pin: true,
    pinSpacing:false,
    anticipatePin: 1,
  }})
  .fromTo(q('.img1'), {y: 120},{y:0})
  .fromTo(q('.img2'), {y:250},{y:0}, 0)
  .fromTo(q('.one'), {opacity:0},{
      opacity:1},0)
  .fromTo(q('.best'), {
    duration: 0.1,
    y:-30, 
    ease: 'bounce',
    force3D: true}, {y:0, },0)
  .fromTo(q('h1'), {y:-5,ease:'power2', duration: 0.1},{y:0},0)
  .fromTo(q('.abso'), {opacity:1,y:-10, ease:'power2',duration:0.1},{y:0},0)

  tl.current = gsap.timeline({scrollTrigger: {
    trigger: q('.two'),
    toggleActions: 'restart reset reset reset',
    start: 'top top',
    end: '+=4000,',
    pin: true,
    pinSpacing:false,
    anticipatePin: 1,
  }})
  .fromTo(q('.two'), {opacity:0},{
    opacity:1})
  .fromTo(q('.best'), {
    duration: 0.1,
    y:-30, 
    ease: 'bounce',
    force3D: true}, {y:0, },0)
  .fromTo(q('h1'), {y:-5,ease:'power2', duration: 0.1},{y:0},0)
  .fromTo(q('.img3'), {y:700}, {y: 230},0)
  .fromTo(q('.img4'),  {y:-700},{y: -100},0)
  .fromTo(q('.abso'), {opacity:1,y:-10, ease:'power2',duration:0.1},{y:0},0)

  tl.current = gsap.timeline({scrollTrigger: {
    trigger: q('.three'),
    toggleActions: 'restart reset reset reset',
    start: 'top top',
    end: '+=4000,',
    pin: true,
    pinSpacing:false,
    anticipatePin: 1,
  }})
  .fromTo(q('.three'), {opacity:0},{
    opacity:1})
  .fromTo(q('.best'), {
    duration: 0.1,
    y:-30, 
    ease: 'bounce',
    force3D: true}, {y:0, },0)
  .fromTo(q('h1'), {y:-5,ease:'power2', duration: 0.1},{y:0},0)
  .fromTo(q('.img5'), {y:-300},{y: -200},0)
  .fromTo(q('.img6'),  {y:300}, {y: 200},0)
  .fromTo(q('.abso'), {opacity:1,y:-10, ease:'power2',duration:0.1},{y:0},0)

  tl.current = gsap.timeline({scrollTrigger: {
    trigger: q('.four'),
    toggleActions: 'restart reset reset reset',
    start: 'top top',
    end: '+=4000,',
    pin: true,
    pinSpacing:false,
    anticipatePin: 1,
  }})
  .fromTo(q('.four'), {opacity:0},{
    opacity:1})
  .fromTo(q('.best'), {
    duration: 0.1,
    y:-30, 
    ease: 'bounce',
    force3D: true}, {y:0, },0)
  .fromTo(q('h1'), {y:-5,ease:'power2', duration: 0.1},{y:0},0)
  .fromTo(q('.img7'), {x:-300, y:0},{x: 0, y:0},0)
  .fromTo(q('.img10'),  {y:-200}, {y: 50},0)
  .fromTo(q('.img9'), {y:-200, x:-20},{y: -68,x:-20},0)
  .fromTo(q('.img11'),  {y:300}, {y: -30},0)
  .fromTo(q('.img8'),  {x:500}, {x: 200},0)
  .fromTo(q('.abso'), {opacity:1,y:-10, ease:'power2',duration:0.1},{y:0},0)

  tl.current = gsap.timeline({scrollTrigger: {
    trigger: q('.five'),
    toggleActions: 'restart reset reset reset',
    start: 'top top',
    end: '+=4000,',
    pin: true,
    pinSpacing:false,
    anticipatePin: 1,
  }})
  .fromTo(q('.five'), {opacity:0},{
    opacity:1})
  .fromTo(q('.best'), {
    duration: 0.1,
    y:-30, 
    ease: 'bounce',
    force3D: true}, {y:0, },0)
  .fromTo(q('h1'), {y:-5,ease:'power2', duration: 0.1},{y:0},0)
  .fromTo(q('.img12'), {y: 0},{y:-50},0)
  .fromTo(q('.img13'),  {y: 50}, {y: 0},0)
  .fromTo(q('.img14'), {y: 0}, {y: 50},0)
  .fromTo(q('.img15'),  {y:100}, {y: 150},0)
  .fromTo(q('.img16'),  {x:0},{x: -20},0)
  .fromTo(q('.abso'), {opacity:1,y:-10, ease:'power2',duration:0.1},{y:0},0)

  tl.current = gsap.timeline({scrollTrigger: {
    trigger: q('.six'),
    toggleActions: 'restart reset reset reset',
    start: 'top top',
    end: '+=4000,',
    pin: true,
    pinSpacing:false,
    anticipatePin: 1,
  }})
  .fromTo(q('.six'), {opacity:0},{
    opacity:1})
  .fromTo(q('.best'), {
    duration: 0.1,
    y:-30, 
    ease: 'bounce',
    force3D: true}, {y:0, },0)
  .fromTo(q('h1'), {y:-5,ease:'power2', duration: 0.1},{y:0},0)
  .fromTo(q('.tab'), {y: 500},{y:-50},0)
  .fromTo(q('.abso'), {opacity:1,y:-10, ease:'power2',duration:0.1},{y:0},0)

  tl.current = gsap.timeline({scrollTrigger: {
    trigger: q('.seven'),
    toggleActions: 'restart reset reset reset',
    start: 'top top',
    end: '+=4000,',
    pin: true,
    pinSpacing:false,
    anticipatePin: 1,
  }})
  .fromTo(q('.seven'), {opacity:0},{
    opacity:1})
  .fromTo(q('.best'), {
    duration: 0.1,
    y:-30, 
    ease: 'bounce',
    force3D: true}, {y:0, },0)
  .fromTo(q('h1'), {y:-5,ease:'power2', duration: 0.1},{y:0},0)
  .fromTo(q('.img19'), {y: 300},{y:300},0)
  .fromTo(q('.img20'),  {y: 300}, {y: 250},0)
  .fromTo(q('.abso'), {opacity:1,y:-10, ease:'power2',duration:0.1},{y:0},0)
  }, [q]);

  return (
    <div ref={appRef} className="App">
      <div style={{width:'100%',height:'100%'}} className='desktop'>
       <One/>
       <Two/>
       <Three/>
       <Four/>
       <Five/>
       <Six/>
       <Seven/>
       <div style={{height:'100vh'}}></div>
      </div>

    <div className='slide'>
      <OwlCarousel
        className='owl-theme'
        items='1'
        autoplay={false}
        mouseDrag
        touchDrag>
        <A/>
        <B/>
        <C/>
        <D/>
        <E/>
        <F/>
        <G/>
      </OwlCarousel>
    </div>

    </div>
  );
}

export default App;
