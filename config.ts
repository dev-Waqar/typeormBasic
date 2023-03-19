import { DataSource } from "typeorm"

// export const myDataSource = new DataSource({
//     type: "mysql",
//     host: "localhost",
//     port: 3306,
//     username: "root",
//     password: "",
//     database: "first_test",
//     entities: ["src/entity/*.js"],
//     logging: true,
//     synchronize: true,
// })



// import { createConnection } from "typeorm";
const { createConnection } = require("typeorm");

 async function main() {
     const myDataSource = await createConnection({
    type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "",
        database: "first_test",
        entities: ["src/entity/*.js"],
        logging: true,
        synchronize: true,
  });
//   module.exports=myDataSource;

//added for solving version problem
  try {
    const versionQueryResult = await myDataSource.query("SELECT VERSION() AS version");
    console.log("Database version:", versionQueryResult[0].version);
    if (versionQueryResult && versionQueryResult[0] && versionQueryResult[0].version) {
        console.log("Database version:", versionQueryResult[0].version);
      } else {
        console.error("Could not retrieve database version.");
      }

    await myDataSource.transaction(async (manager) => {
      const columnsQueryResult = await manager.query("SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = 'first_test' AND TABLE_NAME = 'typeorm_metadata'");
      console.log("Columns in typeorm_metadata table:", columnsQueryResult);

      // Perform other database operations within the transaction here
    });
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    await myDataSource.close();
  }
}

main();



