global.novaFuncao = {
    saudacao(){
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal ! ! !'
}

//caso eu não queria permitir alterar os valores eu uso o freeze


global.novaFuncao2 = Object.freeze({
    saudacao(){
        return 'Estou em todos os lugares!'
    },
    nome: 'Freeeezeee'
})


