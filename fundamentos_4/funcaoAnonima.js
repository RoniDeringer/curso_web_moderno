//armazenar uma funcao em uma variavel:
const getSoma = function(a,b)
{
    console.log (a+b)
}


//armazenando uma função ARROW em uma variavel:
const getSoma2 = (a,b) => 
{
    console.log(a+b)
}


//RETORNO IMPLICITO (posso fazer isso quando minha função tiver apenas uma linha)
const getSoma3 = (a,b) => a+b

//obs se eu tiver apenas um parametro, eu posso retirar os parenteses
const numero = n => console.log(n )