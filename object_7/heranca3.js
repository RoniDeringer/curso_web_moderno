const carro = {
    velAtual : 0,
    velMax : 200,
    
    acelerar(delta){
        if((this.velAtual + delta) >= this.velMax){
            this.velAtual = this.velMax
        }else{
            this.velAtual =+delta
        }
    },

    status(){
        return `${this.velAtual}Km/h de ${this.velMax}`
    }
}

const ferrari ={
    velMax: 340, //shadowing: quando eu sobreescrevo
    modelo: 'F40'
}

const volvo ={
    modelo: 'V40',
     status(){
        return `${this.modelo}: ${super.status()}` //chama o status() do objeto pai
     }
}

//setPrototypeOf(filho, pai)
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)


/**
 * testes:
 */

volvo.acelerar(150)
ferrari.acelerar(150)

console.log('volvo:   ',volvo.status())
console.log('ferrari: ',ferrari.status())

