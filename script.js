// variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// 3 maneiras de criar e atribuir função a um evento
// 1ª
// form.onsubmit = function(event) {
//     event.preventDefault() // evite o padrão de enviar o formulário e recarregar a página

//     const weight = inputWeight.value
//     const height = inputHeight.value

//     console.log(weight, height)
// }

// 2ª - arrow function
form.onsubmit = event => {
    event.preventDefault() // evite o padrão de enviar o formulário e recarregar a página
    
    const weight = inputWeight.value
    const height = inputHeight.value

    console.log(weight, height)
}

// 3ª
// form.onsubmit = handleSubmit
// function handleSubmit(event) {
//     event.preventDefault() // evite o padrão de enviar o formulário e recarregar a página
    
//     const weight = inputWeight.value
//     const height = inputHeight.value

//     console.log(weight, height)
// }




