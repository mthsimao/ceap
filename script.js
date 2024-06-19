let dropdown1 = document.querySelector('.dropdown')
let dropdown_content = document.querySelector('.dropdown-content')
let dropdown_click1 = document.querySelector('.dropdown-click')

dropdown_click1.addEventListener('click', () =>{
    dropdown1.classList.toggle('show')
})