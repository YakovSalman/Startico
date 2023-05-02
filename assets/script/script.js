document.addEventListener("DOMContentLoaded", function () {

    const menu = document.querySelector('#menu');

    const nav = document.querySelector('#nav');
    const header = document.querySelector('#header');
    const links = document.querySelectorAll(".nav__link");
    const intro = document.querySelector('#intro');

    window.addEventListener('scroll', () => {
        let scroll = window.scrollY;
        let scrollIntro = intro.scrollHeight;

        if (scroll >= scrollIntro) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    });
    function burgerMenu() {
        menu.addEventListener('click', (e) => {
            e.preventDefault();
            menu.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.classList.toggle('active');


        });
    }
    burgerMenu();

    links.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();

        let href = e.target.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);

        const topOffset =  document.querySelector('.header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const ofsetPosition = elementPosition - topOffset;

        window.scrollBy({
          top: ofsetPosition,
          behavior: 'smooth',
        });
        menu.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('active');
        });
    });

});



