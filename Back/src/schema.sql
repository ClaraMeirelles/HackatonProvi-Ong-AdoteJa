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