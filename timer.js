const btnRight = document.querySelector('.carouselBtnRight');
const btnLeft = document.querySelector('.carouselBtnLeft');
const carouselCards = document.querySelector('.carouselCards');

const carouselImg = document.querySelectorAll('.carouselImg');
const innerText = document.querySelectorAll('.innerText');

const christmasBtn = document.querySelector('.christmasBtn');
const routineBtn = document.querySelector('.routineBtn');
const progressBtn = document.querySelector('.progressBtn');

let angle = 0;
// Animation for the slides
btnRight.addEventListener('click', () => {
    angle -= 120;
    carouselCards.style.transform = `translateZ(-500px) rotateY(${angle}deg)`;
})

btnLeft.addEventListener('click', () => {
    angle += 120;
    carouselCards.style.transform = `translateZ(-500px) rotateY(${angle}deg)`;
})

// Animation on load
gsap.from('.header', {scale: 0, opacity: 0, duration: .7, delay: 1})
gsap.from('.carouselCard:nth-child(1)', {scale: 0, opacity: 0, duration: .7, delay: 1.8})
gsap.from('.carouselCard:nth-child(2)', {scale: 0, opacity: 0, duration: .7, delay: 2.6})
gsap.from('.carouselCard:nth-child(3)', {scale: 0, opacity: 0, duration: .7, delay: 2.6})
gsap.from('.carouselBtnRight', {x: 100, opacity: 0, duration: .8, delay: 3.4, ease: 'bounce'})
gsap.from('.carouselBtnLeft', {x: -100, opacity: 0, duration: .8, delay: 3.4, ease: 'bounce'})
gsap.from('.backBtn', {opacity: 0, scale: 0,  duration: 1, delay: 4.3})

// Button links
christmasBtn.addEventListener('click', () => {
    setTimeout(function() {
        document.location.assign('/NK countdownTime/index.html')
    }, 900);
});

routineBtn.addEventListener('click', () => {
    setTimeout(function() {
        document.location.assign('/NK Routine/index.html')
    }, 900);
});

progressBtn.addEventListener('click', () => {
    setTimeout(function() {
        document.location.assign('#');
    }, 900);
});