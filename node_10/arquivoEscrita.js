const fs = require('fs')

const produto = { 
    nome: 'Celular',
    preco: 1300.99,
    desconto: 0.10
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo salvo!')
})

//com isso, eu gero um arquivo chamado arquivoGerado.json que possue um json desse objeto