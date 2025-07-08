import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';

// 🛣️ Importar rutas
import habitoRouter from './routes/habito.route';
import categoriaRouter from './routes/categoria.route';
import usuarioRouter from './routes/usuario.route';
import rolesRouter from './routes/rol.route';
import frecuenciasRouter from './routes/frecuenciaHabito.route';
import recordatorioRouter from './routes/recordatorio.route';
import fraseRouter from './routes/fraseMotivacional.route';
import seguimientoRouter from './routes/seguimiento.route';
import authRouter from './routes/auth.route';

// 🔗 Importar conexión a la base de datos
import { AppDataSource } from './config/appdatasource';

const app: Application = express();

// ✅ Middleware CORS
app.use(cors({
  origin: [
    'http://127.0.0.1:8080',
    'http://localhost:3000',
    'http://10.0.2.2:3000'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

//  Middleware para parsear JSON
app.use(express.json());

//  Definir prefijos y rutas
app.use('/api/v1/habitos', habitoRouter);
app.use('/api/v1/categorias', categoriaRouter);
app.use('/api/v1/usuarios', usuarioRouter);
app.use('/api/v1/roles', rolesRouter);
app.use('/api/v1/frecuencias', frecuenciasRouter);
app.use('/api/v1/recordatorios', recordatorioRouter);
app.use('/api/v1/frases', fraseRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/seguimientos', seguimientoRouter);

// Manejo de rutas no encontradas
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: " Ruta no encontrada",
    data: null
  });
});

//  Manejo de errores internos
app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
  console.error("Error interno:", err);
  res.status(500).json({
    success: false,
    message: "Error interno del servidor",
    data: null
  });
});

// 🚀 Inicialización del servidor y la base de datos
export const startServer = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Conectado a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos', error);
  }
};

export default app;
