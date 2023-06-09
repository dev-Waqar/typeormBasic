import express = require("express")
import { Request, Response } from "express"
import { User } from "../entity/user"
import {  myDataSource } from "../config"
const app = express()
app.use(express.json())
// establish database connection
myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

// create and setup express app

const user = new User()
// user.firstName = "Timber"
// user.lastName = "Saw"
// user.age = 25


// register routes
app.get("/users", async function (req: Request, res: Response) {
    const users = 
//     user.firstName = "Timber"
// user.lastName = "Saw"
await myDataSource.getRepository(User).find()
    res.json(users)
})

app.get("/users/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(User).findOneBy({
        id: req.params.id,
    })
    return res.send(results)
})

app.post("/users", async function (req: Request, res: Response) {
    const user = await myDataSource.getRepository(User).create(req.body)
    const results = await myDataSource.getRepository(User).save(user)
    return res.send(results)
})

// app.put("/users/:id", async function (req: Request, res: Response) {
//     const user = await myDataSource.getRepository(User).findOneBy({
//         id: req.params.id,
//     })
//     myDataSource.getRepository(User).merge(user, req.body)
//     const results = await myDataSource.getRepository(User).save(user)
//     return res.send(results)
// })

// app.delete("/users/:id", async function (req: Request, res: Response) {
//     const results = await myDataSource.getRepository(User).delete(req.params.id)
//     return res.send(results)
// })

// start express server
// app.listen(4200)
const port = 4200
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
