// Adiciona a classe especificada ao elemento
export function addClass(element, className) {
    element.classList.add(className);
  }
  
  // Remove a classe especificada do elemento
  export function removeClass(element, className) {
    element.classList.remove(className);
  }
  
  // Valida se o email corresponde ao padrão de email comum
  export function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
  
  // Valida se a senha contém pelo menos 6 caracteres e inclui pelo menos um número
  export function validatePass(pass) {
    const passPattern = /^(?=.*\d)[a-zA-Z\d]{6,}$/;
    return passPattern.test(pass);
  }
  
  export function showError(inputElement, errorElement, message, labelElement) {
    addClass(inputElement, 'error');
    addClass(labelElement, 'error');
    errorElement.textContent = message;
    errorElement.classList.remove('hide');
  }
  
  export function clearError(inputElement, errorElement, labelElement) {
    removeClass(inputElement, 'error');
    removeClass(labelElement, 'error');
    addClass(inputElement, 'hide');
    errorElement.textContent = '';
  }
  
  export function togglePasswordVisibility(passwordField, toggleButton, showClass, hideClass) {
    if (passwordField.type === 'password') {
      passwordField.type = 'text'; // Mostra a senha
      removeClass(toggleButton, hideClass);
      addClass(toggleButton, showClass);
    } else {
      passwordField.type = 'password'; // Oculta a senha
      removeClass(toggleButton, showClass);
      addClass(toggleButton, hideClass);
    }
  }

export function getElement(selector) {
    return document.querySelector(selector);
}

export function getElementAll(selector) {
    return document.querySelectorAll(selector);
}