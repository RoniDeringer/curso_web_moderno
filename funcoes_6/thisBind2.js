//o Método do js: "setInterval" dispara o primeiro parametro a cada "x" milisegundos
// no caso uma função e 1000 milisegundos  como parametros

// eu instancio a função "Pessoa" e crio o atributo "idade"
// dentro da função Pessoa eu faço a chamada da função setInterval
function Pessoa(){
    this.idade = 0
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }/*.bind(this)*/,1000)   //bind resolveria
}

//eu instancio a função Pessoa para criar um objeto:
new Pessoa  //retorna: NaN
