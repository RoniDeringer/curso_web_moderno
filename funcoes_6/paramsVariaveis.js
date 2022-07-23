function getSoma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(getSoma(1, 4)) //5
console.log(getSoma()) //0
console.log(getSoma(1, 4)) //5
console.log(getSoma(1, 2, 'teste')) //3teste
console.log(getSoma('a', 'b', 'c')) //0abc  o zero ja está presente em soma=0


