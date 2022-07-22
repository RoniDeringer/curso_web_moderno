//for in recebe apenas o indice

const vetor = [ 5.6, 5.8, 3.2, 7.8, 1.6]

for(let i in vetor)
{
    console.log(i) //0, 1, 2, 3, 4 
}


console.log('\n-----------------\n')


//consigo percorrer um objeto também:
const pessoa = {
    nome: 'Roni',
    idade: 19,
    sexo: 'Masculino',
    peso: 70
}

for (let indices in pessoa){
    console.log(`${indices} = ${pessoa[indices]}`)
}