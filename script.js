const modalElement = document.querySelector('.modal')
const iframe = document.getElementById("video")
const link = iframe.src

const closeModal = document.querySelector('.fechar-modal').addEventListener('click', ()=>{
    modalElement.style.visibility = 'hidden'
    iframe.setAttribute('src', '')
})

const buttonTrailer = document.querySelector('.button').addEventListener('click',()=>{
    modalElement.style.visibility = 'visible';
    iframe.setAttribute('src', link)
});



 
