// Setting Timeout for body
setTimeout(function () {
    document.body.style.opacity = '1';
},1000)

const calcBtn = document.querySelector('.calcBtn');
const convBtn = document.querySelector('.convBtn');

// Button links
calcBtn.addEventListener('click', () => {
    setTimeout(function() {
        document.location.assign('/NK-Calculator/index.html');
    })
})

convBtn.addEventListener('click', () => {
    setTimeout(function() {
        document.location.assign('/NK-Converter/index.html');
    })
})

// Animation on load
gsap.from('h1', {y: -100, opacity: 0, duration: .7, delay: .7, ease: 'power1.in'})
gsap.from('.moveOne', {x: -100, opacity: 0, duration: .7, delay: 1.7})
gsap.from('.moveTwo', {x: 100, opacity: 0, duration: .7, delay: 1.7})
gsap.from('.backBtn', {opacity: 0, scale: 0,  duration: 1, delay: 2.7})

