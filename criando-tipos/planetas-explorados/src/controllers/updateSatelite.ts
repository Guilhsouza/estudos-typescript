import { Request, Response } from "express"
import db from '../dbConnection'

type coord = [number, number, number]
type situation = 'habitable' | 'unhabitable' | 'explored' | 'unexplored'

export default async function updateSituation(req: Request, res: Response) {
    const { name, newSituation }: { name: string, newSituation: situation } = req.body

    try {
        if (!name || !newSituation) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios' })
        }

        if (!['habitable', 'unhabitable', 'explored', 'unexplored'].includes(newSituation)) {
            return res.status(400).json({ message: 'Situação inválida.' })
        }

        const planet: { situation: situation } = await db('planets').where({ name }).first()

        if (newSituation === planet.situation) {
            return res.status(409).json({ message: `A situação ja é ${newSituation}.` })
        }

        await db('planets').update({ situation: newSituation }).where({ name })

        return res.status(200).json({ message: 'Situação alterada' })
    } catch (error) {
        return res.status(500).json({ message: 'Erro interno no servidor' })
    }
}