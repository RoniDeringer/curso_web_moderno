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



const exec = (ctx, ...middleware) => {
    const execPasso = indice => {
        middleware 
        && indice < middleware.length 
        && middleware[indice](ctx, () =>execPasso(indice+1)) 
    }
    execPasso(0)
}

const ctx = {}

// exec(ctx, passoA, passoB, passoC)
// console.log('\n',ctx)

exec(ctx, passoB)
console.log('\n outra ordem: \n',ctx)


exec(ctx, passoB, passoA, passoC)
console.log('\n outra ordem: \n',ctx)




