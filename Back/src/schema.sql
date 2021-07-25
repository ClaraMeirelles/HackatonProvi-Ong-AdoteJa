CREATE DATABASE ong_adote_ja;

CREATE TABLE IF NOT EXISTS gestor(
  id SERIAL PRIMARY KEY,  
  email TEXT UNIQUE NOT NULL, 
  senha TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS voluntarios(
  id serial primary key, 
  nome TEXT NOT NULL,
  cpf TEXT NOT NULL,
  genero TEXT NOT NULL,
  email TEXT NOT NULL, 
  telefone TEXT NOT NULL, 
  endereco TEXT NOT NULL, 
  categoria TEXT NOT NULL, 
  descricao TEXT,
  data TIMESTAMPTZ DEFAULT NOW()
); 

CREATE TABLE IF NOT EXISTS depoimentos(
  id SERIAL PRIMARY KEY, 
  nome TEXT NOT NULL,
  cpf TEXT NOT NULL,
  genero TEXT NOT NULL,
  email TEXT NOT NULL, 
  telefone TEXT NOT NULL, 
  endereco TEXT NOT NULL, 
  animal TEXT NOT NULL, 
  descricao TEXT NOT NULL,
  data TIMESTAMPTZ DEFAULT NOW()
); 

CREATE TABLE depoimento_fotos(
	id SERIAL PRIMARY KEY,
  	depoimento_id INT NOT NULL, 
  	imagem TEXT NOT NULL, 
  	FOREIGN KEY (depoimento_id) REFERENCES depoimentos (id)
); 
