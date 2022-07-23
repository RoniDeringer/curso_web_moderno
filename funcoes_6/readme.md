# 🗎 About
## ⚙️ Geral:

* Função em Js é `First-CLass` Object(Citizens)
* `Higher-order` function (Função de alta ordem)

        Isso significa q eu posso tratar uma função sendo um `dado`
        Ou seja, posso passar de _parametro_ pra outra função.
        Passar como _retorno_ de uma outra função.
        Uma _variável_ pode receber uma função.
        Função pode ter outra função dentro dela.

_**Obs:** se eu não colocar return em uma função, ela retorna *Undefined*_

Obs: Lembrando que posso passar a qtd. de parametros diferente do que é esperado na função. Rever: [🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/fundamentos_4/funcoes1.js)
 
## ➤ Função Anonima 

Uma função anonima é que não tem nome de função
___
>ex: armazenando uma função dentro e uma *variável*
~~~~javascript
const getSoma = function(a, b) {return a+b}
~~~~
___
>ex: armazenando uma função dentro e um *array*. obs: nesse caso declarei uma função, armazenei outra função e armazenei uma varíavel.
~~~~javascript
const array = [ function(a, b) {return a+b}, outraFunção, numero1] 
~~~~
___
>ex: armazenar em um atributo de objeto
~~~~javascript
const obj = {}
obj.falar = function () { return 'Olá' }
console.log(obj.falar()) 
~~~~
___
>ex: Passar uma função como *parametro* pra outra função
~~~~javascript
function getSoma(getSubtracao){
    getSubtracao()
}
~~~~
___
>ex: Declarar uma função dentro de outra função
~~~~javascript
function getSoma(a,b){
    return function (c){
        return a+b+c //9
    }
}
//pra invocar a função é necessario passar os parametros das 2 funções:
getSoma(1,3)(5)
//ou...
const primeiroParametro = getSoma(1,3)
primeiroparametro(5)
~~~~


___
## ➤ `arguments` Parametros variáveis[🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/funcoes_6/paramsVariaveis.js)

`arguments` é um _array_ interno

Uma forma de passar quantos parametros eu quiser em uma função, ou seja:<br>
Torna-se flexivel a `quantide de parametros` utilizados

___

## ➤ `default` Parametros padrão[🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/funcoes_6/paramPadrao.js)

*Há preferir o padrão ES2015:*
~~~~javascript
function getSoma(a = 1, b = 2) {
} 
~~~~

É definido um valor dafault dentro da função. <br> 
E será utlizado caso for passado um valor falso.




