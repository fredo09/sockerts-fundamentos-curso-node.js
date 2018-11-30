/**
 *  On es para escuchar y li emmit es para emitir
 */
    var socket = io();
    //CONEXION AL SERVIDOR
    socket.on('connect', function (){
      console.log('Conectado al sevidor');
    });

    //Desconexion del servidor
    socket.on('disconnect', function () {
      console.log('Desconectado del servidor');
    });

    //Emitir un mensaje al servidor
    socket.emit('enviarMensaje',{
      Usuario: 'Alfredo',
      Message: 'Hola mundo!!'
    }, function (req){
      console.log("mi respuesta del servidor" , req);
    });

    //recibir mensaje del servidor
    socket.on('enviarMensaje', function (message){
      console.log(message);
    });
