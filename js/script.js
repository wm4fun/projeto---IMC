// 3 maneiras de criar e atribuir função a um evento
// 1ª
// form.onsubmit = function(event) {
//     event.preventDefault() // evite o padrão de enviar o formulário e recarregar a página

//     const weight = inputWeight.value
//     const height = inputHeight.value

//     console.log(weight, height)
// }

// 2ª - arrow function
// form.onsubmit = event => {
//     event.preventDefault() // evite o padrão de enviar o formulário e recarregar a página
    
//     const weight = inputWeight.value
//     const height = inputHeight.value

//     console.log(weight, height)
// }

// 3ª
// form.onsubmit = handleSubmit
// function handleSubmit(event) {
//     event.preventDefault() // evite o padrão de enviar o formulário e recarregar a página
    
//     const weight = inputWeight.value
//     const height = inputHeight.value

//     console.log(weight, height)
// }

import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'

// variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = event => {
    event.preventDefault() // evite o padrão de enviar o formulário e recarregar a página
    
    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notANumber(weight) || notANumber(height)

    if(showAlertError) {
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

function notANumber(value) {
    return isNaN(value) || value == ""
}

function IMC(weight, height) {
    return(weight / ((height / 100) ** 2)).toFixed(2)
}




