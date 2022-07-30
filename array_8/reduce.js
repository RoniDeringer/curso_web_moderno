const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false },
    {nome: 'Maria', nota: 2.9, bolsista: false },
    {nome: 'Jose', nota: 9.1, bolsista: true },
    {nome: 'Pedro', nota: 5.2, bolsista: true },
]

// a funcao map só retorna os valores das notas
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual 
},/*parametro do valor inicial iria aqui */)

console.log(resultado) //soma de todas as notas