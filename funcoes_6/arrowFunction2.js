
/**
 * arrow Function:
 */
 function Pessoa(){
    this.idade = 00
    setInterval(()=>{
        this.idade++
        console.log(this.idade)
    },1000)
}
new Pessoa //funciona


/**
 * funcao normal:
*/
function Pessoa2(){
    this.idade = 0
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    },1000)  
}
new Pessoa2 //NaN