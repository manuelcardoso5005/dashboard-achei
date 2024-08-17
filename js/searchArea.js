import { addClass, removeClass, getElement } from './script.js';

const $btnSearch = getElement('.btn-search');
const $searchArea = getElement('.search-area');

$btnSearch.addEventListener('click', ()=> {
    if($searchArea.classList.contains('open')){
        removeClass($searchArea, 'open');
    } else {
        addClass($searchArea, 'open');
    }
});
