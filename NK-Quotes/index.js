const text = document.querySelector('.text');
const header = document.querySelector('header');
const mainCont = document.querySelector('.mainCont');

const videoOne = document.querySelector('#videoOne');
const videoTwo = document.querySelector('#videoTwo');

const img = document.querySelector('img');

const buttonLeft = document.querySelector('.btnOne');
const buttonRight = document.querySelector('.btnTwo');
const exit = document.querySelector('.exitBtn');


videoOne.addEventListener('mouseover', array);
videoTwo.addEventListener('mouseover', array); 

function array(){
    textArray = [
        '«Traveling – it leaves you speechless, then turns you into a storyteller.», - Ibn Battuta',
        '«We travel, some of us forever, to seek other places, other lives, other souls.», - Anais Nin',
        '«A journey is best measured in friends, rather than miles.», - Tim Cahill',
        '«The gladdest moment in human life, methinks, is a departure into unknown lands.», - Sir Richard Burton',
        '«No place is ever as bad as they tell you it is going to be.», - Chuck Thompson',
        '«I am not the same, having seen the moon shine on the other side of the world.», - Mary Anne Radmacher',
        '«Travel makes one modest. You see what a tiny place you occupy in the world.», - Gustave Flaubert.'
    ];

    let result = textArray[Math.floor(Math.random() * textArray.length)];
    text.textContent = result;
}

buttonLeft.addEventListener('click', zambiaLeft);
buttonRight.addEventListener('click', tanzaniaRight);

// -----------------   ПЕРВАЯ КНОПКА----------------------------//
function zambiaLeft(){
    text.textContent = 'ZAMBIA';
    text.setAttribute('class', 'textClass');

    header.style.display = 'none';

    mainCont.classList.add('contNew');

    videoOne.removeEventListener('mouseover', array);
    videoTwo.removeEventListener('mouseover', array);

    buttonLeft.removeEventListener('click', zambiaLeft);
    buttonRight.removeEventListener('click', tanzaniaRight);

    videoOne.setAttribute('src', 'https://player.vimeo.com/external/468454040.sd.mp4?s=c1aea845bb155ae2844b140d0b2d4f9593f56e1f&profile_id=139&oauth2_token_id=57447761');
    videoTwo.setAttribute('src', 'https://player.vimeo.com/external/452545356.sd.mp4?s=80a7d7eebfe27b92b1fdd1f5d81782fe6460f01f&profile_id=139&oauth2_token_id=57447761');
    
    img.setAttribute('src', 'https://cdn.glitch.global/b8defa2d-4490-42d6-b31d-00ba52aab25b/Zambia.jpeg?v=1655315810814');
    img.setAttribute('class','imgSize');

    buttonLeft.addEventListener('click', southAfricaLeft);
    buttonRight.addEventListener('click', namibiaRight);

    buttonLeft.textContent = 'LEFT';
    buttonRight.textContent = 'RIGHT';

    exit.style.display = 'none';

    // console.log(zambiaLeft);
}

function southAfricaLeft(){
    text.textContent = 'South Africa';

    buttonLeft.removeEventListener('click', southAfricaLeft);
    buttonRight.removeEventListener('click', namibiaRight);

    videoOne.setAttribute('src', 'https://player.vimeo.com/external/468451144.sd.mp4?s=1a225f021e1bb831f8973685579845d84fb2521c&profile_id=139&oauth2_token_id=57447761');
    videoTwo.setAttribute('src', 'https://player.vimeo.com/external/367978586.sd.mp4?s=344926659c5f62fd2f5936ae4554e8b053bc1c0e&profile_id=139&oauth2_token_id=57447761');

    img.setAttribute('src', 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YWZyaWNhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60');

    buttonLeft.textContent = 'THIS SIDE';
    buttonRight.textContent = 'THIS SIDE';

    buttonLeft.addEventListener('click', together);
    buttonRight.addEventListener('click', together);

    // console.log(southAfricaLeft);
}

function namibiaRight(){
    text.textContent = 'NAMIBIA';

    buttonLeft.removeEventListener('click', southAfricaLeft);
    buttonRight.removeEventListener('click', namibiaRight);

    videoOne.setAttribute('src', 'https://player.vimeo.com/progressive_redirect/playback/697662250/rendition/240p?loc=external&oauth2_token_id=57447761&signature=ce403fc653955dd46590f76d9d0b9fcade2858ba6721a681901f338cff2a6548');
    videoTwo.setAttribute('src', 'https://player.vimeo.com/external/491166079.sd.mp4?s=c1f395b16ae953f6d882126fb591f215e80cddac&profile_id=139&oauth2_token_id=57447761');

    img.setAttribute('src', 'https://images.unsplash.com/photo-1511185307590-3c29c11275ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFmcmljYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60');

    buttonLeft.textContent = 'THIS SIDE';
    buttonRight.textContent = 'THIS SIDE';

    buttonLeft.addEventListener('click', together);
    buttonRight.addEventListener('click', together);

    // console.log(namibiaRight);
}

// -----------------   ВТОРАЯ КНОПКА----------------------------//
function tanzaniaRight(){
    text.textContent = 'TANZANIA';
    text.setAttribute('class', 'textClass');

    header.style.display = 'none';

    mainCont.classList.add('contNew');

    videoOne.removeEventListener('mouseover', array);
    videoTwo.removeEventListener('mouseover', array);

    buttonLeft.removeEventListener('click', zambiaLeft);
    buttonRight.removeEventListener('click', tanzaniaRight);

    videoOne.setAttribute('src', 'https://player.vimeo.com/external/490220456.sd.mp4?s=0a46f50a726f7a48d89ad361a718a96c92002a6f&profile_id=139&oauth2_token_id=57447761');
    videoTwo.setAttribute('src', 'https://player.vimeo.com/external/490203333.sd.mp4?s=f4cdccb6e359542b7d33136b845b2027428f582f&profile_id=139&oauth2_token_id=57447761');

    img.setAttribute('src', 'https://images.unsplash.com/photo-1489493887464-892be6d1daae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFmcmljYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1296&q=60');
    img.setAttribute('class','imgSize');

    buttonLeft.textContent = 'LEFT';
    buttonRight.textContent = 'RIGHT';

    buttonLeft.addEventListener('click', madagascarLeft);
    buttonRight.addEventListener('click', kenyaRight);

    exit.style.display = 'none';
    // console.log(tanzaniaRight);
}

function madagascarLeft(){
    text.textContent = 'MADAGASCAR';
    
    buttonLeft.removeEventListener('click', madagascarLeft);
    buttonRight.removeEventListener('click', kenyaRight);

    videoOne.setAttribute('src', 'https://player.vimeo.com/external/543842011.sd.mp4?s=7413de312dc10530c04da1f38d3e05e65aadcc9b&profile_id=164&oauth2_token_id=57447761');
    videoTwo.setAttribute('src', 'https://player.vimeo.com/external/363735284.sd.mp4?s=eaa0dce2d093a9835fca8be18eab9e9e3ffcddb1&profile_id=139&oauth2_token_id=57447761');

    img.setAttribute('src', 'https://images.unsplash.com/photo-1627580206975-ede73a2ca147?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFkYWdhc2NhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60');

    buttonLeft.textContent = 'THIS SIDE';
    buttonRight.textContent = 'THIS SIDE';

    buttonLeft.addEventListener('click', together);
    buttonRight.addEventListener('click', together);

    // console.log(madagascarLeft);
}

function kenyaRight(){
    text.textContent = 'KENYA';

    buttonLeft.removeEventListener('click', madagascarLeft);
    buttonRight.removeEventListener('click', kenyaRight);

    videoOne.setAttribute('src', 'https://player.vimeo.com/external/414720770.sd.mp4?s=b0ead7d84c85d22933a282cb84c618b926ba7eea&profile_id=139&oauth2_token_id=57447761');
    videoTwo.setAttribute('src', 'https://player.vimeo.com/external/490220456.sd.mp4?s=0a46f50a726f7a48d89ad361a718a96c92002a6f&profile_id=139&oauth2_token_id=57447761');

    img.setAttribute('src', 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2VueWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60');

    buttonLeft.textContent = 'THIS SIDE';
    buttonRight.textContent = 'THIS SIDE';

    buttonLeft.addEventListener('click', together);
    buttonRight.addEventListener('click', together);

    // console.log(kenyaRight);
}

//------------------------ ВСЕ ВМЕСТЕ ------------------------//

function together(){
    text.textContent = 'The World Is Amazing !!!';
    text.setAttribute('class', 'textLast')

    mainCont.style = 'display: none';

    videoOne.style = 'display: none';
    videoTwo.style = 'display: none';

    img.style = 'display: none';

    buttonLeft.removeEventListener('click', together);
    buttonRight.removeEventListener('click', together);

    buttonLeft.style = 'display: none';
    buttonRight.style = 'display: none';

    exit.style.display = 'block';

    // console.log(together);
}

// exitBtn.addEventListener('click', () => {
//     setTimeout(function() {
//         document.location.assign('/NK Routine/index.html')
//     }, 900);
// });

// Animation on load
gsap.from('header', {opacity: 0, scale: .3, duration: .3, delay: .7})
gsap.from('.btnOne', {opacity: 0,  scale: .3, duration: .7, delay: 1.1})
gsap.from('.btnTwo', {opacity: 0,  scale: .3, duration: .7, delay: 1.1})
gsap.from('.exitBtn', {y: 30,  opacity: 0, duration: .7, delay: 2})

































// ПЕРВЫЙ ВАРИАНТ
// const button = document.querySelector('#btn');
// const show = document.querySelector('#show');

// button.addEventListener('click', () => {
//     let quotesArray = [
//         '«Traveling – it leaves you speechless, then turns you into a storyteller.», - Ibn Battuta',
//         '«We travel, some of us forever, to seek other places, other lives, other souls.», - Anais Nin',
//         '«A journey is best measured in friends, rather than miles.», - Tim Cahill',
//         '«The gladdest moment in human life, methinks, is a departure into unknown lands.», - Sir Richard Burton',
//         '«No place is ever as bad as they tell you it is going to be.», - Chuck Thompson',
//         '«I am not the same, having seen the moon shine on the other side of the world.», - Mary Anne Radmacher',
//         '«Travel makes one modest. You see what a tiny place you occupy in the world.», - Gustave Flaubert.'
//     ];
    
//     let quoteRandom = quotesArray[Math.floor(Math.random() * quotesArray.length)];
//     show.style.display = 'block';
//     show.textContent = quoteRandom;
// })


