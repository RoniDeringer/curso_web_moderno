const alunos = [
    {nome: 'João', nota: 7.5},
    {nome: 'Maria', nota: 9.5}
]

//imperativo = COMO fazer
let total1 = 0
for(let i=0; i<alunos.length; i++){
    total1 += alunos[i].nota
}
console.log('media: ', total1 / alunos.length)


//Declativo  = O QUE vc quer
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)