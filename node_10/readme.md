# 📌 About
## ⚙️ Geral:

O principal **runtime** do javascript no _backend_ é `node`<br>
O Node usa o mesmo interpretador de javascript do chrome que é o `V8`<br>
E também utiliza o `LIBUV` que trata de forma assíncrona o I/O

**Vale Lembrar:** Cada arquivo equivale a um módulo




___
## ➤ `npm`

`npm` é o gerenciador de pacotes do `node`<br>
_Node Packet Manager_<br>
Ou seja, voce baixa as bibliotecas do node a partir dele:<br>
`npm install jquery`

_Obs:_ Quando referenciar alguma biblioteca, usar o underline na frente. <br>
Exemplo: `const _ = require('lodash')`

    Pra instalar as dependencias do npm dps, é só rodar:
    npm i
    -g significa que está instalando global ou seja, não vai ser criado na pasta executada

* Instalei o `lodash` a partir do comando:
    * `npm i lodash` <br>
    * eu ignorei ele no git

* Instalei o `nodemon` a partir do comando:
    * `npm i -g nodemon` <br>
    * Agora eu tenho o comando `nodemon`
    * Consigo rodar aplicações a partir do nodemon
    * Vantagem é que ele atualiza sozinho a saída, só atualizar o código e salvar

___
## ➤ Sistema de `Módulo`[🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/node_10/moduloCliente.js)


Pra você conseguir tornar um módulo **púlbico** precisa ter a idéia de<br> `exportar` e `importar` algo a partir de outro arquivo

* 2 Padrões de módulos em node:
    * CommonJS: Padrão usado no node 
    * EcmaScript 2015: que é um import/export

Obs: Nos exemplos usados, eu usei o padrão do node: CommonJS
