const soma = function (x,y){
    return x+y
}
const subtracao = function(x,y){
    return x-y
}

let calculo= function (a, b, operacao = soma){
    console.log(calculo(a,b))
}

calculo(2,4)//6
calculo(2,4,soma)//6
calculo(5,2,subtracao)//3

//até mesmo passar uma funcao como parametro:
calculo(2,5,function(c,d){
    return c*d
})  //10

//arrow function como parametro
calculo(2,5, (e,f) => e * f)