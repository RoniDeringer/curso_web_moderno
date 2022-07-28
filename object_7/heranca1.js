const ferrari = {
    modelo: 'F40',
    velocidade: 325
}

const volvo = {
    modelo: 'V40',
    velocidade: 200
}

//cada objeto tem um atributo chamado _proto_
console.log(ferrari.__proto__)
//ou seja, eu mostro quem seria o objeto pai desse objeto nesse contexto

//esse ATRIBUTO __proto__ é IGUAL ao meu OBJETO prototipo!
console.log(ferrari.__proto__ === Object.prototype) // TRUE
