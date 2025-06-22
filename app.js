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


const apiURL = "https://jsonplaceholder.typicode.com/users/7";

const headerUsername = document.getElementById("header-username")
const profileUsername = document.getElementById("profile-username");
const username = document.getElementById("username");
const fullname = document.getElementById("fullname");
const email = document.getElementById("user-email");
const phone = document.getElementById("phone");

const inputUsername = document.getElementById("user-actual-username");
const inputFullname = document.getElementById("user-actual-fullname");
const inputEmail = document.getElementById("user-actual-email");
const inputPhone = document.getElementById("user-actual-number");

const toggleButton = document.getElementById("switch-button");
let isEditing = false; 

function carregarDados() {
  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
      headerUsername.textContent = data.username;
      profileUsername.textContent = data.username;
      username.textContent = data.username;
      fullname.textContent = data.name;
      email.textContent = data.email;
      phone.textContent = data.phone;

      inputUsername.value = data.username;
      inputFullname.value = data.name;
      inputEmail.value = data.email;
      inputPhone.value = data.phone;

      alternarVisibilidadeInputs(false);
    })
    .catch((err) => console.error("Erro ao carregar dados:", err));
}


function alternarVisibilidadeInputs(editar) {
  const inputs = document.querySelectorAll(".text-box");
  const textos = document.querySelectorAll(".user-info");

  inputs.forEach((input) => input.style.display = editar ? "block" : "none");
  textos.forEach((p) => p.style.display = editar ? "none" : "block");
  toggleButton.textContent = editar ? "Salvar" : "Editar";
}


toggleButton.addEventListener("click", () => {
  if (!isEditing) {
    alternarVisibilidadeInputs(true);
  } else {
    const dadosAtualizados = {
      headerUsername: inputUsername.value,
      profileUsername: inputUsername.value,
      username: inputUsername.value,
      name: inputFullname.value,
      email: inputEmail.value,
      phone: inputPhone.value
    };

    fetch(apiURL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dadosAtualizados)
    })
      .then((res) => res.json())
      .then((data) => {
        headerUsername.textContent = data.headerUsername
        profileUsername.textContent = data.profileUsername
        username.textContent = data.username;
        fullname.textContent = data.name;
        email.textContent = data.email;
        phone.textContent = data.phone;

        alternarVisibilidadeInputs(false);
      })
      .catch((err) => console.error("Erro ao salvar:", err));
  }

  isEditing = !isEditing;
});

document.addEventListener("DOMContentLoaded", carregarDados);
