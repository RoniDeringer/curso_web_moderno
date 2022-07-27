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
const p1 = new Produto('caneta', 1.99, 0.1)
const p2 = new Produto('Notebook', 200.00, 0.15)
