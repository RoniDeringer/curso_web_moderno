//função sem retorno
function getSoma(a,b)
{
    console.log(a+b)
}

getSoma(2,3) //5
getSoma(2) //NaN
getSoma(2,1,7,9,8) //3 pega os 2 primeiros e ignora o resto

console.log('\n------------\n')

//função com retorno com valor default
function getSubtracao(a,b=0)
{
    return a-b
}

let teste1 = getSubtracao(8,5) //3
let teste2 = getSubtracao(8) //8
console.log(teste2)


