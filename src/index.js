import app from "./app.js";
import { sequelize } from "./database/database.js";


async function main(){
    try {
        await sequelize.sync({force:false});
      
        app.listen(3001);
        console.log("escuchando en el puerto " + 3001)
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

main();