import mongoose from 'mongoose';

const CarsSchema = new mongoose.Schema({
    make: String,
    model: String,
    image: String,
    price: Number,
    year: String
})

const Cars = mongoose.model('cars', CarsSchema)

export default Cars;