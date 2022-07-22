function trataErro(msgErro){
    throw new Error('Erro na função: gritar')
}


function gritar (obj)
{
    try{
    console.log(obj.name.toUpperCase())  //nao existe NAME entao cai no erro
    } catch(e){
        trataErro(e)
    }finally{
        console.log('fim...')
    }
}


const obj = {nome: 'roni'}
gritar(obj)






