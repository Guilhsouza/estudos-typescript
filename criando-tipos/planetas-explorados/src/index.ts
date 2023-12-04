import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import routes from './rotas'


const app = express()

app.use(express.json())

app.use(routes)

app.listen(process.env.PORT)