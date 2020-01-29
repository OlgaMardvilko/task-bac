window.onload = function () {

    const iconMobileMenuOpen = document.querySelector('.js-header-menu__btn.fa-bars');
    const iconMobileMenuClose = document.querySelector('.js-header-menu__btn.fa-times');
    const mobileNavigation = document.querySelector('.js-dropdown-mob-menu');

    const toggleMobileNavigation = (content, className) => {
        content.classList.toggle(className);
    };

    iconMobileMenuOpen.addEventListener('click', (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        toggleMobileNavigation(mobileNavigation, 'js-dropdown-mob-menu--opened');
        toggleMobileNavigation(iconMobileMenuClose, 'js-open--menu');
        toggleMobileNavigation(iconMobileMenuOpen, 'js-open--menu');
    });

    iconMobileMenuClose.addEventListener('click', (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        toggleMobileNavigation(mobileNavigation, 'js-dropdown-mob-menu--opened');
        toggleMobileNavigation(iconMobileMenuOpen, 'js-open--menu');
        toggleMobileNavigation(iconMobileMenuClose, 'js-open--menu');
    });

}