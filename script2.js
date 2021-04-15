//SERVIÇO SAUDAÇÃO
var http = require('http');
const { Session } = require('inspector');
var url = require('url');
let math = require('./matematica.js')

//criando um objeto do tipo servidor
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'}); //monta o cabeçalho da página web
    var q = url.parse(req.url, true).query; //recebe um objeto url para consulta

    let convA = parseInt(q.numA);
    let convB = parseInt(q.numB);
    const espacoVirtual = ' - Resposta: '

    if(q.soma){
        var calc = math.soma(convA, convB); 
    }
    else if(q.mult){
        var calc = math.mult(convA, convB);
    }
    else if(q.sub){
        var calc = math.sub(convA, convB);
    }
    else if(q.div){
        var calc = math.div(convA, convB);
    }
    else{
        var calc = 'Valor indefinido!, por favor adicionar os números';
    }
    var txt = "Oii " + q.nome + espacoVirtual + calc; //consultando um atributo da url, no caso chamado nome
    res.end(txt); //imprime o texto na tela
}).listen(4000); //porta de conexão