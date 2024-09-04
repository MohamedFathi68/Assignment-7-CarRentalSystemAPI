import express from 'express'
const app = express()
const port =  3000
import { car, rental, user } from './src/database/dbConnection.js'
import cors from "cors";
import bootstrap from './src/modules/bootstrap.routes.js';


app.use(cors())
app.use(express.json())

app.use('/api',bootstrap)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))