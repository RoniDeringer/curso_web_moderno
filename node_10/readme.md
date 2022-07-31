# 📌 About
## ⚙️ Geral:

O principal **runtime** do javascript no _backend_ é `node`<br>
O Node usa o mesmo interpretador de javascript do chrome que é o `V8`<br>
E também utiliza o `LIBUV` que trata de forma assíncrona o I/O

**Vale Lembrar:** Cada arquivo equivale a um módulo


`npm` é o gerenciador de pacotes do `node`<br>
_Node Packet Manager_<br>
Ou seja, voce baixa as bibliotecas do node a partir dele:<br>
`npm install jquery`

    Pra instalar as dependencias do npm dps, é só rodar:
    npm i

* Instalei o lodash a apartir do comando:
    * `npm i lodash` <br>
    * eu ignorei ele no git



___
## ➤ Sistema de `Módulo`[🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/node_10/moduloCliente.js)


Pra você conseguir tornar um módulo **púlbico** precisa ter a idéia de<br> `exportar` e `importar` algo a partir de outro arquivo

* 2 Padrões de módulos em node:
    * CommonJS: Padrão usado no node 
    * EcmaScript 2015: que é um import/export

Obs: Nos exemplos usados, eu usei o padrão do node: CommonJS
