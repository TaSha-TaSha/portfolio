const aboutLink = document.querySelector('.aboutLink');
const projectLink = document.querySelector('.projectLink');
const contactLink = document.querySelector('.contactLink');

const firstPage = document.querySelector('.firstPage');
const secondPage = document.querySelector('.secondPage');
const thirdPage = document.querySelector('.thirdPage');

const animates = document.querySelectorAll('.animate');

const containersAnimation = document.querySelectorAll('.containerAnimation');

const goTop = document.querySelector('.backToTop');

const cvPage = document.querySelector('#cvPage');
const cvBtn = document.querySelector('#cvBtn');
const cvClose = document.querySelector('.cvClose');

const iconOne = document.querySelector('.iconOne');
const iconTwo = document.querySelector('.iconTwo');
const iconThree = document.querySelector('.iconThree');


// Setting Timeout for body
setTimeout(function () {
  document.body.style.opacity = '1';
}, 1000)

gsap.from('.navbar', {y: -100, opacity: 0, duration: 1.7, delay: .5, ease: 'power1.in'})

// Going to the project Page on click
aboutLink.addEventListener('click', () => {
// gsap.from('.titleContainer', {opacity: 0, scale: 0, duration: 1, delay: .5, ease: 'power1.in'})
gsap.from('.col', {opacity: 0, scale: 0, duration: .6, delay: 2.3, stagger: 1, ease: 'power2.out'})
})

//Highlighting the navbar links on scroll
window.addEventListener('scroll', startAnimation);

function startAnimation() {
  let firstPageCoord = firstPage.clientHeight;
  let secondPageCoord = secondPage.clientHeight;
  let thirdPageCoord = thirdPage.clientHeight;

  let firstTwoPages = firstPageCoord + secondPageCoord;
  let firstThreePages = firstTwoPages + thirdPageCoord;

  // Animation of the elements on scroll
  animates.forEach(item => {
    const itemHeight = item.clientHeight;
    const itemOffset = getCoords(item).top; // the element height from its top border + scroll
    const itemAnimStart = 6; // we need this coefficient to get 1/6 of the page lately
    let itemAnimPoint = window.innerHeight - window.innerHeight / itemAnimStart;

    if ((window.scrollY > itemOffset - itemAnimPoint) && (window.scrollY < (itemOffset + itemHeight))) {
      item.classList.add('active');
    }
    else {
      if (!item.classList.contains('oneTimeAnimation')) {
        item.classList.remove('active'); // do not apply class active repeatedly
      }
    }
  })
}

// the function from the Internet 
// FOR skillContainerExtra TO RETURN BACK JavaScript, Reack etc...
function getCoords(elem) { 
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.scrollY,
    left: box.left + window.scrollX,
  };
}

//---------Slow down the scroll back to top------------------
goTop.addEventListener('click', backToTop);

function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -25); //in brackets: scroll speed; the lower the number the lower speed of the scroll 
    setTimeout(backToTop, 0); //we need this to scroll 30px back to top each milisecond
  }
}

//---------Opening and Closing the CV Modal Window and rotation the close-----------
cvBtn.addEventListener('click', () => {
  cvPage.style.display = 'block';
  gsap.from('#cvPage', {opacity: 0, scale: 0, duration: .6, delay: .3, ease: 'power2.in'})
})

cvClose.addEventListener('click', () => {
  cvPage.style.display = 'none';
})

cvClose.addEventListener('mousemove', () => {
  gsap.to('.cvClose', {scale: 2, duration: 1.5, rotation: 360, ease: 'slow'})
})

cvClose.addEventListener('mouseleave', () => {
  gsap.to('.cvClose', {scale: 1, duration: 1.5, ease: 'slow'})
})


//--------Don't be Shy reflect------------------
const shy = document.querySelector('.shy')
const form = document.querySelector('.form');

form.addEventListener('mouseover', () => {
  gsap.to('.shy', {scale: 1.5, duration: .5})
  shy.classList.add('reflect');
});

form.addEventListener('mouseleave', () => {
  gsap.to('.shy', {scale: 1, duration: .5})
  shy.classList.remove('reflect');
})



