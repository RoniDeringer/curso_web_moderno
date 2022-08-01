const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() //como é função, devo passar aqui
const contadorD = require('./instanciaNova')() 

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)
// 3  pois fica cacheado

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)
// 1  Não fica salvo no cache
