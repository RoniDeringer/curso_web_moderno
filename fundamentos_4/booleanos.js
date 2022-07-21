let isAtivo = false
console.log(isAtivo ,'\n')

isAtivo = true
console.log(isAtivo ,'\n')

isAtivo = 5  // valor numerico
console.log('valor logico tipo numerico: ',!!isAtivo ,'\n') //2 negação mostra o valor logico
/**
 * 0 é FALSE
 * resto é TRUE
 */


console.log('os verdadeiros...') 
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true),'\n')

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false),'\n')

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '),'\n')
Math.SQRT1_2


var nome = 'Lucas' //true
console.log(nome || 'Desconhecido','\n') //saida: Lucas
/**
 * Js opta imprimir o valor TRUE
 * se tiver false ele imprime o outro
 */
 var nome = '' //false
 console.log(nome || 'Desconhecido','\n') //saida: Desconhecido
 