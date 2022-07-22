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