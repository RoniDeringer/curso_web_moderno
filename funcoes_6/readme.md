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
 
 
___
## ➤ `arguments` Parametros variáveis[🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/funcoes_6/paramsVariaveis.js)

`arguments` é um _array_ interno

Uma forma de passar quantos parametros eu quiser em uma função, ou seja:<br>
Torna-se flexivel a `quantidade de parametros` utilizados

___

## ➤ `default` Parametros padrão[🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/funcoes_6/paramPadrao.js)

*Dentro de todas as formas, há de preferir o padrão ES2015:*
~~~~javascript
function getSoma(a = 1, b = 2) {
} 
~~~~

É definido um valor dafault dentro da função. <br> 
E será utlizado caso for passado um valor falso.

___

## ➤ `this` e o `bind`[🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/funcoes_6/thisBind.js)

Lembrando que o `this` pode variar conforme o contexto em que ele é chamado.<br>
O `bind` é usado pra "amarrar" o this a um determinado contexto

Então vc faz a chamada do que vc quer e chama o méotodo bind e passa o q vc quer contextualizar como parametro, e no fim usa o `bind` passando como _parametro_ o q vc quer amarrar
>ex: uma função dentro de um objeto, e preciso usar essa função fora do objeto
~~~~javascript
let objeto1 = {
    falar() {
        console.log('bom dia!')
    } 
}

let ouvir1 = falar.bind(objeto1) //assim funciona
let ouvir2 = falar //undefined
~~~~
___
## ➤ `self` [🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/funcoes_6/self.js)

Nota Importante: self não deixa de ser uma gambiarra.<br>
self é uma constante que vai receber `this` no contexto que será utilizado.<br>
_*self* não é uma palavra reservada, pode ser qualquer nome_

>ex: uma função dentro de outra função, e quero apontar o `this` pra minha primeira função, então o `self` recebe o `this` na primeira função pra ser utilizado fora do contexto
~~~~javascript
function Funcao1(){
    this.atributo1 = 0
    const self = this
    funcao2(function(){
        console.log(self.atributo1)
    }, segundoParametro)
}
new Funcao1
~~~~
___
## ➤ `Arrow function` [🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/funcoes_6/self.js)

AULA 96



___
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




