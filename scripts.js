function showMenu() {
    let parents = Array.from(document.querySelectorAll('#site-nav > ul > li.site-nav__list-item > a'));
    let menus = Array.from(document.querySelectorAll('.submenu'));
    let bg = document.querySelector('.submenu__bg');
    let open = false;

    parents.forEach(function(parent) {
        parent.addEventListener('click',function() {
            if (open === false) {
                open = true;
                console.log(open);
                $(bg).toggleClass('submenu__bg--show');
                menus.forEach(function(menu) {
                    menu.classList.remove('submenu--show');
                });
                for (let i = 0; i < menus.length; i++) {
                    if (parent.dataset.submenu === menus[i].dataset.submenu) {
                    menus[i].classList.add('submenu--show');
                    }
                    
                }
            } else {
                open = false;
                $(bg).toggleClass('submenu__bg--show');

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