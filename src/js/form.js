const form = document.querySelector('.dados');
const fullName = document.getElementById('name');
const correio = document.getElementById('email');
const contato = document.getElementById('telefone');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  validarNome();
  validarEmail();
  validarContato();
  validarSms();
});

function validarNome() {
  const nomeCompletoValue = fullName.value;

  if (nomeCompletoValue === '') {
    errorInput(fullName, 'campo obrigatório');
  } else {
    const formItem = fullName.parentElement;
    formItem.classList = 'form-content succes';
  }
}

function validarEmail() {
  const correioValue = correio.value;

  if (correioValue === '') {
    errorInput(correio, 'campo obrigatório');
  } else {
    const formItem = correio.parentElement;
    formItem.classList = 'form-content succes';
  }
}

function validarContato() {
  const contatoValue = contato.value;

  if (contatoValue === '') {
    errorInput(contato, 'campo obrigatório');
  } else {
    const formItem = contato.parentElement;
    formItem.classList = 'form-content succes';
  }
}

function validarSms() {
  const mensagemValue = mensagem.value;

  if (mensagemValue === '') {
    errorInput(mensagem, 'campo obrigatório');
  } else {
    const formItem = mensagem.parentElement;
    formItem.classList = 'form-content succes';
  }
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector('p');

  textMessage.innerText = message;

  formItem.className = 'form-content error';
}

function succes(input) {
  const formItem = input.parentElement;

  formItem.className = 'form-content succes';
}