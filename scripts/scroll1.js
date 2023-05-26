let button0 = document.querySelector('.item1');
let sectionFirst = document.querySelector('.toothBtn');

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}

if (button0 && sectionFirst) {
    button0.addEventListener('click', () => {
        scrollTo(sectionFirst);
    })
}

let button = document.querySelector('.item2');
let sectionTwo = document.querySelector('.whyUs-squars_list-item');

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}

if (button && sectionTwo) {
    button.addEventListener('click', () => {
        scrollTo(sectionTwo);
    })
}

let button1 = document.querySelector('.item3');
let sectionThree = document.querySelector('.dentists_content-names');

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}

if (button1 && sectionThree) {
    button1.addEventListener('click', () => {
        scrollTo(sectionThree);
    })
}

let button2 = document.querySelector('.item4');
let sectionFour = document.querySelector('#footer');

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}

if (button2 && sectionFour) {
    button2.addEventListener('click', () => {
        scrollTo(sectionFour);
    })
}

let button3 = document.querySelector('#item5');
let sectionFive = document.querySelector('.hero_content-left-desc');

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}

if (button3 && sectionFive) {
    button3.addEventListener('click', () => {
        scrollTo(sectionFive);
    })
}

let button4 = document.querySelector('#item6');
let sectionSix = document.querySelector('.services_content-title');

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}

if (button4 && sectionSix) {
    button4.addEventListener('click', () => {
        scrollTo(sectionSix);
    })
}


let button5 = document.querySelector('#item7');
let sectionSeven = document.querySelector('.dentists_content-slider');

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}

if (button5 && sectionSeven) {
    button5.addEventListener('click', () => {
        scrollTo(sectionSeven);
    })
}


let button6 = document.querySelector('#item8');
let sectionEight = document.querySelector('.footer');

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}

if (button6 && sectionEight) {
    button6.addEventListener('click', () => {
        scrollTo(sectionEight);
    })
}