console.log("Consigo dividir string por int:")
console.log("10"/2 ,'\n')

const texto = "Roni Deringer"
console.log("charAt (posicao String)")
console.log(texto.charAt(3),'\n')

console.log("substring (intervalo de carecteres) ")
console.log(texto.substring(0, 4) ,'\n')

console.log("Concat(concatena)")
console.log('Texto '.concat(texto).concat("!") ,'\n')

console.log("split (transforma em array (parametro o separador))")
console.log('Ana,Breno, Pedro,José'.split(',') ,'\n')

console.log("template ` (concatenação de varias string)")
const up = nome => nome.toUpperCase()
console.log(`Olá, ${up('Roni')}!`,'\n')
