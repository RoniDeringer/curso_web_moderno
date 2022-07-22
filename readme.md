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
<<<<<<< HEAD
=======

* Preferivel deixar os códigos separados por escopo de bloco `{}`

_Fuja do escopo global (principalmente no front)_



_____
## 🗎 About
### ➤ Ecma Scprit
>>>>>>> 72005d53013486b8b812906926c74f236147a174

* Preferivel deixar os códigos separados por escopo de bloco `{}`

* _Fuja do escopo global (principalmente no front)_

* `this` dentro de um escopo, refere-se apenas ao escopo, e fora, refere-se ao `window`

Run | Name
--------- | ------
Node | global
Browser | window

Referem-se a mesma coisa:
> this, global, window

<<<<<<< HEAD
_*Obs:* No Node cada arquivo é um módulo_
=======
*const* constante, ou seja, não pode receber outro valor

### ➤ BOLEANOS

Colocar `!!` na frente mostra o valor lógico


### ➤ Template

Forma mais organizada de concatenar variaveis e literal
Ex: 
```javascript
console.log(`literal ${variavel}literal`)
```


### ➤ Array

Obs: Array é do tipo object

`array.pop()` pega o último valor do array (sem parametros)

`array.push()` adiciona valor no próximo indice (parametro: valor a ser incluido no array)


### ➤ Atribuição de valor

Objetos: a constante recebe o ENDEREÇO do objeto.
Então se duas constantes tiverem o mesmo objeto, e eu alterar uma, eu *altero as duas*

Diferente de valores primitivos, que duas variaveis recebem o VALOR e pode ser mudado de *forma independente*


### ➤ null e undefined

`null:` ausencia de valor

`undefined:` variavel nao foi inicializada/definida

### ➤ Função

`Objeto` é uma função

`Classe` é uma função

Não necessariamente precisa ter retorno

* Consigo armazenar uma função em uma variavel
* Fazer uma função arrow `=>`
* retorno implícito com apenas uma linha de código 


### ➤ Hoisting

O Js faz o "içamento" ele pega as variaveis e jogam pra cima

ou seja:
```javascript
console.log(a) // 
var a = 2
```
ele entende q eu tenho uma variavel `a` então ele nao da erro,
só fala que é undefined

_Obs não é muito usado. E só funciona pra var_


 


___
>teste ~php
~~~~php
echo('Olá, '.$texto.' !');
~~~~

>teste `javascript
```javascript 
console.log(`Olá, ${nome}!`)
```

Aula   | Abordagem
--------- | ------
Fundamentos | Tipagens e funções de forma básica
aula 2 | Conteudo 2
aula 3 | Conteudo 3
aula 4 |  Conteudo 4

>>>>>>> 72005d53013486b8b812906926c74f236147a174
