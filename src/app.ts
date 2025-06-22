import express, { Application, Request, Response } from 'express';
import habitoRouter from './routes/habito.route'
import categoriaRouter from './routes/categoria.route';
import usuarioRouter from './routes/usuario.route';
import rolesRouter from './routes/rol.route';
import frecuenciasRouter from './routes/frecuencia.route'
import recordatorioRouter from './routes/recordatorio.route'
import fraseRouter from './routes/frase.route'
import seguimientoRouter from './routes/seguimiento.route'
import authRouter from './routes/auth.route';



import { AppDataSource } from './config/appdatasource';
const app : Application = express();

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


export const startServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Conectado a la BD');
    } catch (error) {
        console.error('Error al conectar a la BD',error);
    }
}
export default app;