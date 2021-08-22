let controller;
let slideScene;

function animateSlides(){
    controller = new ScrollMagic.Controller(); 
    const sliders = document.querySelectorAll('.slide');
    const nav = document.querySelector('.nav-header');
    sliders.forEach(slide => {
        const revealImg = slide.querySelector('.reveal-image');
        const img = slide.querySelector('img');
        const reavealText = slide.querySelector('.reveal-text');

        const slideT1 = gsap.timeline({default:{duration: 1, ease: 'power2.inOut'}})
        slideT1.fromTo(revealImg, {x: '0%'}, {x:'100%'});
        slideT1.fromTo(img, {scale:2}, {scale:1}, '-=0.5');
        slideT1.fromTo(reavealText, {x:'0%'}, {x:'100%'}, "-=0.2")
        slideT1.fromTo(nav, {y:'-100%'}, {y:'0%'}, "-=0.5")
    })
}

animateSlides();