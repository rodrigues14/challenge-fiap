const main = document.querySelector("main");

// user registration
const btnConfirmar = document.querySelector("#btn-confirm");
const userName = document.querySelector("#name");

const inputNome = document.querySelector("#input-name");
const inputEmail = document.querySelector("#input-email");
const inputCarro = document.querySelector("#input-carro");
const inputSenha = document.querySelector("#input-senha");

function addUserData() {
  const header = document.querySelector("header");
  const divAddName = document.querySelector("#registration");

  if (inputNome.value == "" || inputEmail.value == '' || inputCarro.value == '' || inputSenha.value == '') {
    returnMsgErro("Todos os campos precisam ser preenchidos!");
  } else {

    header.classList.remove("hide");
    main.classList.remove("hide");
    divAddName.style.display = "none";

    // change the name in h1
   userName.textContent = inputNome.value;
  }
}

btnConfirmar.addEventListener("click", (e) => {
  e.preventDefault();
  addUserData();

  nameCurrent.textContent = inputNome.value;
  emailCurrent.textContent = inputEmail.value;
  carroCurrent.textContent = inputCarro.value;
  senhaCurrent.textContent = inputSenha.value;

});


const config = document.querySelector("#config");
const btnConfig = document.querySelector("#btn-config");
const btnVoltar = document.querySelector("#btn-voltar");

btnConfig.addEventListener('click', (e) => {

  e.preventDefault();
  config.classList.remove("hide");
  main.classList.add("hide");
  toggleMenu();

  btnVoltar.addEventListener('click', (e) => {
    e.preventDefault();
    config.classList.add("hide");
    main.classList.remove("hide");
  })
});


const btnEditName = document.querySelector('#editName');
const btnEditEmail = document.querySelector('#editEmail');
const btnEditCarro = document.querySelector('#editCarro');
const btnEditSenha = document.querySelector('#editSenha');

const inputAttNome = document.querySelector('#input-att-name');
const inputAttEmail = document.querySelector('#input-att-email');
const inputAttCarro = document.querySelector('#input-att-carro');
const inputAttSenha = document.querySelector('#input-att-senha');

let nameCurrent = document.querySelector('#nameCurrent');
let emailCurrent = document.querySelector('#emailCurrent');
let carroCurrent = document.querySelector('#carroCurrent');
let senhaCurrent = document.querySelector('#senhaCurrent');


const btnAlterar = document.querySelector('#btn-alterar');

function editData(inputEdit, current) {

  inputEdit.classList.toggle('hide');
  current.classList.toggle('hide');

  inputEdit.value = current.textContent;
  inputEdit.focus();

  btnAlterar.classList.remove('hide');

}


function newData(input, current) {

  btnAlterar.addEventListener('click', (e) => {
    e.preventDefault();

    if (input.value == "") {
      returnMsgErro("Não pode alterar o valor para vazio!");
      input.focus();
    } else {

      current.textContent = input.value;

      input.classList.add('hide');
      current.classList.remove('hide');

      // att the name in h1
      userName.textContent = inputAttNome.value;
    }
  })

}

btnEditName.addEventListener('click', () => {
  newData(inputAttNome, nameCurrent);
  editData(inputAttNome, nameCurrent);
});

btnEditEmail.addEventListener('click', () => {
  newData(inputAttEmail, emailCurrent);
  editData(inputAttEmail, emailCurrent);
});

btnEditCarro.addEventListener('click', () => {
  newData(inputAttCarro, carroCurrent);
  editData(inputAttCarro, carroCurrent);
});

btnEditSenha.addEventListener('click', () => {
  newData(inputAttSenha, senhaCurrent);
  editData(inputAttSenha, senhaCurrent);
});