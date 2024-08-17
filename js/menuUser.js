import { addClass, removeClass, getElement } from'./script.js';

const $btnMenuUser = getElement('.btn-user-menu');
const $headerArea = getElement('.header-user-area');
const $set = getElement('.set');

$btnMenuUser.addEventListener('click', (event) => {
    event.stopPropagation();
    if($headerArea.classList.contains('close')){
        removeClass($headerArea, 'close');
        $set.style.display = 'block';
    } else {
        addClass($headerArea, 'close');
        $set.style.display = 'none';
    }
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (event) => {
    const isClickInsideMenu = $headerArea.contains(event.target) || $btnMenuUser.contains(event.target);
    if (!isClickInsideMenu) {
        addClass($headerArea, 'close');
        $set.style.display = 'none';
    }
});
