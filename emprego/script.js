function adicionarVaga() {
  const cnpj = document.getElementById('cnpj').value;
  const empresa = document.getElementById('empresa').value;
  const email = document.getElementById('email').value;
  const vaga = document.getElementById('vaga').value;
  const contratacao = document.getElementById('contratacao').value;

  if (!cnpj || !empresa || !email || !vaga || !contratacao) {
    alert("Preencha todos os campos!");
    return;
  }

  const tabela = document.getElementById('tabelaVagas');
  const novaLinha = tabela.insertRow();

  novaLinha.insertCell(0).textContent = cnpj;
  novaLinha.insertCell(1).textContent = empresa;
  novaLinha.insertCell(2).textContent = email;
  novaLinha.insertCell(3).textContent = vaga;
  novaLinha.insertCell(4).textContent = contratacao;

  // Limpa os campos
  document.getElementById('cnpj').value = '';
  document.getElementById('empresa').value = '';
  document.getElementById('email').value = '';
  document.getElementById('vaga').value = '';
  document.getElementById('contratacao').value = 'CLT';
}

// Função chamada ao carregar a página
window.onload = function () {
  carregarVagasSalvas();
};

function adicionarVaga() {
  const cnpj = document.getElementById('cnpj').value;
  const empresa = document.getElementById('empresa').value;
  const email = document.getElementById('email').value;
  const vaga = document.getElementById('vaga').value;
  const contratacao = document.getElementById('contratacao').value;

  if (!cnpj || !empresa || !email || !vaga || !contratacao) {
    alert("Preencha todos os campos!");
    return;
  }

  // Cria um objeto com os dados
  const novaVaga = {
    cnpj,
    empresa,
    email,
    vaga,
    contratacao
  };

  // Pega o array atual do localStorage ou cria um novo
  const vagas = JSON.parse(localStorage.getItem('vagas')) || [];

  // Adiciona a nova vaga
  vagas.push(novaVaga);

  // Salva de volta no localStorage
  localStorage.setItem('vagas', JSON.stringify(vagas));

  // Adiciona na tabela
  adicionarLinhaNaTabela(novaVaga);

  // Limpa os campos
  document.getElementById('cnpj').value = '';
  document.getElementById('empresa').value = '';
  document.getElementById('email').value = '';
  document.getElementById('vaga').value = '';
  document.getElementById('contratacao').value = 'CLT';
}

function adicionarLinhaNaTabela(vaga) {
  const tabela = document.getElementById('tabelaVagas');
  const novaLinha = tabela.insertRow();

  novaLinha.insertCell(0).textContent = vaga.cnpj;
  novaLinha.insertCell(1).textContent = vaga.empresa;
  novaLinha.insertCell(2).textContent = vaga.email;
  novaLinha.insertCell(3).textContent = vaga.vaga;
  novaLinha.insertCell(4).textContent = vaga.contratacao;
}

function carregarVagasSalvas() {
  const vagas = JSON.parse(localStorage.getItem('vagas')) || [];
  vagas.forEach(vaga => adicionarLinhaNaTabela(vaga));
}
    