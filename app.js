const dropdownButton = document.querySelector('.user-profile')
const dropdownMenu = document.querySelector('.dropdown-menu')
const dropdownArrow = document.querySelector('.arrow')

dropdownButton.addEventListener('click', () =>{
  dropdownMenu.classList.toggle('open')

  if(dropdownArrow.classList.contains('ph-caret-down')){
    dropdownArrow.classList.remove('ph-caret-down')
    dropdownArrow.classList.add('ph-caret-left')
  }else if(dropdownArrow.classList.contains('ph-caret-left')){
    dropdownArrow.classList.remove('ph-caret-left')
    dropdownArrow.classList.add('ph-caret-down')
  }
})

