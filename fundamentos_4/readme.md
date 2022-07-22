# 🗎 About
## ➤ Ecma Scprit

é a versão mais atualizada do js

OBS: `Js` tem a tipagem fraca

## ➤ var e let

*var* eu posso redeclarar MAS *let* não!

**Preferir let**

*const* constante, ou seja, não pode receber outro valor

## ➤ Atribuição de valor

Objetos: a constante recebe o ENDEREÇO do objeto.
Então se duas constantes tiverem o mesmo objeto, e eu alterar uma, eu *altero as duas*

Diferente de valores primitivos, que duas variaveis recebem o VALOR e pode ser mudado de *forma independente*


## ➤ Ternário

condicao ? TRUE : FALSE
> exemplo com uma função arrow:
```javascript
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
 ```

## ➤ Erro [🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/fundamentos_4/erro.js)
`try` tenta fazer

`catch` se não conseguir

`finally` vai ser chamado dps de executar o _try_ ou o _catch_

>ex:
```javascript
function falar{
    try{
        console.log(`${nome}`)
    }catch{
        throw new Error('problema na variavel = nome')
    }finally{
        console.log('fim...')
    }

}
 ```



## ➤ BOLEANOS

Colocar `!!` na frente mostra o valor lógico


## ➤ Template

Forma mais organizada de concatenar variaveis e literal
Ex: 
```javascript
console.log(`Olá ${nome}!`)
 ```

## ➤ Array

Obs: Array é do tipo object

`array.push()` adiciona valor no próximo indice (parametro: valor a ser incluido no array)


## ➤ null e undefined

`null:` ausencia de valor

`undefined:` variavel nao foi inicializada/definida

## ➤ Função [🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/fundamentos_4/funcaoAnonima.js)

`Objeto` é uma função

`Classe` é uma função

Não necessariamente precisa ter retorno

* Consigo armazenar uma função em uma variavel
* Fazer uma função arrow `=>`
* retorno implícito com apenas uma linha de código 



## ➤ Hoisting

O Js faz o "içamento" ele pega as variaveis e jogam pra cima

ou seja:
```javascript
console.log(a) // 
var a = 2
```
ele entende q eu tenho uma variavel `a` então ele nao da erro,
só fala que é undefined

_Obs não é muito usado. E só funciona pra var_

