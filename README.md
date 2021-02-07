# desafio-aevo

Criar uma conta FREE na API Weatherstack (https://weatherstack.com/) para a consulta dos dados climáticos(não é necessário pagar nada pelo cadastro!)

Explorar a Documentação da API (https://weatherstack.com/documentation), para detalhes de utilização. Podem se limitar apenas a primeira requisição http://api.weatherstack.com/current!!!

Elaborar uma página para consultar e exibir as informações da requisição da API na página

Adicionar um input na página para permitir a busca por diferentes regiões.

## About

This project uses heroku pipelines to manage and autodeploy from this repository.

This is only the frontend of the project. You can find a deployed version, already linked with the backend, on:

for staging changes:
https://desafio-aevo-front-stataging.herokuapp.com/

for production version:
https://desafio-aevo-frontend.herokuapp.com/

Also, you can find the backend on:

staging changes:
https://desafio-aevo-backend-staging.herokuapp.com/

production version:
https://desafio-aevo-backend.herokuapp.com/

Be warned that due to Heroku cold start, the first load might feel sluggish.

## Install

You'll need to have Node.js installed.
Navigate to the client folder and run:

> npm install

This app is being shipped with an express server to serve the production build. If you wish to install the server, you also need to run the same script at the root folder.

## Run

You can either run a development server, or a production build.

To run a lightweight development server, navigate to the client folder and:

> npm start

Optionally, you can serve a production build through the express server shipped with the project. For it, navigate to the client folder and:

> npm run build

And then, at the root directory, run:

> npm start

Other scripts at the root level package.json are used to autodeploy into a heroku pipeline.

Be aware that you`ll need to update the line two on client/src/wrappers/RequestWrapper.js to match your default backend url.
