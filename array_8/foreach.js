const nome = ['roni', 'duda', 'fabio', 'daniel']

nome.forEach(function(nome, indice){
    console.log(`${indice} - ${nome} `)
})

//arrow function sem o indice:
nome.forEach(nome => console.log(nome))


//3 parametros
nome.forEach(function(nome, indice, vetor){
    console.log(`${indice} - ${nome} | array inteiro: ${vetor}`)
})