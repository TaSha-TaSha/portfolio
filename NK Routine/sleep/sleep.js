const audio = document.querySelector('#audio');
const startBtn = document.querySelector('#startBtn');
const backBtn = document.querySelector('#backBtn');
const h1 =  document.querySelector('h1');


// -------Setting the time interval
const time = 5;
let timeCount = time * 60;

// -------ExerciseApp
startBtn.addEventListener('click', startApp);

function startApp() {
    startBtn.style.display = 'none';
    backBtn.style.display = 'block';
    audio.play();


    let timerID = setInterval(function() {
        let minutes = Math.floor(timeCount / 60);
        let seconds = timeCount%60;
        timeCount--;

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        h1.textContent = `0${minutes} : ${seconds}`;

        if (timeCount < 0) {
            timeCount = 0;
            clearInterval(timerID);
            audio.pause();

        }
    },1000)
}

// Animation on load
gsap.from('h1', {opacity: 0, duration: 1, dealy: 1, ease: 'power1.in'} )
gsap.from('#startBtn', {opacity: 0, duration: 1, delay: 1.8, ease: 'power1.in'})

