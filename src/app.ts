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
app.use(cors({
  origin: 'http://127.0.0.1:8080',  // Permitir solicitudes solo desde este origen
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'],  // Encabezados permitidos
}));

app.use(express.json());

app.use('/api/v1/habitos', habitoRouter);
app.use('/api/v1/categorias', categoriaRouter);
app.use('/api/v1/usuarios', usuarioRouter);
app.use('/api/v1/roles', rolesRouter);
app.use('/api/v1/frecuencias', frecuenciasRouter);
app.use('/api/v1/recordatorios', recordatorioRouter);
app.use('/api/v1/frases', fraseRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/seguimientos', seguimientoRouter);

app.use((req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: "Ruta no encontrada",
        data: null
    });
});

app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
    console.error("Error interno:", err);
    res.status(500).json({
        success: false,
        message: "Error interno del servidor",
        data: null
    });
});

export const startServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Conectado a la BD');
    } catch (error) {
        console.error('Error al conectar a la BD', error);
    }
};

export default app;
