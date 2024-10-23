export const Modal = {
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

Modal.buttonClose.onclick = () => {
    Modal.close()
}

// método alternativo, porém neste método só é aceito um por arquivo, e sempre pega o último "onkeydown"
// window.onkeydown = handleKeydown
// function handleKeydown(event) {
// }

// método com addEventListener, pode se repetir utilizando outros registros de "keydown"
window.addEventListener('keydown', handleKeydown)
function handleKeydown(event) {
    if(event.key === 'Escape') {
        Modal.close()
    }
}




