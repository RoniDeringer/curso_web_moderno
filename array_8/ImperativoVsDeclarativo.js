const alunos = [
    {nome: 'João', nota: 7.5},
    {nome: 'Maria', nota: 9.5}
]

//imperativo
let total1 = 0
for(let i=0; i<alunos.length; i++){
    total1 += alinos[i].nota
}
console.log('media: ', total1 / alunos.length)

//Declativo