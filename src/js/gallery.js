import dishes from '../menu.json';
import items from '../templates/menu-items.hbs';


const menuRef = document.querySelector('.js-menu');

const markup = items(dishes);
menuRef.insertAdjacentHTML('beforeend', markup);
