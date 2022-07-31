const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.5
    },
    {
        nome: 'Ana',
        nota: 9.0
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 7.5
    }, {
        nome: 'Rogerio',
        nota: 6.0
    }]
}]


//extrair as notas de todos os objetos do array

const geNotaDoAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(geNotaDoAluno)

const notas1 = escola.map(getNotaDaTurma)
//  [ [ 8.5, 9 ], [ 7.5, 6 ] ]


Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const todasNotas = escola.flatMap(getNotaDaTurma)
console.log(todasNotas)
//   [ 8.5, 9, 7.5, 6 ]