import { Router, Request, Response } from 'express';

export const router = Router();

router.get('/mensajes',( req: Request, res: Response ) => {
    res.json({
        ok: true,
        mensaje: 'GET - Listo'
    });
});

router.post('/mensajes',( req: Request, res: Response ) => {
    
    const cuerpo = req.body.cuerpo;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;

    res.json({
        ok: true,
        mensaje: 'POST - Listo',
        cuerpo,
        nombre,
        apellido
    });
});

router.post('/mensajes/:id',( req: Request, res: Response ) => {
    
    const cuerpo = req.body.cuerpo;
    const apellido = req.body.apellido;
    const nombre = req.body.nombre;
    const id = req.params.id;

    res.json({
        ok: true,
        cuerpo,
        nombre,
        apellido,
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