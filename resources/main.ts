
import './sass/style.scss';
import burgerMenu from './ts/components/burgermenu';

// Burger menu for mobile screens
burgerMenu({
    container: 'burger-menu',
    active: 'open-menu',
    onClose: () => {
        document.body.classList.remove('active-mobile-menu');
    },
    onOpen: () => {
        document.body.classList.add('active-mobile-menu');
    }
});
