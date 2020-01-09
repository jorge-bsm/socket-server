import { SERVER_PORT } from "./global/environment";
import Server from "./classes/server";
import { router } from './routes/router'
import bodyParser from 'body-parser';
import cors from 'cors';

const server = Server.instance;

//BodyParser. Lo que me posteen lo tomo y genero un objeto JS
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );

//CORS. Permitiendo que cualquier persona pueda llamar mis servicios
server.app.use( cors({ origin: true, credentials: true }) )


server.app.use('/', router );

server.start( () => {
    console.log(`Servidor corriendo en el puerto ${ SERVER_PORT }`);
});