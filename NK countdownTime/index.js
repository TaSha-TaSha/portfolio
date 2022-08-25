// Setting Timeout for body
setTimeout(function () {
    document.body.style.opacity = '1';
}, 1000)

// Setting the button to play music
const buttton = document.querySelector('.myButton');
const audio = document.querySelector('.myAudio');

// Setting countdown time
function christmasCountdown (){
    const christmasDate = new Date ('December 25, 2022 00:00');
    const nowDate = new Date();
    const difference = christmasDate - nowDate; 
    
    const msInSecond = 1000; 
    const msInMinute = 60 * 1000; 
    const msInHour = 60 * 60 * 1000; 
    const msInDay = 24 * 60 * 60 * 1000; 
    
    const displayDay = Math.floor(difference / msInDay);
    document.querySelector('.days ').textContent = displayDay;
    
    const displayHour = Math.floor((difference%msInDay) / msInHour);
    document.querySelector('.hours').textContent = displayHour;
    
    const displayMinute = Math.floor((difference%msInHour) / msInMinute);
    document.querySelector('.minutes').textContent = displayMinute;

    const displaySecond = Math.floor((difference%msInMinute) / msInSecond);
    document.querySelector('.seconds').textContent = displaySecond;
    
    if (difference <= 0){
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;

        clearInterval(timeId);
        merryChristmas();
        playMusic();
    }
}

let timeId = setInterval(christmasCountdown, 1000);

// Setting the colour for Merry Christmas
function merryChristmas(){
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');

    h1.textContent = 'MERRY CHRISTMAS!!! HO-HO-HO!';
    h1.classList.add('red');
    
    h2.textContent = '2022';
    h2.classList.add('red');
}

// Setting the function to play music
function playMusic() {
    audio.play();
}

// Setting the function onclick to pause / to play 
buttton.addEventListener('click', () => {
    if (audio.paused){
        audio.play();
    }
    else {
        audio.pause();
    }
});

// Animation on load
gsap.from('#header', {scale: 0, duration: 1, delay: 1.5})
gsap.to('h2', {scale: 2, repeat: -1, duration: 3}) 
gsap.from('.starContainer', {scale: 0, duration: 1, delay: 2.2})
gsap.from('.starTwo', {rotate: 720, duration: .7, delay: 3.2})
gsap.from('.starThree', {rotate: -720, duration: .7, delay: 3.3})
gsap.from('h3', {opacity: 0, duration: .8, delay: 4.1})
gsap.from('.hide', {opacity: 0, duration: 1, delay: 5, ease: 'bounce.in'})
gsap.from('.myButton', {scale: 0, duration: 1, delay: 2.1})
gsap.from('.exitBtn', {scale: 0, duration: 1, delay: 2.1})


//https://github.com/VincentGarreau/particles.js/
particlesJS("particles-js", {
    "particles": {
    "number": {
        "value": 600,
        "density": {
        "enable": true,
        "value_area": 800
        }
    },
    "color": {
        "value": "#ffffff"
    },
    "shape": {
        "type": "image",
        "stroke": {
        "width": 3,
        "color": "#fff"
        },
        "polygon": {
        "nb_sides": 5
        },
        "image": {
        "src": "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
        "width": 100,
        "height": 100
        }
    },
    "opacity": {
        "value": 0.7,
        "random": false,
        "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
        }
    },
    "size": {
        "value": 5,
        "random": true,
        "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
        }
    },
    "line_linked": {
        "enable": false,
        "distance": 50,
        "color": "#ffffff",
        "opacity": 0.6,
        "width": 1
    },
    "move": {
        "enable": true,
        "speed": 5,
        "direction": "bottom",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
        "enable": true,
        "rotateX": 300,
        "rotateY": 1200
        }
    }
    },
    "interactivity": {
    "detect_on": "canvas",
    "events": {
        "onhover": {
        "enable": true,
        "mode":  "bubble"
        },
        "onclick": {
        "enable": true,
        "mode": "repulse"
        },
        "resize": true
    },
    "modes": {
        "grab": {
        "distance": 150,
        "line_linked": {
            "opacity": 1
        }
        },
        "bubble": {
        "distance": 200,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
        },
        "repulse": {
        "distance": 200,
        "duration": 0.2
        },
        "push": {
        "particles_nb": 4
        },
        "remove": {
        "particles_nb": 2
        }
    }
    },
    "retina_detect": true
});