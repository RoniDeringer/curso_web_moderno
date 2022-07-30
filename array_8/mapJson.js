/**
 * DESAFIO:
 * PEGAR UM ARRAY APENAS COM OS VALORES
 */

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 50.44}'
]

//converte um texto pra objeto
const paraObjeto = json => JSON.parse(json)

const getPreco = produto => produto.preco

const resutlado = carrinho.map(paraObjeto).map(getPreco)

console.log(resutlado)