const pessoa = {
    nome: 'Roni',
    idade: 20,
    peso: 70
}

//keys
console.log(Object.keys(pessoa)) //retorna as chaves em array


//values
console.log(Object.values(pessoa)) //retorna os valores em array

//entries
console.log(Object.entries(pessoa)) //[ [ 'nome', 'Roni' ], [ 'idade', 20 ], [ 'peso', 70 ] ]
//posso usar um forEach:
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
//nome: Roni
//idade: 20
//peso: 70

//ou:

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})


//defineProperty
Object.defineProperty(pessoa, 'dataNasc',{
    enumerable : true,
    writable: false,  //nao pode ser sobreescrito
    value: '06/08/2002'
})

pessoa.dataNasc = '01/01/2001' //nao funciona pq nao pode ser sobreescrito
console.log(pessoa.dataNasc)


//Object.assign (ES2015)
const obj1 = { a: 2}
const obj2 = { b: 'ABC'}
const obj3 = { c: 1.5}
const objeto4 = Object.assign(obj1, obj2, obj3)//merge de todos os objetos 
console.log(objeto4)  


//freeze
Object.freeze(objeto4)
objeto4.a = 3 
console.log(objeto4.a) //2