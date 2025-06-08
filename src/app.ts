import express, { Application, Request, Response } from 'express';
import habitoRouter from './routes/habito.route'
import { AppDataSource } from './config/appdatasource';
const app : Application = express();

app.use(express.json());
app.use('/api/v1/habitos', habitoRouter);

export const startServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Conectado a la BD');
    } catch (error) {
        console.error('Error al conectar a la BD',error);
    }
}
export default app;