//Typing sentences
const sentOne = 'Hi, there!';
let i = 0;
const sentTwo = 'I am Mickey a cheese lover.';
let a = 0;
const sentThree = 'Do you want to play a game?';
let b = 0;

speed = 50;

function typeTextOne() {
    if (i < sentOne.length) {
        document.querySelector('#parOne').textContent += sentOne.charAt(i);
        i++;
        setTimeout(typeTextOne, speed);
    }
    document.querySelector('.containerTwo').style.display = 'none';
}
typeTextOne();

function typeTextTwo() {
    if ( a < sentTwo.length) {
        document.querySelector('#parTwo').textContent += sentTwo.charAt(a);
        a++;
        setTimeout(typeTextTwo, speed);
    }
}
setTimeout(typeTextTwo, 800);

function typeTextThree() {
    if (b < sentThree.length) {
        document.querySelector('#parThree').textContent += sentThree.charAt(b);
        b++;
        setTimeout(typeTextThree, speed);
    }
    else if ( b = sentThree.length) {
        document.querySelector('.btnContainer').classList.add('toShow');
    }
}
setTimeout(typeTextThree, 2500);

// Buttons Yes and No
const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');

yesBtn.addEventListener('click', () => {
    document.querySelector('.containerOne').style.display = 'none';
    document.querySelector('.containerTwo').style.display = 'block';
    document.querySelector('#play').style.display = 'none';
    document.body.style.backgroundImage = 'url(melted-cheese.jpeg)';
    document.body.style.backgroundSize = '100vh';
});

noBtn.addEventListener('click', () => {
    Swal.fire({
        title: 'Oh...',
        text: 'Think again!',
        imageUrl: 'mouse-no.jpeg',
        imageWidth: 250,
        imageHeight: 280,
        imageAlt: 'Custom image',
    })
})

// Game
const inputField = document.querySelector('#inputField');
const attemptsleft = document.querySelector('#attemptsleft');

const enter = document.querySelector('#enter');
const play = document.querySelector('#play');

let attempts = 5;
const attemptNumber = document.querySelector('#attemptNumber');

let number = 1;

// Calculating a random number
const randomNumber = Math.floor(Math.random() * 20) + 1;

// Activating the enter button 
enter.addEventListener('click', confirmNumber);

inputField.addEventListener('keypress', function(e) {
    if (e.keyCode === 13)
    confirmNumber();
})

// Creating the confirmNumber() function
function confirmNumber() {
    const guess = inputField.value;

    number++;
    attemptNumber.textContent = '#' + number;

if (number > 5) {
    document.querySelector('#limited').textContent = 'No attempts left';
    attemptNumber.textContent = '';
    document.querySelector('#lastAttempt').textContent = '';
    inputField.setAttribute('disabled', '');
    enter.setAttribute('disabled', '');
    enter.style.display = 'none';
    play.style.display = 'block';
}

else if (number === 5) {  //здесь означает, что пятая попытка и вместо цифры 5 мы просто пишем last (последняя попытка)
    attemptNumber.textContent = '';
    document.querySelector('#lastAttempt').textContent = 'last';
}

// Remaining attempts
attempts--;
attemptsleft.textContent = attempts;
document.querySelector('#chosenNumber').textContent += (guess + ', ');

if (attempts === 0) {
    if (Number(guess) === randomNumber) {
        Swal.fire({
            title: 'WooooooW',
            text: 'Congratulations. But next time I will win!',
            imageUrl: 'Congrat.jpeg',
            imageWidth: 250,
            imageHeight: 280,
            imageAlt: 'Custom image',
            })
    }

    else {
        Swal.fire({
            title: 'Game Over',
            text: 'The answer was ' + randomNumber + '.' + ' Revanche?',
            imageUrl: 'Game-over.jpeg',
            imageWidth: 250,
            imageHeight: 280,
            imageAlt: 'Custom image',
            })
    }

    attemptsleft.textContent = 0;
    inputField.setAttribute('disabled', '');
    enter.setAttribute('disabled', '');
    enter.style.display = 'none';
    play.style.display = 'block';
}

// Game terms
else {
    if (guess < 1 || guess > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Choose a number between 1 and 20 only!',
        })
    } 

    else if (isNaN(guess)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Only numbers are avalible in this game!',
        })
        // Deduction ban when entering a non-number
        attempts--;
        attemptsleft.textContent = attempts;
        // Deduction ban when entering a non-number
        number--;
        attemptNumber.textContent = '#' + number;
    }

    else {
        if (guess > randomNumber) {
        Swal.fire(
            'Try a lower number. I am winning so far!');
        }

        else if (guess < randomNumber) {
        Swal.fire(
            'Try a larger number. I am winning so far!');
        }

        else {
        Swal.fire({
            title: 'WooooooW',
            text: 'Congratulations. But next time I will win!',
            imageUrl: 'Congrat.jpeg',
            imageWidth: 250,
            imageHeight: 280,
            imageAlt: 'Custom image',
        })

        inputField.setAttribute('disabled', '');
        enter.setAttribute('disabled', '');
        enter.style.display = 'none';
        play.style.display = 'block';
        }
    }
}

inputField.value = '';
}

// Play again button Window reload
play.addEventListener('click', () => {
    window.location.reload();
})


