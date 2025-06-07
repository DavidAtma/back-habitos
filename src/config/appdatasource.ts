import { DataSource } from "typeorm";
import { Habito } from "../entities/habito";
import { Categoria } from "../entities/categoria";
import { Rol } from "../entities/rol";
import { Usuario } from "../entities/usuario";

export const AppDataSource = new DataSource({

    type: process.env.DB_TYPE as any || 'mssql',
  host: process.env.DB_HOST || 'DESKTOP-IERGM4D\\AMSSSQL',
  port: parseInt(process.env.DB_PORT as any, 10) || 1433,
  username: process.env.DB_USERNAME || 'sa',
  password: process.env.DB_PASSWORD || '123',
  database: process.env.DB_NAME || 'HabitFlow',

  entities: [
    Habito,
    Categoria,
    Rol,
    Usuario
  ]

})