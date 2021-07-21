import items from './menu-items.hbs';
import dishes from './menu.json';
import '../images.sprite.svg';
import './styles.css';



const menuRef = document.querySelector('.js-menu');

const markup = createMenu(dishes);
menuRef.insertAdjacentHTML('beforeend', markup);

//function createMenu(dishes) {
//    return dishes.map(items), join('');
//}