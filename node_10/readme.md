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

* `htpp` já vem junto com o node[🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/node_10/http.js)
    * Por isso não preciso especificar o caminho

___
## ➤ Sistema de `Módulo`[🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/node_10/moduloCliente.js)


Pra você conseguir tornar um módulo **púlbico** precisa ter a idéia de<br> `exportar` e `importar` algo a partir de outro arquivo

* 2 Padrões de módulos em node:
    * CommonJS: Padrão usado no node 
    * EcmaScript 2015: que é um import/export

Obs: Nos exemplos usados, eu usei o padrão do node: CommonJS

___
## ➤ Exportar[🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/node_10/export.js) | [🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/node_10/recebeExport.js)

**exportar:** eu tenho 3 opções:<br>
`this`, `module.exports` e `exports`

porém, eles apontam pro *module.exports*<br>
que é iniciado como um **Objeto vazio**<br>

Então caso eu queira enviar um novo objeto, <br> ele deve ser criado somente a partir do `modulo.exports = {}.` 

Mas posso implementar a partir das outras opções. Como:<br> 
this.a = 1 <br>
modulo.exports.b = 2<br>
exports.c = 3
___
## ➤ package `json`

Para criar um arquivo **package.json** basta rodar: <br>
`npm init` e vai respondendo as perguntas<br>
ou: `npm init -y` pra responder sim pra todas as perguntas

* Exemplo usando requisição de um site remoto usando o axios [🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/node_10/funcionarios/funcionarios.js) 

* Exercicio usando um **array de objeto** web usando _filter_ e _reduce_[🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/node_10/funcionarios/desafio.js) 

___

## ➤ Instância única vs Nova Instância

Node faz **cache** de módulos que são importados a partir da função **require**

Toda vez que você importar um módulo e quer q seja gerado um novo objeto. <br>
Voce pode driblar usando a função **factory**.



