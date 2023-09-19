import Sequelize  from "sequelize";
import { config } from "dotenv";

// Cargar las variables de entorno desde el archivo .env
config();

const { DB_NAME, DB_DATABASE, DB_PASSWORD } = process.env;
export const sequelize = new Sequelize(DB_NAME, DB_DATABASE, DB_PASSWORD,{
    host:'localhost',
    dialect:'postgres'
})