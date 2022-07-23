//es2015 eu posso ter uma funçao dentro de um objeto
const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar() //Bom dia!
const falar3 = pessoa.falar
falar3() //undefined = conflito entre paradigmas: funcional e OO
/**
 * quando eu recebo uma função dentro de uma variavel
 * eu mudo o contexto do this e isso gera um problema
 * pra resolver isso eu posso usar o BIND 
 */



const falarDePessoa = pessoa.falar.bind(pessoa)
//linha acima: eu declaro que o this vai servir para o contexto obejto pessoa
// ou seja eu "amarro" ele a um determinado contexto, no caso, o objeto pessoa

falarDePessoa() //Bom dia!


// Nota: observe q na linha 20 eu uso o mesmo método falar q passei na linha 10,
// apenas passei o bind junto amarrando pessoa




console.log( '--- teste----')

const objeto1 = {
    escreva: 'bom dia!',
    falar() {
        console.log(this.escreva)
    } 
}

const ouvir1 = objeto1.falar.bind(objeto1) //assim funciona
let ouvir2 = objeto1.falar //undefined

ouvir1()//bom dia1
ouvir2()//undefined
