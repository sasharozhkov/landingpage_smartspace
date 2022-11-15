const swiper = new Swiper('.slider-main-block', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.body-main-block__arrow.swiper-button-next',
        prevEl: '.body-main-block__arrow.swiper-button-prev',
    },
});

"user strict";

/* burger menu*/
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

/* scroll to click */
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            /* close burger to click */
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

window.onscroll = function () { myFunction() };

/* progress bar */
const header = document.querySelector('header');
function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    var top = window.scrollY;
    document.getElementById("myBar").style.width = scrolled + "%";

    /* change background when page scroll */
    if (top >= 50) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }

    /* change size header__container when page scroll */
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        document.getElementById("header__container")
            .style.minHeight = "52px";
    }
    else {
        document.getElementById("header__container")
            .style.minHeight = "104px";
    }
}


