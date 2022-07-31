//quando faz esse import, ele vai procurar:
// dentro de node_modules
// procurar o lodash
// e vai carreegar o index
const _ = require('lodash')

//exemplo utilizando a função random do lodash

setInterval(() => console.log(_.random(1,10)),2000)

