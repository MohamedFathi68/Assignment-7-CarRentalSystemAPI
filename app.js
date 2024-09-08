import express from 'express'
const app = express()
const port =  3000
import cors from "cors";
import bootstrap from './src/modules/bootstrap.routes.js';
import { cleanUpExpiredRentals } from './src/middleware/cleanUpExpiredRentals/cleanUpExpiredRentals.middleware.js';


app.use(cors())
app.use(express.json())

app.use('/api',bootstrap)

cleanUpExpiredRentals()

app.listen(port, () => console.log(`Example app listening on port ${port}!`))