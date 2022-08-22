

const menu = document.querySelector('#menu');

const nav = document.querySelector('#nav');
const header = document.querySelector('#header');
const introPhoto = document.querySelector('#intro__photo');
const navLink = document.querySelectorAll('#nav__link');



function burgerMenu() {
    menu.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.toggle('active');
        nav.classList.toggle('active');

    });
}
burgerMenu();



header.classList.add('active');




    const links = document.querySelectorAll(".nav__link");

document.addEventListener("DOMContentLoaded", function () {

    for(let item of links) {
        item.addEventListener('click', (event) => {
            event.preventDefault();

            const blockID = event.target.getAttribute('href').substr(1);


            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: "start",
            });
        });
    }

});



