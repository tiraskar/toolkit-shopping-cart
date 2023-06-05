import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()

import cors from 'cors'
import connectDB from './database/connect.js'
import { products } from './products.js'

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Welcome to online shopping.')
})
app.get('/products', (req, res) => {
  res.send(products)
})

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Sever started at port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
