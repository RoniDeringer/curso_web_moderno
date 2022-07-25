function Carro(velocidadeMaxima = 200, delta = 5) {

    //atributo privado
    let velocidadeAtual = 0

    //metodo publico:
    this.acelerar = function () {
        if ((velocidadeAtual + delta) <= velocidadeMaxima) {
            velocidadeAtual += 5
        } else {
            velocidadeAtual = velocidadeMaxima
        }

        
        //metodo publico
        this.getVelocidadeAtual = function(){
            return velocidadeAtual
        }

        //metodo publico:
        this.setVelocidadeAtual = function (novaVelocidadeAtual){
            velocidadeAtual = novaVelocidadeAtual
        }
    }
}

//1ª instancia
let Celta = new Carro //sem parametros = vai usar o valor default
Celta.acelerar()
console.log(Celta.getVelocidadeAtual())
Celta.setVelocidadeAtual(50)
console.log(Celta.getVelocidadeAtual())


//2ª instancia
let Ferrari = new Carro(350, 20) //Ferrari é um OBJETO q foi INSTANCIADO a partir da função Carro
Ferrari.acelerar()



console.log(typeof(Celta))  //objeto, uma INSTANCIA da função
console.log(typeof(Carro)) //função