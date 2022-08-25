const btnRight = document.querySelector('.carouselBtnRight');
const btnLeft = document.querySelector('.carouselBtnLeft');
const carouselCards = document.querySelector('.carouselCards');

const carouselImg = document.querySelectorAll('.carouselImg');
const innerText = document.querySelectorAll('.innerText');

const mouseBtn = document.querySelector('.mouseBtn');
const quizBtn = document.querySelector('.quizBtn');
const quotesBtn = document.querySelector('.quotesBtn');

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
mouseBtn.addEventListener('click', () => {
    setTimeout(function() {
        document.location.assign('/NK-Game/index.html');
    }, 900);
});

quizBtn.addEventListener('click', () => {
    setTimeout(function() {
        document.location.assign('/NK-Quiz/index.html');
    }, 900);
});

quotesBtn.addEventListener('click', () => {
    setTimeout(function() {
        document.location.assign('/NK-Quotes/index.html');
    }, 900);
});