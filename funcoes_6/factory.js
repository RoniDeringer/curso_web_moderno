let Objeto1 = {
    nome: 'roni',
    idade: 19
} 
let Objeto2 = {
    nome: 'duda',
    idade: 20
} 

/**
 * de vez eu ficar criando varios objetos repetidos
 * eu faço uma factory function:
 */


//factory:
function criarPessoa(nomeParam = 'name', idadeParam = 0){
    return {
        nome:  nomeParam,
        idade: idadeParam
    }
}

let pessoa1 =  criarPessoa('Roni', 19)
let pessoa2 =  criarPessoa('Duda', 20)

console.log(pessoa1)
console.log(pessoa2)