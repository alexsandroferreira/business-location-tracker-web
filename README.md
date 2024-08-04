
#  Business Location Tracker 
![](https://github.com/alexsandroferreira/business-location-tracker-web/workflows/CHANGELOG%20Generator/badge.svg)
[![Release](https://img.shields.io/github/v/release/alexsandroferreira/business-location-tracker-web?color=lgreen)](https://github.com/alexsandroferreira/business-location-tracker-web/releases)

Business Location Tracker é um aplicativo que permite simular o registro de empresas e visualizar a localização dessas empresas em um mapa interativo. Utilizando a API Nominatim da OpenStreetMap, o projeto exibe as localizações no mapa através da biblioteca react-leaflet 

Além disso, a integração contínua será implementada para automatizar o versionamento de código utilizando a biblioteca Release-it.

## Demo 📸

<h1 aling="center">
  <img alt="Readme-business-location" src="/public/img/demo-2.gif">
</h1>

## Adições pessoais para melhor desenvolvimento do projeto

- Integração contínua para automatização do changelog.
- Lint seguindo o guia de estilo da rocketseat/node.
- Automação através do Husky:
    - Script de lint para correção de erros.
    - Script de verificação de commits usando o formato convencional.
- Plugin de lint para organização dos imports.


## Tabela de Conteúdos

- [Tecnologias](#tecnologias)
- [Instalação e Configuração](#instala%C3%A7%C3%A3o-e-configura%C3%A7%C3%A3o)
  - [Requisitos](#requisitos)
  - [Instalação](#instala%C3%A7%C3%A3o)
- [Licença](#licen%C3%A7a)

## Tecnologias 🛠️

Este projeto foi construído com as seguintes tecnologias:

- [Node.js »](https://nodejs.org)
- [Typescript »](https://www.typescriptlang.org)
- [Eslint »](https://eslint.org/docs/latest/)
- [Eslint style guide »](https://github.com/Rocketseat/eslint-config-rocketseat)
- [@eslint-plugin-simple-import-sort »](https://github.com/lydell/eslint-plugin-simple-import-sort)
- [@eslint-plugin-simple-import-sort »](https://github.com/lydell/eslint-plugin-simple-import-sort)
- [React Helmet Async »](https://github.com/staylor/react-helmet-async/)
- [Marterial Design framework de interface »](https://mui.com/material-ui/)
- [React Leaflet »](https://react-leaflet.js.org/)
- [Sonner »](https://sonner.emilkowal.ski/)
- [Axios »](https://axios-http.com/ptbr/docs/intro)
- [Husky »](https://typicode.github.io/husky/)
- [Commitlint »](https://commitlint.js.org/)
- [release-it »](https://github.com/release-it/release-it)

## Instalação e configuração

### Requisitos

- [Node.js »](https://nodejs.org/en/download) na sua versão LTS
- Extensão do ESlint, Tailwind CSS IntelliSense e PostCSS Language Support instalada no vs code

- Extensão do ESlint instalada no vs code

- Para permitir que o changelog rode automaticamente, verifique as configurações do repositório na aba Settings -> Actions -> General Workflow Permissions e marque a opção de permissões de leitura e escrita (Read and Write Permissions).

### Requisitos funcionais
1 - Formulário de Cadastro:
- [x] Criar um formulário utilizando React Hook Form e Material UI;
- [x] Validar os campos utilizando Zod;

2 - Envio do Formulário:
- [x] Ao submeter o formulário, buscar as coordenadas do endereço utilizando a API Nominatim da OpenStreetMap;
- [x] Utilizar as coordenadas obtidas para adicionar um pin no mapa;

3 - Mapeamento da Empresa:
- [x] Utilizar react-leaflet e OpenStreetMap para exibir um mapa;
- [x] Adicionar um pin no mapa para cada empresa cadastrada;
- [x] Ao clicar no pin, deve aparecer um card com o nome fantasia e o CNPJ da empresa;

4 - Armazenamento Local:
- [x] Salvar os dados das empresas no local storage do navegador;
- [x] Ao recarregar a página, os dados das empresas devem ser carregados do local storage
e exibidos no mapa;


### Regras de negócio



### Requisitos não-funcionais


## Instalação

1. Clone o projeto: `git clone https://github.com/alexsandroferreira/business-location-tracker-web.git`.
2. Instale as dependências e ative husky: `npm install` e `npm prepare`.
3. Para iniciar a aplicação execute `npm run build` e `npm run preview`.