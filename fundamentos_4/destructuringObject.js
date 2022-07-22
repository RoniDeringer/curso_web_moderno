/**
 * consigo DESISTRUTURAR um objeto
 * recebendo os elementos em forma de variavel
 */

const pessoa = {
    nome: 'roni',
    idade: 19,
    sexo: 'masculino',
    tipo: 'Homem',
    endereco: {
        rua: 'Teodora',
        Bairro: 'Primavera',
        numero: 487
    } 
}

const { nome, endereco: { rua } } = pessoa

console.log(`nome: ${nome}`) //roni
console.log(`Rua: ${rua}`) //Teodora


//obs: Consigo mudar os nomes que quero receber:
const{tipo: tipoSexo} = pessoa

console.log(`tipo Sexo: ${tipoSexo}`) //Homem


//caso talvez nao tenha no objeto consigo colocar valor default
const {sobrenome, telefone='+55'} = pessoa

console.log(sobrenome) //undefined
console.log(telefone) // +55

