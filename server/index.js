/**
 * Index principal para sockets
 */

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const http = require('http');

const app = express();
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//Creando Servidor HTTP
let server = http.createServer(app);

//Creando la cominicacion del backend y exportando el objeto IO
module.exports.io = socketIO(server);

//Requeriendo la configuracion del socket.js
require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
