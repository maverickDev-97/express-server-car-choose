import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import carsRouter from './api/cars.js'

const app = express()
const PORT = process.env.PORT || 3000
const dev_db_url = 'mongodb+srv://dima:dima@cluster0.8qv9h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const mongoDB = process.env.MONGODB_URI || dev_db_url

app.use(cors())
app.use(express.json())
app.use('/api', carsRouter)

async function startApp() {
    try {
        app.listen(PORT, async () => {
            await mongoose.connect(mongoDB)
            console.log(`Server is running on: http://localhost:${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

startApp()