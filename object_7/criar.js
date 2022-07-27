//usando notação literal:
const obj1 = {}


//Object em JS
const obj2 =  new Object


//Função construtora
function Produto(nome, preco, desconto){
    this.nome = nome //this é publico
    preco = preco   //assim é privado 

    this.getPrecoComDesconto = () => {
        return preco * (1- desc)
    }
}
