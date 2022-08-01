/**
 *  DESAFIO
 * Mulher chinesa com menor salario
 */
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const pais = valores => valores.pais === 'China'
const genero = valores => valores.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario > funcAtual.salario ? func : funcAtual
}


axios.get(url).then(response => {
    const funcionarios = response.data

    const resultado = funcionarios.
        filter(pais).
        filter(genero)
        .reduce(menorSalario)

    console.log(resultado)

})


