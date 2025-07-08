import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { Habito } from '../entities/habito';
import { Categoria } from '../entities/categoria';
import { Rol } from '../entities/rol';
import { Usuario } from '../entities/usuario';
import { FrecuenciaHabito } from '../entities/frecuenciaHabito';
import { Recordatorio } from '../entities/recordatorio';
import { FraseMotivacional } from '../entities/fraseMotivacional';
import { Seguimiento } from '../entities/seguimiento';

export const AppDataSource = new DataSource({
  type: 'mssql',
  host: process.env.DB_HOST || 'LAGUIRRE',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 1433,
  username: process.env.DB_USERNAME || 'sa',
  password: process.env.DB_PASSWORD || 'sa',
  database: process.env.DB_NAME || 'MisHabitos',
  synchronize: false,
  logging: false,
  entities: [
    Habito,
    Categoria,
    Rol,
    Usuario,
    FrecuenciaHabito,
    Recordatorio,
    FraseMotivacional,
    Seguimiento,
  ],
  extra: {
    options: {
      encrypt: false,
      enableArithAbort: true,
      trustServerCertificate: true,
    },
  },
});

export default AppDataSource;
