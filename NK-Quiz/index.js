const button = document.querySelector('#submit');
const show = document.querySelector('#show');
const assessment = document.querySelector('#assessment');

button.addEventListener('click', (e) => {
    e.preventDefault();
    let points = 0;
    if (document.querySelector('#answerOne').checked){
        points++;
    }
    if (document.querySelector('#answerTwo').checked){
        points++;
    }
    if (document.querySelector('#answerThree').checked){
        points++;
    }
    if (document.querySelector('#answerFour').checked){
        points++;
    }
    if (document.querySelector('#answerFive').checked){
        points++;
    }
    if (document.querySelector('#answerSix').checked){
        points++;
    }

    show.textContent = 'Your points: ' + points + ' out of 6';
    show.style.display = 'block';

    if (points === 6) {
        assessment.textContent = 'Assessment: your math skills are amazing!' ;
        assessment.style.display = 'block';
    }

    else if (points === 5) {
        assessment.textContent = 'Assessment: not bad!' ;
        assessment.style.display = 'block';
    }

    else {
        assessment.textContent = 'Assessment: sorry, you must improve your skills!';
        assessment.style.display = 'block';
    }
})

// Animation on load
gsap.to('h1', {
    text: 'Let us remember the multiplication table!',
    duration: 2,
    delay: 1
})

gsap.from('form', {
    opacity: 0,
    scale: .3,
    duration: .3,
    delay: 2.5
})

gsap.from('#exitBtn', {
    opacity: 0,
    scale: .3,
    duration: .7,
    delay: 3
})

