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
    // console.log(parents);
    // for (let i = 0; i < parents.length; i++) {
    //     parents[i].addEventListener('click',function() {
    //         if (parents[i].dataset.submenu === menus[i].dataset.submenu) {

    //             menus[i].classList.add('submenu-show');
    //         }
    //     });
        
    // }
}

window.onload = function() {
    try {
        showMenu();
        // console.log('js');
    } catch(e) {
        console.log(e);
    }
} 