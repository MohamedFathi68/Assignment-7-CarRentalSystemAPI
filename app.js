import express from 'express'
import templateRouter from './src/modules/template 1/template.routes.js'
import { dbConnection } from './src/database/dbConnection.js'
const app = express()
const port = process.env.PORT || 3000
import cors from "cors";

app.use(cors())
app.use(express.json())
dbConnection()


app.use('/test',templateRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))