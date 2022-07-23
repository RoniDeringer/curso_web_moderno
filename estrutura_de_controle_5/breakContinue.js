const vetor = [0,1,2,3,4,5,6,7,8,9]

for(let i in vetor){
    if (i==5){
        break
    }
    console.log(i) //0,1,2,3,4
}

console.log('\n-------------\n')

for(let x in vetor){
    if (x==5){
        continue
    }
    console.log(x) //0,1,2,3,4,6,7,8,9
}


console.log('\n-------------\n')
console.log('\n break em um for mais a cima\n')
console.log('\n-------------\n')

forExterno: for (a in vetor){
    for (b in vetor){
        if (a==2 && b==3) break forExterno
        console.log(`${a},${b}`) //0,1  0,2   0,3  até   2,2
    }
}
//nao vale a pena fazer isso, melhor separar em metodo