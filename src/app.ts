import express, { Application, Request, Response, NextFunction } from 'express';
import habitoRouter from './routes/habito.route';
import categoriaRouter from './routes/categoria.route';
import usuarioRouter from './routes/usuario.route';
import rolesRouter from './routes/rol.route';
import frecuenciasRouter from './routes/frecuenciaHabito.route';
import recordatorioRouter from './routes/recordatorio.route';
import fraseRouter from './routes/fraseMotivacional.route';
import seguimientoRouter from './routes/seguimiento.route';
import authRouter from './routes/auth.route';
import cors from 'cors';

import { AppDataSource } from './config/appdatasource';

const app: Application = express();
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Rutas principales
app.use('/api/v1/habitos', habitoRouter);
app.use('/api/v1/categorias', categoriaRouter);
app.use('/api/v1/usuarios', usuarioRouter);
app.use('/api/v1/roles', rolesRouter);
app.use('/api/v1/frecuencias', frecuenciasRouter);
app.use('/api/v1/recordatorios', recordatorioRouter);
app.use('/api/v1/frases', fraseRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/seguimientos', seguimientoRouter);

// Middleware para rutas no encontradas (404)
app.use((req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: "Ruta no encontrada",
        data: null
    });
});

// Middleware de manejo de errores internos (500)
app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
    console.error("Error interno:", err);
    res.status(500).json({
        success: false,
        message: "Error interno del servidor",
        data: null
    });
});

// Inicializar la base de datos
export const startServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Conectado a la BD');
    } catch (error) {
        console.error('Error al conectar a la BD', error);
    }
};

export default app;
