function hello() {
    document.getElementById('example').innerHTML = 'Привет,мир!'
}

function reset() {
    document.getElementById('example').innerHTML = ''
}

function set_text(id, text) {
    document.getElementById(id).innerHTML = text
}

function submit() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var status = document.getElementById('status');

    if(name == '') {
        status.innerHTML = 'Заполните поле ФИО!'
    }
    else if (email == '') {
        status.innerHTML = 'Заполните поле e-mail!'
    }
    else if (phone == '') {
        status.innerHTML = 'Заполните поле Телефон!'
    }
    else {
        status.innerHTML = `Регистрация прошла успешно! Ваши данные на сайте: ФИО - ${name} e-mail - ${email}  Телефон - ${phone}`;
    }
}

function set_body_color_red() {
    document.body.style.backgroundColor = 'red';
}

function set_body_color(color) {
    document.body.style.backgroundColor = color;
}

function input_color() {
    var input_color = document.getElementById('color').value
    if(input_color == 'nigger' , 'niggers' , 'негры') {
        document.body.style.backgroundColor = 'black';
    }
    else {
        set_body_color(input_color);
    }
}

function lampOn() {
    document.getElementById('lamp').src="images/pic_bulbon.gif";
    document.getElementById('main').style.backgroundColor = '#fff';
    document.getElementById('main').style.color = '#000';
}

function lampOff() {
    document.getElementById('lamp').src="images/pic_bulboff.gif";
    document.getElementById('main').style.backgroundColor = '#000';
    document.getElementById('main').style.color = '#fff';
}

function deleteTitle() {
    document.getElementById('title').style.display = 'none';
}

function createButton() {
    var btn = document.createElement('BUTTON');
    btn.innerHTML = 'Новая кнопка';
    document.getElementById('buttonList').appendChild(btn);
}

function buttonP() {
    var p = document.createElement('p');
    p.innerHTML = 'Новый абзац';
    document.getElementById('buttonP').appendChild(p);
}

function set_font_size(id, size) {
    document.getElementById(id).style.fontSize = size;
}

function custom_text() {
    var input_color_C = document.getElementById('custom_C').value

    set_color_C(input_color_C);
}

function set_color_C(input_color_C) {
    document.getElementById('custom_id').style.color = input_color_C;
}

//Создание обьекта
var person = new Object();

// добавление свойств со значениями
person.name = 'Повсекакий'
person.surname = 'Мудроплёт'
person.age = '85'
person.weight = '65'
person.fullName = function() {
    return this.name + ' ' + this.surname;
}


function showPerson() {
    document.getElementById('person').innerHTML = person.fullName() + ':' + person.age
}

var avto = new Object();

avto.brand = 'Audi'
avto.model = 'A6'
avto.year = '2020'
avto.color = 'black'
avto.fullInf = function() {
    return 'Бренд:' + this.brand + '<br> Модель:' + this.model + '<br> Год:' + this.year;
}

function showAvto() {
    document.getElementById('avto').innerHTML = avto.fullInf() + '<br> Цвет:' + avto.color 
}

let cat = {
    poroda: 'Sphinx',
    color:'Black',
    age: '3 y.o.'
}

cat.eyes = 'green'

cat.showInfo = function() {
    document.getElementById('cat').innerHTML = 
    `Порода: ${cat.poroda} <br>
    Цвет: ${cat.color} <br>
    Возраст: ${cat.age} <br>
    Цвет глаз: ${cat.eyes} <>`
}

const questions = [
    {
        question: 'Вопрос 1',
        answers: {
            1: 'no',
            2: 'no',
            3: 'yes',
            4: 'no'
        },
        rightAnswer: '3'
    },
    {
        question: 'Вопрос 2',
        answers: {
            1: 'no',
            2: 'yes',
            3: 'no',
            4: 'no'
        },
        rightAnswer: '2'
    },
    {
        question: 'Вопрос 3',
        answers: {
            1: 'yes',
            2: 'no',
            3: 'no',
            4: 'no'
        },
        rightAnswer: '1'
    },
]

let testContainer = document.getElementById('test');
let resultButton = document.getElementById('resultButton');
let resultContainer = document.getElementById('result');

function generateTest(questions, testContainer, resultContainer, resultButton) {
    let out = [];
    let answers;

    for(let i=0; i<questions.length; i++) {
        answers = [];
        for(let ans_text in questions[i].answers) {
            answers.push(
                `<label><br><input type="radio" name="question${i}" value="${ans_text}"> ${ans_text}) ${questions[i].answers[ans_text]} </label>`
            );
        }
        out.push(
            `<div class="question"> ${questions[i].question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        )
    }
    testContainer.innerHTML = out.join('');
}

generateTest(questions, testContainer, resultContainer, resultButton)

function showResults(questions, testContainer, resultContainer) {
    let answerContainers = testContainer.querySelectorAll('.answers');

    let userAnswer = '';
    let rightAnswersNum = 0;

    for(let i=0; i<questions.length; i++){
        
    }
}