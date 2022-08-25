//Шаг №1 - создаем объект со ссылкой на сайт и ключом
const api = {
    endPoint: 'https://api.openweathermap.org/data/2.5/',
    key: '64847eda10f4fffea4ab83171672e035'
}
// console.log(api)
const input = document.querySelector('#input');
input.addEventListener('keypress', enter);

function enter(e){
    if (e.keyCode === 13){
        getInfo(input.value);
            // добавила
        document.querySelector('.containerShow').style.display = 'block';
    // 
    }
}

// console.log(enter)
/* Arranging a weather forcast search by a city name */
async function getInfo(date){
    const res = await fetch(`${api.endPoint}weather?q=${date}&units=metric&appID=${api.key}`);
    const result = await res.json();
    displayResult(result);
}

/* Showing the recieved result on the screen */
function displayResult(result){
    let city = document.querySelector('#city');
    city.textContent = `${result.name}, ${result.sys.country}`;

    ///// DATE /////
    showDate();

    let temp = document.querySelector('#temperature');
    temp.innerHTML = `${Math.round(result.main.temp)} <span>°c</span>`

    // добавила
    let icon = document.querySelector("#icon");
    icon.style.display = 'block';
    let iconId = `${result.weather[0].icon}`;
    icon.src = "http://openweathermap.org/img/wn/" + iconId + ".png";
   // 

    let FeelsLike = document.querySelector('#FeelsLike');
    FeelsLike.innerHTML = `Feels Like: ${Math.round(result.main.feels_like)} <span>°C</span>`

    let conditions = document.querySelector('#conditions');
    conditions.textContent = `${result.weather[0].main}`;

    let visibility = document.querySelector('#visibility');
    let calculateVis = `${result.visibility}`;
    visibility.textContent = `Visibility: ${Math.round(calculateVis / 1500)} km`;

    let pressure = document.querySelector('#pressure');
    pressure.innerHTML = `Pressure: ${result.main.pressure} hPa`;

    let variations = document.querySelector('#variations');
    variations.innerHTML = `Min: ${Math.round(result.main.temp_min)} <span>°C</span>` + ` Max: ${Math.round(result.main.temp_max)} <span>°C</span>`;
    
    // добавила
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + result.name + "')"
    // кавычки за скобкой правильны
    // 

    console.log(result);
}

function showDate(){
    const nowData = new Date();
    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    let day = weekdays[nowData.getDay()];
    let dateToday = nowData.getDate();
    let month = months[nowData.getMonth()];
    let year = nowData.getFullYear();

    let date = document.querySelector('#date');
    date.textContent = `${day} ${dateToday} ${month} ${year}`;
}

/* Animation on load */
gsap.to('h1', {
    text: 'Weather forecast',
    duration: 2,
    delay: 1,
    ease: 'power1.in'
})
gsap.from('#input', {opacity: 0, scale: .3, duration: .5, delay: 3.1, ease: 'power2.in'})
gsap.from('.backBtn', {opacity: 0, scale: .3, duration: .5, delay: 3.7})



