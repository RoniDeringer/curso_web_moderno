# 💻 Curso JS

Repositório destinado a depositar códigos de JavaScript do [Curso Web da Udemy 🔗](https://www.udemy.com/course/curso-web/)
____
## 🚀 Run code
Instale o [node.js](https://nodejs.org/en/)<br>
rode: `npm i` para instalar as dependências do node

* Instale a extensão `Code Runner` no vscode<br>
`Ctrl+Alt+N` Pra rodar o código 

ou

* no Terminal: `node nome_arquivo`
_____
## 🚨 Dicas
    
* Versão atual: `Ecma script 2015`
* Preferivel usar `arrow function`
* Preferivel usar o `let` para variaveis comuns
* Preferivel deixar os códigos separados por escopo de bloco `{}`
* Fuja do escopo global (principalmente no front)

<br>

Onde | Tipo
------|------
Node| global
Browser | window
todos | this

_*OBS:* Consigo usar o `this` apenas para um escopo (funcao, objeto, ...)_
### `this`
    É o objeto que está sendo referenciado naquele contexto de execução
    que no qual pode variar

    Função comum: o this pode variar dependendo quem chama, this pode ser: objeto, 
    window, elemento. Até consigo definir o this, pela função: bind

    arrow function: o this não varia, ele vai ser definido no momento da declaração da função.
<br>
<!-- <br> -->

>bom saber:
~~~~javascript
!== undefined  //serve estritamente para undefined
!= undefined //serve para false também
~~~~

`npm` é o gerenciador de pacotes do `node`
___
## 📋 Lista de conceitos 

[Fundamentos](https://github.com/RoniDeringer/curso_web_moderno/blob/master/fundamentos_4) | [Funções](https://github.com/RoniDeringer/curso_web_moderno/blob/master/funcoes_6) | [Object](https://github.com/RoniDeringer/curso_web_moderno/blob/master/object_7) | [Array](https://github.com/RoniDeringer/curso_web_moderno/blob/master/array_8)
----------| ------ | ------ | ------
try catch | Arrow Function | Criar | pop e push
booleanos | callback | Get e Set | shift e unshift
var e let | POO | Padrão ES15 | splice
Destructuring Objetct | self | freeze | slice
Ternário| bind | keys | forEach
  -| tipos Param | values | map
  -| Contexto léxico | entries | reduce
  -| Closure | defineProperty | Imperativo
  -| Factory | assign | Declarativo
  -| iife | herança | -
  -| call e apply | prototype | -
  -| - | super | -
  -| - | shadowing | -
  -| - | Object.create | -
  -| - | for key | -
  -| - | hasOwnProperty | -
  -| - | preventExtensions | -
  -| - | seal | -
  -| - | Classe | -
___
[Node](https://github.com/RoniDeringer/curso_web_moderno/blob/master/node_10) | [-](-) | [-](-) | [-](-)
----------| ------ | ------ | ------
npm | - | - | -
lodash | - | - | -
nodemon | - | - | -
CommonJS| - | - | -
exportar | - | - | -
reduce | - | - | -
http (porta) | - | - | -
Módulo | - | - | -
x | - | - | -
x | - | - | -
x | - | - | -
x | - | - | -
x | - | - | -
