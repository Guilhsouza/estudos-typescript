import { Request, Response } from "express"
import db from '../dbConnection'

export default async function listPlanets(req: Request, res: Response) {
    try {
        const getPlanets = await db('planets')

        return res.status(200).json(getPlanets)
    }
    catch (error) {
        return res.status(500).json({ message: 'Erro interno no servidor' })
    }
}