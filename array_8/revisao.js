let nome = new Array('Roni', 'duda', 'carlos')

console.log(nome[0]) //Roni

nome.push('fabio')
console.log(nome.length) // 4

console.log(nome.sort())


//splice (elemento q vai ser alterado, quantidade de elementos excluidos, o q vai ser adicionado)

let teste = new Array(1,2,3,4)
teste.splice(1,2,'abc') // [ 1, 'abc', 4 ]


teste = new Array(1,2,3,4)
teste.splice(0,1,'abc') //[ 'abc', 2, 3, 4 ]


teste = new Array(1,2,3,4)
teste.splice(0,1,'abc','def') //[ 'abc', 'def', 2, 3, 4 ]




console.log(teste)