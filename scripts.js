function showMenu() {
    let parents = Array.from(document.querySelectorAll('#site-nav > ul > li.site-nav__list-item:not(.site-nav__search)'));
    let menus = Array.from(document.querySelectorAll('.submenu'));
    let bg = document.querySelector('.submenu__bg');
    let open = false;

    parents.forEach(function(parent) {
        parent.addEventListener('click',function() {
            if (open === false) {
                open = true;
                parent.querySelector('a').classList.add('site-nav__item-link--active');
                bg.classList.add('submenu__bg--show');
                menus.forEach(function(menu) {
                    menu.classList.remove('submenu--show');
                });
                for (let i = 0; i < menus.length; i++) {
                    if (parent.querySelector('a').dataset.submenu === menus[i].dataset.submenu) {
                    menus[i].classList.add('submenu--show');
                    }
                    
                }
            } else {
                if (parent.querySelector('a').classList.contains('site-nav__item-link--active')) {
                    open = false;
                    parent.querySelector('a').classList.remove('site-nav__item-link--active');

                    bg.classList.remove('submenu__bg--show');
                    menus.forEach(function(menu) {
                        menu.classList.remove('submenu--show');
                    });
                } else {
                    parents.forEach(function(parent) {
                        parent.querySelector('a').classList.remove('site-nav__item-link--active');
                    });
                    parent.querySelector('a').classList.add('site-nav__item-link--active');
                    menus.forEach(function(menu) {
                        menu.classList.remove('submenu--show');
                    });
                    for (let i = 0; i < menus.length; i++) {
                        if (parent.querySelector('a').dataset.submenu === menus[i].dataset.submenu) {
                        menus[i].classList.add('submenu--show');
                        }
                        
                    }
                }

            }

        });
    });
}

function footerAccordions() {
    let accordions = document.querySelectorAll('.mob-footer__list-item');
    accordions.forEach(function(accordion) {
        let body = accordion.querySelector('.mob-footer__section-list');
        accordion.addEventListener('click',function() {
            $(accordion).toggleClass('mob-footer__list-item--expanded');
            $(body).slideToggle();
        });
    });
}

function search() {
    let search = document.querySelector('#site-search');
    let toggle = document.querySelector('.site-nav__search');

    toggle.addEventListener('click',function() {
        $(toggle).find('a').toggleClass('site-nav__item-link--active');
        $(search).toggleClass('site-search--show');
    });
    
}

function mobileMenu() {
    let toggle = document.querySelector('.site-nav-mobile__menu-toggle');
    let mobileNav = document.querySelector('#site-nav-mobile');

    toggle.addEventListener('click',function() {
        $(mobileNav).toggleClass('site-nav-mobile--expanded');
    });
}

window.onload = function() {
    try {
        search();
        mobileMenu();
        showMenu();
        footerAccordions();
        // console.log('js');
    } catch(e) {
        console.log(e);
    }
} 