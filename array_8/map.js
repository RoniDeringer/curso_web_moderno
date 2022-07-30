const nums = [1, 2, 3, 4, 5]

//cria um novo array 
let dobro = nums.map(function(e) {
    return e * 2
})

console.log(dobro)


//receber uma arrow function no map

const soma10 = e => e + 10
const dinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(dinheiro)
console.log(resultado)
//[ 'R$ 11,00', 'R$ 12,00', 'R$ 13,00', 'R$ 14,00', 'R$ 15,00' ]