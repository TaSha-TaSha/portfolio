// Setting Timeout for body
setTimeout(function () {
    document.body.style.opacity = '1';
}, 1000);

const selectOne = document.querySelector('#selectOne');
const selectTwo = document.querySelector('#selectTwo');
const inputOne = document.querySelector('#inputOne');
const inputTwo = document.querySelector('#inputTwo');
const mainContainer = document.querySelector('.mainContainer');
const exitBtn = document.querySelector('.exitBtn');

// Convert 
selectOne.addEventListener('change', convert);
selectTwo.addEventListener('change', convert);
inputOne.addEventListener('input', convert);
inputTwo.addEventListener('input', convert);

function convert(e) {
    e.preventDefault();

    const mInKm = 1000;
    const dmInKm = 10000;
    const cmInKm = 100000;
    const mmInKm = 1000000;

    const kmInM = 0.001;
    const kmInDm = 0.0001;
    const kmInCm = 0.00001;
    const kmInMm = 0.000001;

    const dmInM = 10;
    const cmInM = 100;
    const mmInM = 1000;

    const mInDm = 0.10;
    const mInCm = 0.01;
    const mInMm = 0.001;

    const cmInDm = 10;
    const mmInDm = 100;

    const dmInCm = 0.10;
    const dmInMm = 0.01;

    const mmInCm = 10;
    const cmInMm = 0.10;

// Restrictions for entering negative numbers and letters 
    if (inputOne.value < 0 || isNaN(inputOne.value)) {
        Swal.fire({
            title: `Please enter only numbers 
            greater than 0`,
            customClass: 'swal-width'});
            inputOne.value = '';
    } 

// if Equal Value  
    if (selectOne.value === selectTwo.value) {
        inputTwo.value = inputOne.value;
        inputTwo.innerText = `${inputOne.value}`;
    }

// Reload and clean fields 
    if (inputOne.value === '') {
        inputTwo.value = '';
        selectOne.value = 'option';
        selectTwo.value = 'option';
    }

// Convertion options for length
    if (selectOne.value === 'km' && selectTwo.value === 'm') {
       inputTwo.value = (inputOne.value * mInKm).toFixed(0);
    }
    else if (selectOne.value === 'km' && selectTwo.value === 'dm') {
        inputTwo.value = (inputOne.value * dmInKm).toFixed(0);
    }
    else if (selectOne.value === 'km' && selectTwo.value === 'cm') {
        inputTwo.value = (inputOne.value * cmInKm).toFixed(0);
    }
    else if (selectOne.value === 'km' && selectTwo.value === 'mm') {
        inputTwo.value = (inputOne.value * mmInKm).toFixed(0);
    }

    if (selectOne.value === 'm' && selectTwo.value === 'km') {
        inputTwo.value = (inputOne.value * kmInM).toFixed(3);
    }
    else if (selectOne.value === 'm' && selectTwo.value === 'dm') {
        inputTwo.value = (inputOne.value * dmInM).toFixed(0);
    }
    else if (selectOne.value === 'm' && selectTwo.value === 'cm') {
        inputTwo.value = (inputOne.value * cmInM).toFixed(0);
    } 
    else if (selectOne.value === 'm' && selectTwo.value === 'mm') {
        inputTwo.value = (inputOne.value * mmInM).toFixed(0);
    }

    if (selectOne.value === 'dm' && selectTwo.value === 'km') {
        inputTwo.value = (inputOne.value * kmInDm).toFixed(4);
    }
    else if (selectOne.value === 'dm' && selectTwo.value === 'm') {
        inputTwo.value = (inputOne.value * mInDm).toFixed(1);
    }
    else if (selectOne.value === 'dm' && selectTwo.value === 'cm') {
        inputTwo.value = (inputOne.value * cmInDm).toFixed(0);
    }
    else if (selectOne.value === 'dm' && selectTwo.value === 'mm') {
        inputTwo.value = (inputOne.value * mmInDm).toFixed(0);
    }

    if (selectOne.value === 'cm' && selectTwo.value === 'km') {
        inputTwo.value = (inputOne.value * kmInCm).toFixed(5);
    }
    else if (selectOne.value === 'cm' && selectTwo.value === 'm') {
        inputTwo.value = (inputOne.value * mInCm).toFixed(2);
    }
    else if (selectOne.value === 'cm' && selectTwo.value === 'dm') {
        inputTwo.value = (inputOne.value * dmInCm).toFixed(1);
    }
    else if (selectOne.value === 'cm' && selectTwo.value === 'mm') {
        inputTwo.value = (inputOne.value * mmInCm).toFixed(0);
    }

    if (selectOne.value === 'mm' && selectTwo.value === 'km') {
        inputTwo.value = (inputOne.value * kmInMm).toFixed(6);
    }
    else if (selectOne.value === 'mm' && selectTwo.value === 'm') {
        inputTwo.value = (inputOne.value * mInMm).toFixed(3);
    }
    else if (selectOne.value === 'mm' && selectTwo.value === 'dm') {
        inputTwo.value = (inputOne.value * dmInMm).toFixed(2);
    }
    else if (selectOne.value === 'mm' && selectTwo.value === 'cm') {
        inputTwo.value = (inputOne.value * cmInMm).toFixed(1);
    }
}

// Exit Button
exitBtn.addEventListener('click', () => {
    inputOne.value = '';
    inputTwo.value = '';
})

// Animation on load
gsap.from('.insideContainer', {scale: 0, opacity: 0, duration: .7, delay: 1})
gsap.from('.selector', {opacity: 0, stagger: .3, duration: .5,  delay: 4.1})
gsap.from('.inputField', {opacity: 0, stagger: .3, duration: .5, delay: 4.5})
gsap.from('.exitBtn', {opacity: 0, duration: .7, delay: 5.6})
gsap.to('h1', {
    text: 'Length Converter',
    duration: 3,
    delay: 1.9,
    ease: 'power1.in'
})

