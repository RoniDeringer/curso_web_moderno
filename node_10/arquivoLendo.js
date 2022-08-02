const fs = require('fs')  // padrao do node
const caminho = __dirname + '/arquivo.json'

//sincrono:
const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo)

//Assincrono::
fs.readFile(caminho, 'utf-8',(err, conteudo) => {
    const config1 = conteudo //isso aqui está como string
    const config2 = JSON.parse(conteudo) //agora ta no formato Objeto
  
//   console.log(config1.db.host)  isso da erro pois config1 não é objeto 
    console.log('host: ',config2.db.host)
  
    console.log(config2)
})

//ler um diretorio:
fs.readdir(__dirname, (err, arquivos)=> {
    console.log('Conteudos da pasta:')
    console.log(arquivos)
})