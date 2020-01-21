import { Socket } from 'socket.io';
import { UsuariosList } from '../classes/usuarios-lista';
import { Usuario } from '../classes/usuario';

export const usuariosConectados = new UsuariosList();

export const conectarCliente = ( cliente: Socket ) =>{
    const usuario = new Usuario( cliente.id );
    usuariosConectados.agregar( usuario );
}


export const desconectar = ( cliente: Socket ) => {

    cliente.on('disconnect', ()=>{
        usuariosConectados.borrarUsuario( cliente.id );
        console.log('Cliente desconectado');
    });

}

//Escuchar mensajes
export const mensaje = ( cliente: Socket, io: SocketIO.Server ) => { 

    cliente.on('mensaje', ( payload: { de:string, cuerpo:string } )=>{

        console.log('Mensaje recibido', payload);

        io.emit('mensaje-nuevo', payload);

    });
}

//Configurar usuario
export const ConfigurarUsuario = ( cliente: Socket, io: SocketIO.Server ) => { 

    cliente.on('configurar-usuario', ( payload: { nombre: string }, callback: Function )=>{

        //console.log('Configurando usuario', payload.nombre);
        usuariosConectados.actualizarNombre( cliente.id, payload.nombre );

        callback({
            ok: true,
            mensaje: `Usuario ${ payload.nombre }, configurado`
        });

    });
}