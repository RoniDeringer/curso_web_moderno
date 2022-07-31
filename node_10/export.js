console.log(module.exports)
//começa vazio {}

this.a = 1 
module.exports.b = 2
exports.c = 3

//ou consigo enviar um NOVO objeto 
// mas somente pelo module.exports

module.exports = {
    nome: 'Teste'
}