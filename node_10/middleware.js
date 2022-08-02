//middleware (chain of responsibility)

//contexto é um objeto que vai sendo passando pelas cadeias e vai levando informações
const passoA = (context, next) => {
    context.valor1 = 'mid1'
    next()
}

const passoB = (context, next) => {
    context.valor2 = 'mid2'
    next()
}

const passoC = context => context.valor3 = 'mid3'




