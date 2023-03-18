import { DataSource } from "typeorm"

export const myDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "first_test",
    entities: ["src/entity/*.js"],
    logging: true,
    synchronize: true,
})

