import { Request, Response, json } from "express"
import db from '../dbConnection'

export default async function deletePlanet(req: Request, res: Response) {
    const { id } = req.params

    try {

        const getPlanet = await db('planets').where({ id }).first()

        if (!getPlanet) {
            return res.status(404).json({ message: 'Planeta não encontrado' })
        }

        await db('planets').del().where({ id })

        return res.status(200).json({ message: 'Planeta excluído com sucesso' })
    } catch (error) {
        return res.status(500).json({ message: 'Erro interno no servidor' })
    }

}