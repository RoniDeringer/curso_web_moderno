const valor = 'Global'

function funcao1(){
    console.log(valor)
}

function funcao2(){
    const valor = 'Local'
    funcao1()
}

funcao2() //Global