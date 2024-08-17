import { addClass, removeClass } from "./script.js";

const $btnLight = document.querySelector('.btn-light');
const $btnDark = document.querySelector('.btn-dark');
const $switchContainer = document.querySelector('#switch-container');
const $btnSwitch = document.querySelector('.switch-btn');

// Função para atualizar as classes do switch-container
function updateSwitchContainer() {
  if(document.documentElement.classList.contains('dark-mode')){
    addClass($switchContainer, 'dark');
    removeClass($switchContainer, 'light');
  } else {
    removeClass($switchContainer, 'dark');
    addClass($switchContainer, 'light');
  }
}

// Função para salvar o estado no localStorage
function saveModeToLocalStorage(isDarkMode) {
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Função para aplicar o modo escuro ou claro
function applyMode(isDarkMode) {
  if(isDarkMode) {
    addClass(document.documentElement, 'dark-mode');
  } else {
    removeClass(document.documentElement, 'dark-mode');
  }
  updateSwitchContainer();
  saveModeToLocalStorage(isDarkMode);
}

// Eventos dos botões
$btnDark.addEventListener('click', () => {
  applyMode(true);
});

$btnLight.addEventListener('click', () => {
  applyMode(false);
});

$btnSwitch.addEventListener('click', () => {
  const isDarkMode = !document.documentElement.classList.contains('dark-mode');
  applyMode(isDarkMode);
});

// Carregar o estado do localStorage ao iniciar
document.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('darkMode');
  const isDarkMode = savedMode === 'enabled';
  applyMode(isDarkMode);
});