// Setting Timeout for body
setTimeout(function () {
    document.body.style.opacity = '1';
},1000)

const exitBtnS = document.querySelectorAll('.exitBtn');
const selector = document.querySelector('#selector');
const calcBtn = document.querySelector('.calcBtn');

// Getting Access to the selector-month field value
selector.addEventListener('change', () => {
    document.querySelector('.selectedMonth').textContent = selector.value;
})

// Calculations
calcBtn.addEventListener('click', calcSheet);

function calcSheet(e) {
    e.preventDefault();

    const nameOne = document.querySelector('#nameOne');
    const nameTwo = document.querySelector('#nameTwo');
// надо разобрать как поставить .toUpperCase чтобы имена были заглавными
    let incomeOne = document.querySelector('#incomeOne').value;
    let incomeTwo = document.querySelector('#incomeTwo').value;

    const rent = document.querySelector('#rent').value;
    const utilites = document.querySelector('#utilites').value;
    const transport = document.querySelector('#transport').value;
    const food = document.querySelector('#food').value;
    const goods = document.querySelector('#goods').value;
    const kid = document.querySelector('#kid').value;
    const pet = document.querySelector('#pet').value;
    const cleaning = document.querySelector('#cleaning').value;
    const other = document.querySelector('#other').value;

    if (selector.value === 'chooseMonth') {
        Swal.fire('Choose a Month!');
        document.querySelector('.secondContainer').style.display = 'none';
    }
// тоесть здесь мы говорим, что если у нас не выбран месяц при заполнении всей формы
// то система не будет считать, а alert скажет, чтобы выбрали месяц
// и расчет со всеми резудьтатами не будет показан

    else if (nameOne.value === '') {
        Swal.fire('Enter the name on the family member #1');
        document.querySelector('.secondContainer').style.display = 'none';
    }

    else if (nameTwo.value === '') {
        Swal.fire('Enter the name on the family member #2');
        document.querySelector('.secondContainer').style.display = 'none';
    }

    // nameOne и nameTwo и selector мы ставим value

    else if (incomeOne === '' || isNaN(incomeOne)) {
        Swal.fire('Income the family member #1 is incorrect');
        incomeOne = '';
        document.querySelector('.secondContainer').style.display = 'none';
    }
   // здесь мы не указваем value так как выше мы это сделали уже

    else if (incomeTwo === '' || isNaN(incomeTwo)) {
    Swal.fire('Income the family member #2 is incorrect');
    incomeTwo = '';
    document.querySelector('.secondContainer').style.display = 'none';
    }

    else if (rent === '' || isNaN(rent) || rent < 0) {
    Swal.fire('Enter the cost of rent in numbers!');
    rent = '';
    document.querySelector('.secondContainer').style.display = 'none';
    }

    else if (utilites === '' || isNaN(utilites) || utilites < 0) {
    Swal.fire('Enter the cost of utilites in numbers!');
    utilites = '';
    document.querySelector('.secondContainer').style.display = 'none';
    }

    else if (transport === '' || isNaN(transport) || transport < 0) {
    Swal.fire('Enter the cost of transport in numbers!');
    transport = '';
    document.querySelector('.secondContainer').style.display = 'none';
    }

    else if (food === '' || isNaN(food) || food < 0) {
    Swal.fire('Enter the cost of food in numbers!');
    food = '';
    document.querySelector('.secondContainer').style.display = 'none';
    }

    else if (goods === '' || isNaN(goods) || goods < 0) {
    Swal.fire('Enter the cost of goods in numbers!');   
    goods = '';
    document.querySelector('.secondContainer').style.display = 'none';
    }

    else if (kid === '' || isNaN(kid) || kid < 0) {
    Swal.fire('Enter the cost of kid care in numbers!');   
    kid = '';
    document.querySelector('.secondContainer').style.display = 'none';
    }

    else if (pet === '' || isNaN(pet) || pet < 0) {
    Swal.fire('Enter the cost of pet care in numbers!');    
    pet = '';
    document.querySelector('.secondContainer').style.display = 'none';
    }

    else if (cleaning === '' || isNaN(cleaning) || cleaning < 0) {
    Swal.fire('Enter the cleaning cost in numbers!');   
    cleaning = '';
    document.querySelector('.secondContainer').style.display = 'none';         
    }

    else if (other === '' || isNaN(other) || other < 0) {
    Swal.fire('Enter the cost of other expenses in numbers!');
    other = '';
    document.querySelector('.secondContainer').style.display = 'none';  
    }

    else {
        document.querySelector('.firstContainer').style.display = 'none';
        document.querySelector('.secondContainer').style.display = 'block';
    }

    // transferring the values of the first and the second name fields to another location
    const transferredPersonOne = document.querySelector('.transferredPersonOne').textContent = nameOne.value;
    const transferredPersonTwo = document.querySelector('.transferredPersonTwo').textContent = nameTwo.value;

    let totalIncome = Number(incomeOne) + Number(incomeTwo);
    let totalExpenses = Number(rent) + Number(utilites) + Number(transport) + Number(food) + Number(goods) + Number(kid) + Number(pet) + Number(cleaning) + Number(other);

    totalIncome = totalIncome.toFixed(2);
    totalExpenses = totalExpenses.toFixed(2);

    const deduction = totalIncome - totalExpenses;

    if (deduction <= 0) {
        document.querySelector('.result').textContent = 'OH, Your DEBT for this month is $' + (totalIncome - totalExpenses) + ' You should definitely find an additionl sourse of income!';
        document.querySelector('.result').style.display = 'block';
    }

    else if (deduction > 0) {
        document.querySelector('.result').textContent = 'You saved ' + '$' + (totalIncome - totalExpenses).toFixed(2) + ' Great Job!';
        document.querySelector('.result').style.display = 'block';
    }

    document.querySelector('.sumIncome').textContent = totalIncome;
    document.querySelector('.sumExpenses').textContent = totalExpenses;

    document.querySelector('.againSelectedMonth').textContent = selector.value;
    document.querySelector('.incomeFirstPerson').textContent = incomeOne;
    document.querySelector('.incomeSecondPerson').textContent = incomeTwo;

    document.querySelector('#rentCost').textContent = rent;
    document.querySelector('#utilitesCost').textContent = utilites;
    document.querySelector('#transportCost').textContent = transport;
    document.querySelector('#foodCost').textContent = food;
    document.querySelector('#goodsCost').textContent = goods;
    document.querySelector('#kidCost').textContent = kid;
    document.querySelector('#petCost').textContent = pet;
    document.querySelector('#cleaningCost').textContent = cleaning;
    document.querySelector('#otherCost').textContent = other;

    percentDeposPersonOne = (Math.floor(incomeOne * 100) / totalIncome).toFixed(0);
    document.querySelector('.percentDeposPersonOne').textContent = percentDeposPersonOne;

    percentDeposPersonTwo = Math.floor(100 - percentDeposPersonOne);
    document.querySelector('.percentDeposPersonTwo').textContent = percentDeposPersonTwo;
}

// Exit to Calculator / Converter File as a calcConvert.html 
exitBtnS.forEach(btn => {
    btn.addEventListener('click', exit);
})

function exit() {
    document.location.assign('');
}

// Animation on load
gsap.from('header', {y: -100, opacity: 0, duration: .7, delay: 1, ease: 'power1.in'})
gsap.from('#selector', {opacity: 0, duration: .7, delay: 1.8})
gsap.from('.spouseContainer', {stagger: .3, opacity: 0, duration: .7, delay: 2.5})
gsap.from('.titleMiddle', {opacity: 0, duration: .7, delay: 3.3})
gsap.from('#formTwo', {opacity: 0, duration: .7, delay: 4.1})






// МОЖНО и ТАК НАПИСАТЬ
// const memberOneRateJ = document.querySelector('.memberOneRateH').textContent = Math.floor(incomeOne * 100) / totalIncomeJ;
// const memberTwoRateJ = document.querySelector('.memberTwoRateH').textContent = Math.floor(100 - memberOneRateJ);


// ПРИМЕР если МАССИВ
// const secondName = document.querySelectorAll('.secondName');
//     secondName.forEach(wife => {
//         wife.textContent = wifesName.value;
//     })
// если бы у нас было несколько secondName, то мы бы сделали через массив


// то что .textСontent это означает, что class / id в HTML, здесь, когда пустой tag в HTML и значение вставляем в него, поэтому .textContent
// 
// .value это в JS
// let incomeOne = document.querySelector('#incomeOne').value; здесь .value означает, то что вводит пользователь в input в HTML