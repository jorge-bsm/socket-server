import { Router, Request, Response } from 'express';
import Server from '../classes/server';

export const router = Router();

router.get('/mensajes',( req: Request, res: Response ) => {
    res.json({
        ok: true,
        mensaje: 'GET - Listo'
    });
});

router.post('/mensajes',( req: Request, res: Response ) => {
    
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    const payload = {
        de,
        cuerpo
    }

    const server = Server.instance;
    server.io.emit('mensaje-nuevo', payload);

    res.json({
        ok: true,
        cuerpo,
        de
    });
});

router.post('/mensajes/:id',( req: Request, res: Response ) => {
    
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;

    const payload = {
        de,
        cuerpo
    }

    const server = Server.instance;
    server.io.in( id ).emit('mensaje-privado', payload);

    res.json({
        ok: true,
        cuerpo,
        de,
        id,
    });

});

router.post('/room/',( req: Request, res: Response ) => {
    
    const nombre = req.body.nombre;
    const pin = req.body.pin;

    res.json({
        "Nombre del estudiante":nombre,
        "PIN de la actividad": pin
    });
});