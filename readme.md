# 💻 Curso JS

Repositório destinado a depositar códigos de JavaScript do [Curso Web da Udemy 🔗](https://www.udemy.com/course/curso-web/)
____
## 🚀 Run code
Instale o [node.js](https://nodejs.org/en/)

Intale a extensão `Code Runner` no vscode

`Ctrl+Alt+N` Pra rodar o código 

ou

no Terminal: `node nome_arquivo`
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

>bom saber:
~~~~javascript
!== undefined  //serve estritamente para undefined
!= undefined //serve para false também
~~~~