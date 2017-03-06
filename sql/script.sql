create database tecnews;
use tecnews;

create table usuario (
    id int(8) primary key auto_increment,
    email varchar(50),
    senha varchar(50),
    token varchar(32),
    ativo int(1)
);

create table publicacao (
    id int(8) primary key auto_increment,
    id_usuario int(8),
    tipo varchar(50),
    titulo varchar(50),
    conteudo varchar(1000),
    tag varchar(1000),
    data datetime,
    ativo int(1)
);

create table registro (
    id int(8) primary key auto_increment,
    email varchar(50),
    ativo int(1)
);

create table email(
  id int primary key auto_increment,
  email varchar(50),
  token varchar(32)
);

create table sugestao (
    id int(8) primary key auto_increment,
    tipo varchar(20),
    titulo varchar(100),
    descricao varchar(1000),
    dia datetime,
    corrigido char(1)
);