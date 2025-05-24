const { sql, conectar } = require('./db');

async function buscarDados() {
  await conectar();

  try {
    const result = await sql.query('SELECT * FROM sua_tabela');
    console.log(result.recordset);
  } catch (err) {
    console.error('Erro ao buscar dados', err);
  }
}

buscarDados();
