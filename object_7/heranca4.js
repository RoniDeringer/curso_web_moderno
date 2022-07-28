const pai = { nome: 'Pedro', corCabelo: 'preto' }

/**
 * quando eu faço o Object.create passando como parametro esse objeto, eu digo que:
 * ana vai ser um objeto filha do objeto passado como param
 * PORÉM: ana não tem nenhuma chave/valor proprio
 */
const filho1 = Object.create(pai)
console.log(filho1)  // {}
filho1.nome = 'Ana'


//consigo criar um objeto já com params e suas propriedades:
const filho2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filho2) //{ nome: 'Bia' }
filho2.nome = 'ABC'//isso nao adianta!!!
console.log(filho2.nome) //Bia


/**
 * eu posso percorrer as chaves:
 */

for (let key in filho2) {  //percore as chaves dela, e da herança

    filho2.hasOwnProperty(key)
    ? console.log(`Pertence a ela: ${key}`)
    : console.log(`Por Herança: ${key}`)

}