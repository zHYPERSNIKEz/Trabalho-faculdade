window.onload = function () {
  const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
  if (usuario) {
    document.getElementById('authSection').style.display = 'none';
    document.getElementById('vagaSection').style.display = 'block';
    document.getElementById('userNome').textContent = usuario.nome;
  }
};

function mostrarCadastro() {
  document.getElementById('authSection').style.display = 'none';
  document.getElementById('cadastroSection').style.display = 'block';
}

function cancelarCadastro() {
  document.getElementById('cadastroSection').style.display = 'none';
  document.getElementById('authSection').style.display = 'block';
}

function cadastrar() {
  const nome = document.getElementById('nomeCadastro').value;
  const email = document.getElementById('emailCadastro').value;
  const senha = document.getElementById('senhaCadastro').value;

  if (!nome || !email || !senha) {
    alert("Preencha todos os campos");
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  if (usuarios.find(u => u.email === email)) {
    alert("Email já cadastrado");
    return;
  }

  usuarios.push({ nome, email, senha });
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  alert("Cadastro realizado com sucesso");
  cancelarCadastro();
}

function login() {
  const email = document.getElementById('emailLogin').value;
  const senha = document.getElementById('senhaLogin').value;

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const usuario = usuarios.find(u => u.email === email && u.senha === senha);

  if (!usuario) {
    alert("Usuário ou senha inválidos");
    return;
  }

  localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
  location.reload();
}

function logout() {
  localStorage.removeItem('usuarioLogado');
  location.reload();
}

function publicarVaga() {
  const cnpj = document.getElementById('cnpj').value;
  const empresa = document.getElementById('empresa').value;
  const email = document.getElementById('emailEmpresa').value;
  const vaga = document.getElementById('vaga').value;
  const contratacao = document.getElementById('contratacao').value;

  const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
  if (!usuario) {
    alert("Você precisa estar logado");
    return;
  }

  const vagas = JSON.parse(localStorage.getItem('vagas')) || [];
  vagas.push({
    cnpj,
    empresa,
    email,
    vaga,
    contratacao,
    publicadoPor: usuario.nome
  });

  localStorage.setItem('vagas', JSON.stringify(vagas));
  alert("Vaga publicada!");

  document.getElementById('cnpj').value = '';
  document.getElementById('empresa').value = '';
  document.getElementById('emailEmpresa').value = '';
  document.getElementById('vaga').value = '';
}

function mostrarVagas() {
  const vagas = JSON.parse(localStorage.getItem('vagas')) || [];
  const container = document.getElementById('lista-vagas');

  if (!container) return;

  container.innerHTML = '';

  vagas.forEach(vaga => {
    const div = document.createElement('div');
    div.className = 'card-vaga';

    div.innerHTML = `
      <h3>${vaga.nome || vaga.vaga}</h3>
      <p><strong>Email:</strong> ${vaga.email}</p>
      <p><strong>Empresa:</strong> ${vaga.empresa}</p>
    `;

    container.appendChild(div);
  });
}

window.addEventListener('DOMContentLoaded', mostrarVagas);
