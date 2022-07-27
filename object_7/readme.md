# 📌 About
## ⚙️ Geral:

* Objeto em Js é:
    * Coleção dinâmica de pares `chave/valor` 

 `freeze` método q passa como parametro um objeto. Não deixa alterar mais o objeto.
 
 colocar: `_` antes de uma variavel significa que <br>essa variavel vai ser usada apenas internamente _ex:_ `_valor` 
___
## ➤ Criando Objeto[🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/object_7/criar.js)

Criando objeto apartir de função, levando em consideração Paradigma OO

Existe somente `publico` e `privado`<br>
Publico é usado o _this_<br>

Conceitos|
---------|
factory|
Object.create|
construct|
Json>Object|

___
## ➤ `Get` e `Set`[🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/object_7/GetSet.js)

**Nota:** Preferivel eu usar o padrão de declaraçãod e variavel com `_` na frente.
ex: `_nome`

_**Obs:** Os Getters e Setters são as únicas funções que podem ter o mesmo nome <br>
e ser passado o número diferente de parâmetros_

O JS entende quando voce quer chamar o _get_ ou o _set_. 
 
~~~~javascript
   let _valor

   get valor(){
        return this._valor
    }

    set valor(valor){
        this._valor = valor
    }
~~~~


___
## ➤ ES2015[🔗](https://github.com/RoniDeringer/curso_web_moderno/blob/master/object_7/padraoES2015.js)

* No arquivo de exemplo, mostra:
    * nova forma de receber valor a partir de variaveis
    * funções dentro de Objeto


Com esse novo padrão do Ecma Script 2015, eu susbstituo:
~~~~javascript
const a = 1
const b = 2
const c = 3
~~~~
~~~~javascript
const objeto 1 = { a: a, b: b, c: c }
~~~~
**Por isso:**
~~~~javascript
const objeto 2 = {a, b, c}
~~~~

___
