const home = document.querySelector('.Home');
const menu = document.querySelector('.Menu');
const contact = document.querySelector('.Contact');
const main = document.querySelector('.main-page');
const title = document.querySelector('h3');
const container = document.querySelector('.container');
let newMenu = document.createElement('div');
let right = document.createElement('ul');
let left = document.createElement('ul');
const pop = document.querySelector('.popup');
let Cont = document.createElement('div');
const right_pop  = document.querySelector('.right-pop');
const left_pop = document.querySelector('.left-pop');

pop.style.display = 'none';

container.appendChild(newMenu);
container.appendChild(right);
container.appendChild(left);
container.appendChild(Cont);



function hide() {
    main.style.display = 'none';
    newMenu.style.display = 'flex';
    left.style.display = 'flex';
    right.style.display = 'flex';
    Cont.style.display = 'none';
    
    left.classList.add('left-side');
    newMenu.classList.add('new-menu');
    right.classList.add('right-side');
    
    newMenu.innerHTML = '<h3>Fetune Menu</h3>';
    left.innerHTML = '<h3>Dinner Fetuccine</h3>' + '<li>Fretir Fra</li>' + '<li>Fretir Tra' + '<li>Fretir Sallad</li>' + '<li>Fretir Tril</li>';


    right.innerHTML = '<h3>Fetune Specials</h3>' + '<li>Fretir Fra</li>' + '<li>Fretir Tra' + '<li>Fretir Sallad</li>' + '<li>Fretir Tril</li>';
    
}

function Show(){
    main.style.display = 'flex';
    newMenu.style.display = 'none';
    right.style.display = 'none';
   left.style.display = 'none';

    Cont.style.display = 'none';
}



function Menu() {
    newMenu.style.display = 'none';
    right.style.display = 'none';
    left.style.display = 'none';
    Cont.style.display = 'flex';
    Cont.classList.add('contact');
    main.style.display = 'none';

    Cont.innerHTML = '<h3>Contact Us!</h3>' + '<p>Phone: 070-1234567</p>' + '<p>Email: Shadalrawi2005@gmail.com';
}








