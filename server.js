'use strict'

console.log('Olá mundo!!!');

const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');


const app = express();
// para usar uma porta q esteja disponiel ||(ou) a 3000;
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// criando o servidor
const server = http.createServer(app);

// criando rotas
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

app.use('/', route);

server.listen(port);
console.log("API rodando na porta" + port);

// função para usar a porta q estiver disponivel; 
function normalizePort(val) {
    const port = parseInt(val, 10);
// se a porta n for um numero ela retorna 10;
    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }
    return false
}

function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    const bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }