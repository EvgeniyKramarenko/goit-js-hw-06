const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', (event) => {
    
    return event.currentTarget.value.length < Number(validationInput.dataset.length)
        ? validationInput.setAttribute('class', 'invalid')
        : validationInput.setAttribute('class', 'valid')
    
})


