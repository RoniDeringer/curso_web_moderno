{
    const peso1 = 1.0
    const peso2 = Number('2.0')

    console.log(peso1, peso2)
    console.log(Number.isInteger(peso1))
    console.log(Number.isInteger(peso2)) // é inteiro? (true)

    const avaliacao1 = 9.871
    const avaliacao2 = 6.871

    const total = avaliacao1 * peso1 + avaliacao2 * peso2
    const media = total / (peso1 + peso2)

    console.log('casas decimais(toFixed): ',media.toFixed(2) ,'\n') //casas decimais
    console.log('Binario(toString): ',media.toString(2) ,'\n') // em binário
    console.log('Tipo (typeof): ',typeof media  ,'\n')
    console.log(typeof Number ,'\n')
}
{
    console.log(7 / 0)  //infinity
    console.log("10.2" / 2)  //5
    console.log('3' + 2) // string ganha!
    console.log('3' - 2)
    console.log("Show!" * 2)
    console.log(0.1 + 0.7)
    // console.log(10.toString())
    console.log((10.345).toFixed(2)) ,'\n'
}
{
    const raio = 5.6
    const area = Math.PI * Math.pow(raio, 2)

    console.log(area)
    console.log(typeof Math)

    console.log("Consigo dividir string por int:")
    console.log("10"/2 ,'\n')

    const texto = "Roni Deringer"
    console.log("charAt (posicao String)")
    console.log(texto.charAt(3))

    console.log("substring (intervalo de carecteres) ")
    console.log(texto.substring(0, 4) ,'\n')

    console.log("Concat(concatena)")
    console.log('Texto '.concat(texto).concat("!") ,'\n')

    console.log("split (transforma em array (parametro o separador))")
    console.log('Ana,Breno, Pedro,José'.split(',') ,'\n')
}