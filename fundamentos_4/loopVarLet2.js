/**
 * crio um vetor com uma função anonima
 */


//var
const funcs = []

for(var i=0; i<10; i++)
{
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]() //10
funcs[8]() //10

//------------------------

//let
const funcio = []

for(let i = 0; i<10; i++)
{
    funcio.push(function(){
        console.log(i)
    })
}
funcio[2]() //2
funcio[8]() //8