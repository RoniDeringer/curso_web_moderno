const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false },
    {nome: 'Maria', nota: 2.9, bolsista: false },
    {nome: 'Jose', nota: 9.1, bolsista: true },
    {nome: 'Pedro', nota: 5.2, bolsista: true },
]

//DESAFIO 1: Todos os alunos sao bolsistas?

const getBolsa = alunos.map(a => a.bolsista)
getBolsa.forEach(element => {
    if(!element)
    return console.log('false')
    
});

//com reduce:
const getBolsistas = (resultado, bolsista) => resultado && bolsista
console.log('reduce: ',alunos.map(a => a.bolsista).reduce(getBolsistas))



//DESAFIO 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log('reduce (algum bolsista): ',alunos.map(a => a.bolsista).reduce(algumBolsista))

