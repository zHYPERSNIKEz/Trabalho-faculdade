--CREATE DATABASE SistemaEmprego;
--USE SistemaEmprego;

--CREATE TABLE Usuarios (
--    UsuarioID INT IDENTITY(1,1) PRIMARY KEY,
--    Email NVARCHAR(100) UNIQUE NOT NULL,
--    SenhaHash VARBINARY(64) NOT NULL, -- SHA256
--    TipoUsuario VARCHAR(20) CHECK (TipoUsuario IN ('Empresa', 'Candidato')) NOT NULL,
--    DataCriacao DATETIME DEFAULT GETDATE()
--);

--CREATE TABLE Empresas (
--    EmpresaID INT PRIMARY KEY, -- mesmo ID do usuário
--    NomeEmpresa NVARCHAR(150) NOT NULL,
--    CNPJ VARCHAR(20) NOT NULL,
--    FOREIGN KEY (EmpresaID) REFERENCES Usuarios(UsuarioID)
--);

--CREATE TABLE Candidatos (
--    CandidatoID INT PRIMARY KEY, -- mesmo ID do usuário
--    NomeCompleto NVARCHAR(150) NOT NULL,
--    CPF VARCHAR(14) NOT NULL,
--    Idade INT NOT NULL,
--    FOREIGN KEY (CandidatoID) REFERENCES Usuarios(UsuarioID)
--);

--CREATE TABLE Vagas (
--    VagaID INT IDENTITY(1,1) PRIMARY KEY,
--    EmpresaID INT NOT NULL,
--    Funcao NVARCHAR(100) NOT NULL,
--    Salario DECIMAL(10, 2),
--    Endereco NVARCHAR(255),
--    DataCriacao DATETIME DEFAULT GETDATE(),
--    FOREIGN KEY (EmpresaID) REFERENCES Empresas(EmpresaID)
--);

--CREATE TABLE Candidaturas (
--    CandidaturaID INT IDENTITY(1,1) PRIMARY KEY,
--    CandidatoID INT NOT NULL,
--    VagaID INT NOT NULL,
--    DataCandidatura DATETIME DEFAULT GETDATE(),
--    FOREIGN KEY (CandidatoID) REFERENCES Candidatos(CandidatoID),
--    FOREIGN KEY (VagaID) REFERENCES Vagas(VagaID)
--);

