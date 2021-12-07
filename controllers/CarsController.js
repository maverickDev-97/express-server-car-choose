import CarsService from "../services/CarsService.js";

class CarsController {
    async getAll(req, res) {
        try {
            const cars = await CarsService.getAll()
            return res.json(cars);
        } catch (e) {
            console.log(e)
        }
    }
    async create(req, res) {
        try {
            const { make, model, image, price, year } = req.body
            const car = await CarsService.create({ make, model, image, price, year })
            return res.json(car)
        } catch (e) {
            console.log(e)
        }
    }
}

export default new CarsController()