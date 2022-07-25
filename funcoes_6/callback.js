
const notas = [9.4, 5.5, 3.9, 8.5, 1.0]

//sem callback:
let notasBaixas = []
for (i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)


//usando a função filter como callback
let notasBaixas2 = notas.filter(notas => notas < 7)
console.log(notasBaixas2)

//ou seja, pra cada indice do vetor, é CHAMADA essa função  :)
