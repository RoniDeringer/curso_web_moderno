require('./global') // ele carrega o this


console.log(novaFuncao.saudacao())
//Estou em todos os Lugare!



//consigo mudar valores globais

console.log(novaFuncao.nome)
//Sistema legal ! ! !

novaFuncao.nome = 'Mudei'

console.log(novaFuncao.nome)
//Mudei


// ------------------------------------
// Usando o freeze:

console.log('freeze nome: ',novaFuncao2.nome)
novaFuncao2.nome = 'Mudei'
console.log('freeze nome dps: ',novaFuncao2.nome)