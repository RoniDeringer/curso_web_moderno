//splice pode adicionar e remover 

/**
 * parametros:
 * posicao (inteiro)
 * qtd de elementos q vai remover a partir do indice (inteiro)
 * o que vai adicionar (* , quantidade que quiser passar)
 */


const nome = ['roni', 'duda', 'felipe', 'daniel']

nome.splice(2, 0, 'carlos', 'alessando')
//[ 'roni', 'duda', 'carlos', 'alessando', 'felipe', 'daniel' ]


nome.splice(0,2) //removi os 2 primeiros

console.log(nome)



// slice = cria um novo array a partir do indice passado

const nome2 = ['roni', 'duda', 'felipe', 'daniel']

const nome2_2 = nome2.slice(2)
//[ 'felipe', 'daniel' ]

const nome2_3 = nome2.slice(1,3)
//[ 'duda', 'felipe' ]
// ele pega o indice 1 mas nao o 3  

console.log(nome2_3)

