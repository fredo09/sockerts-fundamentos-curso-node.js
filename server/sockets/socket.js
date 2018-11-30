/**
 * Conexiones con sockets
 */

const { io } = require('../index');

//Conexicon abierta a los usuarios
io.on('connection', (client) =>{
  console.log('cliente conectado');

  //Emitiendo mensaje
  client.emit('enviarMensaje', {
    Usuario: 'Administrador',
    message: 'Te has conectado'
  });

  //Cliente descomectado
  client.on('disconnect', () =>{
    console.log('Usuario Desconectado');
  });

  client.on('enviarMensaje', (data, callback) =>{
    console.log(data);

    //Enviar a varios clientes o usuarios la informacion
    client.broadcast.emit('enviarMensaje', data);
    // if(message.Usuario){
    //   callback({
    //     req : 'Todo salio Bien!! '
    //   });
    // }else{
    //   callback({
    //     req: 'Todo salio Mal!!!!'
    //   });
    // }

  });
});
