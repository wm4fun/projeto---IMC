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

// variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}

form.onsubmit = event => {
    event.preventDefault() // evite o padrão de enviar o formulário e recarregar a página
    
    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

Modal.buttonClose.onclick = () => {
    Modal.close()
}

function IMC(weight, height) {
    return(weight / ((height / 100) ** 2)).toFixed(2)
}



