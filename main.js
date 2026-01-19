
let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

// adiciona um 'fofoqueiro' que avisa o que o ususraio esta executando
trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})