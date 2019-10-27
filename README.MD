# MeetApp

### Introdução

Esta aplicação faz parte do desafio para o bootcamp da RocketSeat.
A idéia desse projeto é o desenvolvimento de uma aplicação para agendamento e
gerenciamento de Meetups.

A parte mobile deste projeto não foi testado para IOS, somente apara Android.

## Pré requisitos

Esse projeto foi desenvolvido usando banco de dados com PostgreSQL, Redis e o serviço de testes de envio de emails do https://mailtrap.io/.

### Arquivo .env

O backend possui um arquivo ".env.example", que devem ser renomeado para .env e utilizado como arquivo de configuração para as variáveis de ambiente, como conexão com o banco de dados Postgres, Redis e o mailtrap.io, caminho da chamada http, etc.

### Execução

Antes de iniciar a aplicação pela primeira vez execute o comando abaixo em cada uma das pastas para a instalação dos modulos necessários.
  ```
  yarn
  ```

No Backend execute o comando abaixo para iniciar a fila de envio de emails:

```
yarn queue
```

Para o Backend e Frontend, basta entrar nas suas respectivas pastas e executar o comando abaixo:

```
yarn start
```

Para a versão Mobile, será necessário executar o comando abaixo:

```
react-native run-android

## Tavez seja necessário após o termino do comando acima, executar também:

react-native start
```

Para executar localmente (mobile), basta executar o comando abaixo:

```
adb reverse tcp:3333 tcp:3333
```