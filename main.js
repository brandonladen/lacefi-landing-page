gsap.registerPlugin(ScrollTrigger);

/* ── CURSOR ─────────────────────────────── */
const cur = document.getElementById('cur');
const ring = document.getElementById('cur-ring');
let mx=-100,my=-100,rx=-100,ry=-100;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
(function animC(){
  requestAnimationFrame(animC);
  cur.style.left=mx+'px'; cur.style.top=my+'px';
  rx+=(mx-rx)*.11; ry+=(my-ry)*.11;
  ring.style.left=rx+'px'; ring.style.top=ry+'px';
})();
document.querySelectorAll('a').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.style.width='11px';cur.style.height='11px';ring.style.width='48px';ring.style.height='48px';});
  el.addEventListener('mouseleave',()=>{cur.style.width='7px';cur.style.height='7px';ring.style.width='34px';ring.style.height='34px';});
});

/* ── NAV ────────────────────────────────── */
window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('scrolled',scrollY>50),{passive:true});

/* ── HERO ENTRANCE ──────────────────────── */
gsap.set('.h-eye-inner', { y:'110%' });
gsap.set('#w0,#w1,#w2',  { y:'115%' });
gsap.set('#hsub',        { opacity:0, y:20 });
gsap.set('#hcta',        { opacity:0, y:18 });
gsap.set('#hscroll',     { opacity:0 });

const tl = gsap.timeline({ defaults:{ ease:'power3.out' }, delay:.2 });
tl.to('.h-eye-inner', { y:0, duration:.85 })
  .to('#w0',   { y:0, duration:1.05 }, '-=.3')
  .to('#w1',   { y:0, duration:1.05 }, '-=.72')
  .to('#w2',   { y:0, duration:1.05 }, '-=.72')
  .to('#hsub', { opacity:1, y:0, duration:.85 }, '-=.45')
  .to('#hcta', { opacity:1, y:0, duration:.75 }, '-=.6')
  .to('#hscroll', { opacity:1, duration:.7 }, '-=.4');

/* ── SCROLL REVEALS ─────────────────────── */
gsap.utils.toArray('.reveal').forEach(el=>{
  gsap.to(el,{
    scrollTrigger:{ trigger:el, start:'top 88%', toggleActions:'play none none none' },
    y:0, opacity:1, duration:.85, ease:'power2.out',
  });
});

/* ── WORD ART scatter ───────────────────── */
gsap.from('.wa-word',{
  scrollTrigger:{ trigger:'#wordart', start:'top 75%', toggleActions:'play none none none' },
  opacity:0,
  y:()=>gsap.utils.random(-55,55),
  x:()=>gsap.utils.random(-35,35),
  rotation:()=>gsap.utils.random(-10,10),
  duration:.65,
  stagger:{ amount:.85, from:'random' },
  ease:'power2.out',
});

/* ── PRODUCT image clip-path reveal ──────── */
gsap.to('#pimg',{
  scrollTrigger:{ trigger:'#pimg', start:'top 78%' },
  clipPath:'inset(0 0% 0 0)', duration:1.3, ease:'power3.inOut',
});

/* ── PROCESS stagger ────────────────────── */
gsap.to('.step',{
  scrollTrigger:{ trigger:'.proc-grid', start:'top 78%' },
  y:0, opacity:1, duration:.75, stagger:.18, ease:'power2.out',
});

/* ── COUNTERS ───────────────────────────── */
document.querySelectorAll('.cnt').forEach(el=>{
  const target=+el.dataset.to;
  ScrollTrigger.create({
    trigger:el, start:'top 83%', once:true,
    onEnter(){
      gsap.to({v:0},{
        v:target, duration:1.9, ease:'power2.out',
        onUpdate(){ el.textContent=Math.round(this.targets()[0].v).toLocaleString(); },
      });
    },
  });
});

/* ── BANNER PARALLAX ────────────────────── */
gsap.to('#bimg',{
  scrollTrigger:{ trigger:'.banner', start:'top bottom', end:'bottom top', scrub:true },
  y:'-18%', ease:'none',
});

/* ── GALLERY scroll-driven (desktop) ─────── */
if(window.innerWidth>768){
  const gtrack = document.getElementById('gtrak');
  gsap.to(gtrack,{
    scrollTrigger:{ trigger:'#gallery', start:'top 55%', end:'bottom 0%', scrub:1.5 },
    x:()=>-(gtrack.scrollWidth - window.innerWidth * .85),
    ease:'none',
  });
}

/* ── REVIEWS drag + wheel scroll ───────── */
const ro = document.getElementById('rev-outer');
let isDown=false, startX, scrollLeft;
ro.addEventListener('mousedown',e=>{
  isDown=true; ro.classList.add('dragging');
  startX=e.pageX-ro.offsetLeft; scrollLeft=ro.scrollLeft;
});
ro.addEventListener('mouseleave',()=>{ isDown=false; ro.classList.remove('dragging'); });
ro.addEventListener('mouseup',()=>{ isDown=false; ro.classList.remove('dragging'); });
ro.addEventListener('mousemove',e=>{
  if(!isDown) return; e.preventDefault();
  const x=e.pageX-ro.offsetLeft;
  ro.scrollLeft=scrollLeft-(x-startX)*1.5;
});
ro.addEventListener('wheel',e=>{
  if(Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
  e.preventDefault();
  ro.scrollLeft += e.deltaY * 1.4;
},{ passive:false });

/* ── MANIFESTO parallax ─────────────────── */
(function(){
  var mm=gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)',function(){
    var tw=document.querySelector('#mf-think .mf-word');
    var lw=document.querySelector('#mf-learn .mf-word');
    var pw=document.querySelector('#mf-perform .mf-word');
    if(!tw||!lw||!pw) return;
    var tl=gsap.timeline({ scrollTrigger:{ trigger:'#manifesto', start:'top bottom', end:'bottom top', scrub:1.2 } });
    tl.fromTo(tw,{xPercent:-12},{xPercent:4,ease:'none'},0);
    tl.fromTo(lw,{xPercent:8},{xPercent:-5,ease:'none'},0);
    tl.fromTo(pw,{xPercent:-10},{xPercent:5,ease:'none'},0);
  });
})();

/* ── LETTER HERO ghost rotate + headline reveal ── */
(function(){
  var ghost=document.getElementById('la-ghost');
  var headline=document.getElementById('la-headline');
  var eyebrow=document.getElementById('la-eyebrow');
  var body=document.getElementById('la-body');
  if(!ghost||!headline) return;
  gsap.to(ghost,{ rotation:2.6, ease:'none', scrollTrigger:{ trigger:'#letter-hero', start:'top bottom', end:'bottom top', scrub:1.4 } });
  var wordInners=headline.querySelectorAll('.la-word-inner');
  gsap.set(wordInners,{yPercent:110});
  gsap.to(wordInners,{ yPercent:0, duration:.72, ease:'power3.out', stagger:.11, scrollTrigger:{ trigger:'#letter-hero', start:'top 78%', toggleActions:'play none none none' } });
  gsap.from(eyebrow,{ opacity:0, y:14, duration:.55, ease:'power2.out', scrollTrigger:{ trigger:'#letter-hero', start:'top 80%', toggleActions:'play none none none' } });
  gsap.from(body,{ opacity:0, y:18, duration:.65, ease:'power2.out', delay:.38, scrollTrigger:{ trigger:'#letter-hero', start:'top 78%', toggleActions:'play none none none' } });
})();

/* ── WORD WALL hover slow-down ──────────────── */
(function(){
  var wall=document.getElementById('word-wall');
  if(!wall) return;
  var leaveTimer;
  wall.addEventListener('mouseenter',function(){ clearTimeout(leaveTimer); wall.classList.add('is-hovered'); });
  wall.addEventListener('mouseleave',function(){ leaveTimer=setTimeout(function(){ wall.classList.remove('is-hovered'); },120); });
  wall.addEventListener('touchstart',function(){ wall.classList.toggle('is-hovered'); },{passive:true});
})();

/* ── PHOTO COLLAGE entrance + parallax ──────── */
(function(){
  var photos=[document.getElementById('cp1'),document.getElementById('cp2'),document.getElementById('cp3')];
  var edgeWord=document.getElementById('cw-edge');
  var performWord=document.getElementById('cw-perform');
  if(!photos[0]||!edgeWord) return;
  var isMobile=window.matchMedia('(max-width:768px)').matches;
  gsap.set(photos[0],{y:80,opacity:0});
  gsap.set(photos[1],{y:isMobile?80:80-window.innerWidth*.03,opacity:0});
  gsap.set(photos[2],{y:80,opacity:0});
  gsap.set(edgeWord,{opacity:0});
  gsap.set(performWord,{opacity:0});
  ScrollTrigger.create({ trigger:'#photo-collage', start:'top 78%', once:true,
    onEnter:function(){
      var tl=gsap.timeline();
      tl.to(photos[0],{y:0,opacity:1,duration:1,ease:'expo.out'})
        .to(photos[1],{y:isMobile?0:-window.innerWidth*.03,opacity:1,duration:1,ease:'expo.out'},'<0.15')
        .to(photos[2],{y:0,opacity:1,duration:1,ease:'expo.out'},'<0.15')
        .to(performWord,{opacity:1,duration:.7,ease:'power2.out'},'-=0.25')
        .to(edgeWord,{opacity:1,duration:.9,ease:'power3.out'},'-=0.35');
    }
  });
  ScrollTrigger.create({ trigger:'#photo-collage', start:'top bottom', end:'bottom top', scrub:1.2,
    onUpdate:function(self){ if(!isMobile){ gsap.set(performWord,{y:self.progress*-40}); gsap.set(edgeWord,{y:self.progress*30}); } }
  });
})();

/* ── CONTRAST QUOTE entrance ────────────────── */
(function(){
  var section=document.getElementById('contrast-quote');
  if(!section) return;
  var darkHalf=section.querySelector('.cq-half-dark');
  var lightHalf=section.querySelector('.cq-half-light');
  var darkText=section.querySelector('.cq-text-dark');
  var darkCap=section.querySelector('.cq-caption-dark');
  var isMobile=window.matchMedia('(max-width:768px)').matches;
  if(!isMobile){
    gsap.set(darkHalf,{scaleX:0});
    gsap.set(lightHalf,{scaleX:0});
    gsap.set([darkText,darkCap],{clipPath:'inset(0 100% 0 0)'});
    var tl=gsap.timeline({ scrollTrigger:{ trigger:section, start:'top 72%', toggleActions:'play none none none' } });
    tl.to(darkHalf,{scaleX:1,duration:.72,ease:'power3.out'},0)
      .to(lightHalf,{scaleX:1,duration:.72,ease:'power3.out'},0)
      .to([darkText,darkCap],{clipPath:'inset(0 0% 0 0)',duration:.9,ease:'power2.inOut'},.12);
  } else {
    gsap.set(darkHalf,{scaleY:0});
    gsap.set(lightHalf,{scaleY:0});
    gsap.set(darkText,{clipPath:'inset(0 0 100% 0)'});
    gsap.set(darkCap,{clipPath:'inset(0 0 100% 0)'});
    var tlm=gsap.timeline({ scrollTrigger:{ trigger:section, start:'top 80%', toggleActions:'play none none none' } });
    tlm.to(darkHalf,{scaleY:1,duration:.7,ease:'power3.out',transformOrigin:'center bottom'},0)
       .to(lightHalf,{scaleY:1,duration:.7,ease:'power3.out',transformOrigin:'center top'},0)
       .to([darkText,darkCap],{clipPath:'inset(0% 0 50% 0)',duration:.88,ease:'power2.inOut'},.1);
  }
})();
