const tl = gsap.timeline({
    defaults: { duration: 0.75, ease: "Power1.out" },
  });

tl.fromTo(".meet-logo", {y:-100, opacity:0}, {y:0,opacity:1 })
tl.fromTo(".image-panel-left", {x: -100, opacity: 0}, {x:0, opacity:1},"<")
tl.fromTo(".image-panel-right", {x: 100, opacity:0}, {x:0, opacity:1}, "<")
tl.fromTo(".tab-mobile-img", {y:100, opacity:0}, {y:0, opacity:1}, "<")
tl.fromTo(".hero-text", {opacity:0},{opacity:1},"<")