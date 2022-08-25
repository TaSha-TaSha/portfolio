// Set timeout for body
setTimeout(function () {
    document.body.style.opacity = '1';
}, 1000)

// ---------Contacts-----------------------
gsap.from('.one', {y: '-10vw', duration: 1.5, delay: 1.5, ease: 'power2.in', opacity: 0})
gsap.from('.two', {y: '-20vw', duration: 1.5, delay: 2.1, ease: 'power2.in', opacity: 0})
gsap.from('.three', {x: '100vw', duration: 1.5, delay: 2.4, ease: 'power2.in', opacity: 0})
gsap.from('.four', {x: '100vw', duration: 1.5, delay: 2.8, ease: 'power2.in', opacity: 0})

// ---------The title-----------------------
gsap.from('.heading-h2', {x: '-100vw', duration: 1, delay: .6, ease: 'power1.in'})

// ---------Navbar--------------------------
gsap.from('.nav-link', {opacity: 0,  duration: .3, delay: .5, stagger: 1, ease: 'power1.in'})

//---------------Scale on the text-----------
// moveOne
const moveOne = document.querySelector('.moveOne');
moveOne.addEventListener('mouseover', () => {
    gsap.to('.moveOne', {scale: 1.1, duration: 1, ease: 'slow'})
})

moveOne.addEventListener('mouseleave', () => {
    gsap.to('.moveOne', {scale: 1, duration: 1, ease: 'slow'})
})

// MoveTwo
const moveTwo = document.querySelector('.moveTwo');
moveTwo.addEventListener('mouseover', () => {
    gsap.to('.moveTwo', {scale: 1.1, duration: 1, ease: 'slow'})
})

moveTwo.addEventListener('mouseleave', () => {
    gsap.to('.moveTwo', {scale: 1, duration: 1, ease: 'slow'})
})

// MoveThree
const moveThree = document.querySelector('.moveThree');
moveThree.addEventListener('mouseover', () => {
    gsap.to('.moveThree', {scale: 1.1, duration: 1, ease: 'slow'})
})

moveThree.addEventListener('mouseleave', () => {
    gsap.to('.moveThree', {scale: 1, duration: 1, ease: 'slow'})
})

// MoveFour
const moveFour = document.querySelector('.moveFour');
moveFour.addEventListener('mouseover', () => {
    gsap.to('.moveFour', {scale: 1.1, duration: 1, ease: 'slow'})
})

moveFour.addEventListener('mouseleave', () => {
    gsap.to('.moveFour', {scale: 1, duration: 1, ease: 'slow'})
})

// --------Reflecting the title Contact Us--
const reflectContact = document.querySelector('.reflectContact');
const reflectForm = document.querySelector('.reflectForm');

reflectForm.addEventListener('mouseover', () => {
    reflectContact.classList.add('reflectRed')
    gsap.to('.reflectContact', {scale: 1.5, durationg: .5, ease: 'slow'})
})

reflectForm.addEventListener('mouseleave', () => {
    reflectContact.classList.remove('reflectRed');
    gsap.to('.reflectContact', {scale: 1, duration: .5, ease: 'slow'})
})

// Scroll To Up
const backToTop = document.querySelector('.backToTop');
backToTop.addEventListener('click', scroll);

function scroll() {
    window.scrollTo(0, -10);
}





