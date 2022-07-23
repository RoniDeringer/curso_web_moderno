/**
 * es2015
 * FORMA mais adequada:
 */

console.log('\n -----padrão ES2015 ------ \n')


function getSoma3(a = 1, b = 1, c = 1) {
    return console.log(a + b + c)
}
getSoma3(2,5)//8
getSoma3(0,4,1) //5


console.log('\n------ forma com || -----\n')
/**
 * uma forma que simples, q pode gerar alguns bugs:
 */
function getSoma(a, b) {
    a = a || 1  //caso o valor passado seja false, 'a' vai receber 1
    b = b || 1
    return a + b
}
console.log(getSoma(2, 4)) //6
//NÃO podemos esquecer que 0 é considerado falso
console.log(getSoma(0, 4)) //5



console.log('\n------ termario   ?  : -----\n')
/**
 * posso usar o ternario para validar algumas coisas  
 */

function getSoma2(a, b, c) {
    a = a !== undefined ? a : 1 // se for diferente de undefined vai receber a, senao recebe 1

    b = 1 in arguments ? b : 1 //se 1 não estiver presente no array de arguments vai receber 1

    c = isNaN(c) ? 1 : c //se c nao for number, vai receber 1

    return console.log(a + b + c)
}

getSoma2() //3
getSoma2(0, 0, 0) //0  COMO ESPERADO
getSoma2(2, 3) //6  
