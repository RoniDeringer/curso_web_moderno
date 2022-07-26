const x = 'Global'

function fora (){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

console.log(fora()()) //Local 