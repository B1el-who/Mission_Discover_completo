export default function Modal(){
    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')
    

    cancelButton.addEventListener("click", close)

    function open(){
        //funcionalidade de atribuir a classe active para o madal
        modalWrapper.classList.add("active")
    }
    function close(){
        //funciionalidade de remover a classe active da modal
        modalWrapper.classList.remove("active")
    }

    return{
        open,
        close
    }
}
