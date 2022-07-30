const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Macbook', preco: 4500, fragil: true },
    { nome: 'Celular', preco: 1300, fragil: true },
    { nome: 'Copo', preco: 11.90, fragil: false }
]


const frageis = valores => valores.fragil
const caros = valores => valores.preco >= 1500

console.log(produtos.filter(frageis).filter(caros))


// ou mais direto:

console.log(produtos.filter(function(valor){
    return valor.preco > 12
}))

