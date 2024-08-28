# SPA "Single Page Application" com React

## Descrição

Este projeto envolve a criação de uma arquitetura SPA (Single Page Application) utilizando o framework React. A aplicação consome dados da API do [TheMovieDB](https://developer.themoviedb.org/reference/movie-details) para renderizar informações sobre filmes.

Essa atividade faz parte do conteúdo apresentado na disciplina de **Arquitetura de FrontEnd** do curso de Pós-Graduação em Engenharia de Software promovido pela Pontifícia Universidade de Minas Gerais (PUC Minas).

## Tecnologias Utilizadas

- **React**: Framework JavaScript para construção de interfaces de usuário.
- **CSS-in-JS**: Técnica de estilização onde o JavaScript é usado para criar e gerenciar estilos de forma declarativa e sustentável.
- **React Router**: Biblioteca para roteamento interno em aplicações React.
- **Styled Components**: Biblioteca para escrever CSS diretamente dentro dos arquivos JavaScript.
- **Axios**: Biblioteca para realizar requisições HTTP.

## Pré-requisitos

Antes de iniciar o desenvolvimento com React, é necessário instalar o Node.js na sua máquina.

### O que é o Node.js?

O Node.js é um ambiente de execução de código JavaScript do lado do servidor (server-side), permitindo a criação de aplicações autossuficientes sem a necessidade de um navegador.

### Por que Instalar o Node.js?

O React é construído sobre o Node.js, que inclui o npm (Node Package Manager) e o npx (executador de pacotes do Node). O npm gerencia dependências, enquanto o npx executa scripts de build, ambos essenciais para o desenvolvimento com React.

## Instruções de Instalação

1. **Criar um novo projeto React**
   
   Use o comando `npx` para criar um novo projeto React sem a necessidade de instalar o Create React App globalmente:
   
   ```bash
   npx create-react-app my-movies



2. **Instalar o React Router**
   
   O React Router é necessário para implementar o roteamento interno na aplicação:
   
   ```bash
   npm i react-router-dom

3. **Instalar o Styled Components**
   
   Para escrever CSS diretamente dentro dos arquivos JavaScript, utilize o Styled Components:
   
   ```bash
   npm i styled-components

4. **Instalar o Axios**
   
   O Axios é uma biblioteca para fazer requisições HTTP de maneira simples e eficiente:
   
   ```bash
   npm i axios

## Referências
API TheMovieDB: '[Documentação oficial](https://developer.themoviedb.org/reference/movie-details)'