import { DataSource } from "typeorm";
import { Habito } from "../entities/habito";
import { Categoria } from "../entities/categoria";
import { Rol } from "../entities/rol";
import { Usuario } from "../entities/usuario";
import { FrecuenciaHabito } from "../entities/frecuenciaHabito";
import { Recordatorio } from "../entities/recordatorio";
import { FraseMotivacional } from "../entities/fraseMotivacional";
import { Seguimiento } from "../entities/seguimiento";

export const AppDataSource = new DataSource({

    type: process.env.DB_TYPE as any || 'mssql',
  host: process.env.DB_HOST || 'DESKTOP-IERGM4D\\AMSSSQL',
  port: parseInt(process.env.DB_PORT as any, 10) || 1433,
  username: process.env.DB_USERNAME || 'sa',
  password: process.env.DB_PASSWORD || '123',
  database: process.env.DB_NAME || 'HabitFlow',
synchronize: false, 
  extra: {
    options: {
      encrypt: false, 
      enableArithAbort: true,
      trustServerCertificate: true,
    },
  },
  entities: [
    Habito,
    Categoria,
    Rol,
    Usuario,
    FrecuenciaHabito,
    Recordatorio,
    FraseMotivacional,
    Seguimiento
  ],

});
export default AppDataSource;
