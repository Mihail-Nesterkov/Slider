let img = [
    {
    url: './image/img/admiral.jpg',
    textCity: 'Rostov-on-Don<br>LCD admiral',
    textApartment: '81 m<sup>2</sup>',
    textTime: '3.5 months',
    textCost: 'Upon request'
    },
    {
        url: './image/img/thieves.jpg',
        textCity: 'Sochi\n' +
            'Thieves',
        textApartment: '105 m<sup>2</sup>',
        textTime: '4 months',
        textCost: 'Upon request'
    },
    {
        url: './image/img/patriotic.jpg',
        textCity: 'Rostov-on-Don<br>Patriotic',
        textApartment: '93 m<sup>2</sup>',
        textTime: '3 months',
        textCost: 'Upon request'
    },
]
function initSlader(){
const image = document.querySelector('.img_hotel');
const city = document.querySelector('.city');
const apartment = document.querySelector('.apartment');
const time = document.querySelector('.time');
const cost = document.querySelector('.cost');
const arrowLeft = document.querySelector('.left');
const arrowRight = document.querySelector('.right');
let dots = document.querySelector('.dots');
const admiral = document.querySelector('.admiral');
const thieves = document.querySelector('.thieves');
const patriotic = document.querySelector('.patriotic');
let nav_list = [admiral, thieves, patriotic]
let dots_list = [];
let new_dots_list;
let ind = 0

    initDots();
    Slader(ind);
    function initDots(){
        for (let i = 0; i < img.length; i++){
             dots_list.push(`<div class="alips"  index = ${i}></div>`)

        }

        dots.innerHTML = dots_list.join('');


        new_dots_list = document.querySelectorAll('.alips');
        for (let i = 0; i < new_dots_list.length; i++){
            new_dots_list[i].addEventListener('click', function (){
                nav_list[ind].removeAttribute('id')
                new_dots_list[ind].removeAttribute('id')
                ind = dots_list.indexOf(dots_list[i])
                Slader(ind)
            })
        }
    }


    function Slader(ind){
    image.style.backgroundImage = `url(${img[ind].url})`;
    city.innerHTML = `<p class="info_main">CITY:</p>
                      <p class="info_main_text">${img[ind].textCity}</p>`
    apartment.innerHTML = `<p class="info_main">APARTMENT:</p>
                           <p class="info_main_text">${img[ind].textApartment}</p>`
    time.innerHTML = `<p class="info_main">TIME:</p>
                      <p class="info_main_text">${img[ind].textTime}</p>`
    cost.innerHTML = `<p class="info_main">COST:</p>
                      <p class="info_main_text">${img[ind].textCost}</p>`
    nav_list[ind].setAttribute('id', 'active');
        new_dots_list[ind].id = 'dotActive'
    }

function nextNum(){
    nav_list[ind].removeAttribute('id')
    new_dots_list[ind].removeAttribute('id')
    ind++;
    if (ind < img.length){
        Slader(ind)
    }else {
        ind = 0;
        Slader(ind)
    }
}
    function backNum(){
        nav_list[ind].removeAttribute('id')
        new_dots_list[ind].removeAttribute('id')
        ind--
        if (ind < 0){
            ind = img.length - 1;
            Slader(ind)
        }else {
            Slader(ind)
        }
    }



    admiral.addEventListener('click', () => {
        nav_list[ind].removeAttribute('id')
        new_dots_list[ind].removeAttribute('id')
        ind = 0
        Slader(ind)
    })
    thieves.addEventListener('click', () => {
        nav_list[ind].removeAttribute('id')
        new_dots_list[ind].removeAttribute('id')
        ind = 1
        Slader(ind)
    })
    patriotic.addEventListener('click', () => {
        nav_list[ind].removeAttribute('id')
        new_dots_list[ind].removeAttribute('id')
        ind = 2
        Slader(ind)
    })
    arrowLeft.addEventListener('click', backNum);
    arrowRight.addEventListener('click', nextNum);


}
document.addEventListener('DOMContentLoaded', initSlader)
