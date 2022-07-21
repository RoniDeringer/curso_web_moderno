var numero = 1
{
    let numero = 2
    console.log(numero) // 2
}
console.log(numero)//1

/**
 * A PREFERENCIA SEMPRE VAI SER A VARIAVEL
 * DE DENTRO DO ESCOPO
 */


//ele aceita dessa forma:
var numero = 1
{
    console.log(numero) // 1
}
console.log(numero)//1


//se fosse só com var:
var numero = 1
{
    var numero = 2
    console.log(numero) // 2
}
console.log(numero)//2


