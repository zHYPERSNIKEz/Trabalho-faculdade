const sql = require('mssql');

const config = {
  user: 'seu_usuario',
  password: 'sua_senha',
  server: 'localhost',
  database: 'nome_do_banco',
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

async function conectar() {
  try {
    await sql.connect(config);
    console.log('Conectado ao SQL Server');
  } catch (err) {
    console.error('Erro na conexão', err);
  }
}

module.exports = { sql, conectar };
