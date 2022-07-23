//o Método do js: "setInterval" dispara o primeiro parametro a cada "x" milisegundos
// no caso uma função e 1000 milisegundos  como parametros

// eu instancio a função "Pessoa" e crio o atributo "idade"
// dentro da função Pessoa eu faço a chamada da função setInterval
function Pessoa(){
    this.idade = 0
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }/*.bind(this)*/,1000)   //bind resolveria ! ! ! ! !
}
new Pessoa //NaN
//eu instancio a função Pessoa para criar um objeto:
 //new Pessoa  //retorna: NaN



console.log('- - - self - - - ')

 
function Funcao1(){
    this.atributo1 = 'Olá!'
    const self = this  
    setInterval(function(){
        console.log(self.atributo1)
    },500)
}
new Funcao1 //Olá!