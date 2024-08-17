function showMenu() {
    let parents = Array.from(document.querySelectorAll('#site-nav > ul > li.site-nav__list-item'));
    let menus = Array.from(document.querySelectorAll('submenu'));

    // parents.forEach(function(parent) {
    //     parent.addEventListener('click',function() {
    //         if (parent.dataset.submenu === )
    //     });
    // });

    for (let parents = 0; parents < parents.length; parents++) {
        parents[i].addEventListener('click',function() {
            console.log(i);
            if (parents[i].dataset.submenu === menus[i].dataset.submenu) {
                menus[i].classList.add('submenu-show');
            }
        });

        
    }
}

window.onload = function() {
    try {
        showMenu();
        // console.log('js');
    } catch(e) {
        console.log(e);
    }
} 