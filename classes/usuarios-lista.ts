import { Usuario } from "./usuario";

export class UsuariosList {

    private lista: Usuario[] = [];

    constructor(){}

    //Obtener un usuario
    public agregar( usuario: Usuario ){
        this.lista.push( usuario );
        console.log( this.lista );
        return usuario;
    }

    //Actualizar nombre de un usuario
    public actualizarNombre( id: string, nombre: string ){
        for(let usuario of this.lista){
            if( usuario.id === id ){
                usuario.nombre = nombre;
                break;
            }
        }

        console.log('==== Actualizando usuario ====');
        console.log( this.lista );
    }

    //Obtener lista de usuarios
    public getLista(){
        return this.lista;
    }

    //Regresar un usuario
    public getUsuario( id: string ){
        return this.lista.find( usuario => usuario.id === id );
    }

    //Obtener usuarios en una sala en particular

    public getUsuariosEnSala( sala: string ){
        return this.lista.filter( usuario => usuario.sala === sala );
    }

    //Borrar un usuario ... se puede resumir como arriba
    public borrarUsuario( id: string ){
        const tempUsuario = this.getUsuario( id );
        return this.lista = this.lista.filter( usuario => {
            return usuario.id != id;
        });

        return tempUsuario;
    }


}