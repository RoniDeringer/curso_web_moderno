const produto = new Object 
produto.nome = 'cadeira'
produto['marca'] = 'logitech'

console.log(produto) // { nome: 'cadeira', marca: 'logitech' }


const carro = {
    modelo: 'Celta',
    marca: 'Chevrolet',
    dono:{
        nome: 'Roni',
        idade: 20,
        endereco:{
            rua: 'Rua',
            numero: 785
        },
    },
    multas:[1,2,3],
    condutores:[{
        nome: 'Roni',
        idade: 20
    },{
        nome: 'Duda',
        idade: 19
    }],
    getSomaPontos(){
        //...
    }
}
console.log(carro)



carro.dono.endereco.numero = 12
carro['dono']['endereco']['rua'] = 'newRua'

console.log(carro)
