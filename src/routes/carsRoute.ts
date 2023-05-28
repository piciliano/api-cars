import { Router } from "express";
import { CarsController } from "../app/controllers/carsController";
import { CarsService } from "../app/services/carsService";
import { CarsRepository } from "../app/repositories/carsRepository";

const repository = new CarsRepository()
const service = new CarsService(repository)
const controller = new CarsController(service)

const carRouter = Router()

carRouter.post('/cars', async (req, res) => {
    return controller.create( req, res)
})

carRouter.patch('/cars/:id', async (req, res) => {
    controller.updateIsSold(req, res)
})

carRouter.get('/cars/:plate', async (req, res) => {
    controller.findByPlate(req, res)
})

export { carRouter }