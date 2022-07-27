const sequencia ={
    _valor: 1,

    get valor(){
        return this._valor
    },

    set valor(valor){
        this._valor = valor
    }

}

/**
 * OBS: ele ja entende quando eu quero usar o GET e quando eu quero usar o SET
 */


sequencia.valor += 5 //6

console.log(sequencia._valor)