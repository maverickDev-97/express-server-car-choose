import Cars from "../models/cars.js";

class CarsService {
    async getAll() {
        const cars = await Cars.find({})
        return cars
    }
    async create(car) {
        const createdCar = await Cars.create(car)
        return createdCar
    }
}

export default new CarsService();