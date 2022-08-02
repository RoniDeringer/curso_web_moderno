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

* Instalei o **lodash** a partir do comando:
    * `npm i lodash` <br>
    * eu ignorei ele no git

* Instalei o **nodemon** a partir do comando:
    * `npm i -g nodemon` <br>
    * Agora eu tenho o comando `nodemon`
    * Consigo rodar aplicações a partir do nodemon
    * Vantagem é que ele atualiza sozinho a saída, só atualizar o código e salvar

* Alguns módulos já vem pré instalados:
    * Como o caso do **File System** (fs)[🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/node_10/arquivoLendo.js);
        * Que permite gravar e ler arquivos json
    * E o **htpp** [🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/node_10/http.js)
    * Por isso não preciso especificar o caminho

___
## ➤ Sistema de `Módulo`[🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/node_10/moduloCliente.js)


Pra conseguir tornar um módulo **púlbico** precisa ter a idéia de<br> `exportar` e `importar` algo a partir de outro arquivo(módulo)

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
## ➤ Padrão **Middleware**[🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/node_10/middleware.js)

_Padrão chain of responsibility_<br>
**Express** é fortemente baseado nesse padrão

    Esse padrão se baseia em dividir em passos reutilizáveis:
    Caso eu queira dividir uma função em 3 etapas pra ela ser reutilizada
        Eu faço em 3 funções: PassoA(), PassoB() e PassoC()
        Porém desse modo eu ficaria "amarrado", pois toda vez q eu chamar a 
        função 'PassoA()' eu teria que chamar a função PassoB() consequentemente.
    
    O padrão middleware resolve isso, usando a função next(), que ela invoca o 
    próximo passo, podendo ser qualquer função.
    Então não existe mais esse acoplamento de cadeia(passos).

No _Express_ uma função no padrão middleware tem 3 parametros:
    <br>1. Request (Requisição)
    <br>2. Response (Resposta)
    <br>3. next

___
## ➤ package `json`

Para criar um arquivo **package.json** basta rodar: <br>
`npm init` e vai respondendo as perguntas<br>
ou: `npm init -y` pra responder sim pra todas as perguntas

* Exemplo usando requisição de um site remoto usando o axios [🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/node_10/funcionarios/funcionarios.js) 

* Exercicio usando um **array de objeto** web usando _filter_ e _reduce_[🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/node_10/funcionarios/desafio.js) 

Com esse arquivo, eu posso: 
* instalar a pasta *node_modules* a partir de `npm i`
* Criar scripts

___
## ➤ global[🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/node_10/globalCliente.js) 

Caso eu queira adicionar uma função ou outra coisa dentro do global

Obs: No exemplo que eu fiz, eu não atribui a importação a nenhuma váriavel, já que eu não enviei nada, eu apenas carreguei o módulo importado
___

## ➤ Instância única vs Nova Instância

Node faz **cache** de módulos que são importados a partir da função **require**

Toda vez que você importar um módulo e quer q seja gerado uma nova instância de objeto. <br>
Voce pode driblar usando a função **factory**.
___
## ➤ this

**this** fora de uma função aponta para **module.exports**

e dentro de uma função o **this** aponta para **global**

_Obs:_ Isso não vale para arrow function
___
## ➤ **Módulo** Parâmetros variáveis[🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/node_10/passandoParametrosCliente.js) 

_Obs:_ os: `...` dizem que os parametros são variaveis, ou seja, podem ter vários

Eu posso exportar uma Função em módulo para outro, assim como seus parâmetros<br> 
___
## ➤ **File system (fs)** Lendo .json[🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/node_10/arquivoLendo.js) 

_Obs:_ o módulo fs já vem com padrão pelo node.

Nesse exemplo eu li todo o conteudo de um pasta

Posso adotar 2 estratégias pra ler o arquivo:
*   De forma **Sincrona**
    * Porém pode travar no event loop;
    * Não é uma estratégia muito interessante....
*   De forma **Assincrona**
    * Passa uma callback que vai ser chamado quando o arquivo for carregado

_read json_
___
## ➤ Escrevendo arquivo [🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/node_10/arquivoEscrita.js) 

Criando um arquivo json a partir de um objeto criado em um módulo js

_create json_
___



