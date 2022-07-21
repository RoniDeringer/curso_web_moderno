const produto1 = {}
produto1.nome = 'Celular'
produto1.preco = 1250.99
produto1['desconto'] = 0.15

console.log(produto1 ,'\n')




const produto2 = {
    nome: 'celular',
    preco: 89.90,
    obj:{
        produto: 'Nokia',
        valor: 550.99,
        obj:{
            teste: 'teste2',
        },
    },
    obj2:{
        produto2: 'Motorola'
    },
}
console.log(produto2)


/**
 * TRANSFORMANDO PRODUTO1 EM JSON
 */

const produtojson3 = '{"nome": "Celular", "preco": 1250.99, "desconto": 0.15}'