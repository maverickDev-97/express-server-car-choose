import express from 'express'
import mongoose from 'mongoose'
import carsRouter from './api/cars.js'

const app = express()
const PORT = process.env.PORT || 3000
const DB_URL = 'mongodb+srv://dima:dima@cluster0.8qv9h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use(express.json())
app.use('/api', carsRouter)

async function startApp() {
    try {
        app.listen(PORT, async () => {
            await mongoose.connect(DB_URL)
            console.log(`Server is running on: http://localhost:${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

startApp()