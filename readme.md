# 💻 Curso JS

Repositório destinado a depositar códigos de JavaScript do [Curso Web da Udemy 🔗](https://www.udemy.com/course/curso-web/)
____
## 🚀 Run code
Instale o [node.js](https://nodejs.org/en/)


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

___
## 📋 Lista de conceitos 

[Fundamentos](https://github.com/RoniDeringer/curso_web_moderno/blob/master/fundamentos_4) | [Funções](https://github.com/RoniDeringer/curso_web_moderno/blob/master/funcoes_6) | [Object](https://github.com/RoniDeringer/curso_web_moderno/blob/master/object_7) | [Array](https://github.com/RoniDeringer/curso_web_moderno/blob/master/array_8)
----------| ------ | ------ | ------
try catch | Arrow Function | Criar | splice
booleanos | callback | Get e Set | -
var e let | POO | Padrão ES15 | -
Destructuring Objetct | self | freeze | -
Ternário| bind | keys | -
  -| tipos Param | values | -
  -| Contexto léxico | entries | -
  -| Closure | defineProperty | -
  -| Factory | assign | -
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

