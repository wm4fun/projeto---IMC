// variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close')



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



form.onsubmit = event => {
    event.preventDefault() // evite o padrão de enviar o formulário e recarregar a página
    
    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    modalMessage.innerText = message
    modalWrapper.classList.add('open')
}

modalBtnClose.onclick = () => {
    modalWrapper.classList.remove('open')
}

function IMC(weight, height) {
    return(weight / ((height / 100) ** 2)).toFixed(2)
}



