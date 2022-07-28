//cadeia de prototipos (prototype chain)
Object.prototype.atri0 = 'Z'

const avo = {atri1: 'A', atri3: '3'}
const pai = { __proto__:avo, atri2: 'B' }
const filho = { __proto__:pai, atri3: 'C' }


console.log(filho.atri1) //ele procura até achar

console.log(filho.atri0) //o avo tem um pai chamado de prototype

console.log(filho.atri3) //o objeto avo dele tem o mesmo atributo, porem ele pega o primeiro


console.log(avo.atri3) //undefined
