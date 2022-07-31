const http = require('http') //como é do node, nao preciso especificar o caminho
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)

/**
 * pra rodar:
 * da Run no codigo
 * e abre: localhost:8080
 */
