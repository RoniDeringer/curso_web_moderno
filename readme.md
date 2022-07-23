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

* Preferivel deixar os códigos separados por escopo de bloco `{}`

_Fuja do escopo global (principalmente no front)_

Onde | Tipo
------|------
Node| global
Browser | window
todos | this

_*OBS:* Consigo usar o `this` apenas para um escopo (funcao, objeto, ...)_

Preferivel usar o `let` para variaveis comuns

Versão atual: `Ecma script 2015`

~~~~javascript
!== undefined  //serve extritamente para undefined
!= undefined //serve para false também
~~~~