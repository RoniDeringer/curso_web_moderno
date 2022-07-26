/**
 * tenho q colocar dentro de parenteses 
 * e ela já é invocada na hora
 * função anonima  
 */

(function(){
    console.log('Será executado na hora')
    console.log('Foge do escopo mais abrangente!')
})()


// mesma coisa q fizer isso:
//porem é feito no escopo global assim:
console.log('Será executado na hora')
console.log('Foge do escopo mais abrangente!')