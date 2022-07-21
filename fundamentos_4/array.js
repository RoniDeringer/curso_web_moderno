const valores = [1, 1.5, 2.5, 3.5]

console.log(`   indice 0: ${valores[0]} 
                indice 3: ${valores[3]} \n
            `)

valores[10] = 4.5
//vai ficar valores vazios no meio:
console.log(valores ,'\n')

//push serve pra adicionar no proximo indice vazio
valores.push('teste')
console.log(valores ,'\n')

// pop pega o ultimo valor do array
console.log(`pop: ${valores.pop()}`)

//delete: deleta um valor de array



