import { addClass, removeClass, getElement } from './script.js';

const $btnMenu = getElement('.btn-menu');

$btnMenu.addEventListener('click', ()=> {
    if($btnMenu.classList.contains('close')){
        removeClass($btnMenu, 'close');
        addClass($btnMenu, 'open');
    } else {
        addClass($btnMenu, 'close');
        removeClass($btnMenu, 'open');
    }
});