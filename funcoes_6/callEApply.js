function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto ={
    nome: 'Notebook',
    preco: 1000,
    desc: 0.15,
    getPreco
}

console.log('padrao: ',getPreco()) //NaN
console.log('contexto do obj: ',produto.getPreco()) //R$850

//usando call e apply


const produto2 = {
    nome: 'Celular',
    preco: 1500,
    desc: 0.20
}

console.log('\ncall: ',getPreco.call(produto2))
console.log('apply',getPreco.apply(produto2))

//passando parametros:
console.log('\n- - - params - - - \n')

console.log(getPreco.call(produto2, 0.20, '$'))
console.log(getPreco.apply(produto2, [0.20, '$']))