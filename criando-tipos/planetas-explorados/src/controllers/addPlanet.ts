import { Request, Response } from "express"
import db from '../dbConnection'

type coord = [number, number, number]
type situation = 'habitable' | 'unhabitable' | 'explored' | 'unexplored'

export default async function addPlanet(req: Request, res: Response) {
    const { name, coord, situation, satellite }:
        { name: string, coord: coord, situation: situation, satellite: string } = req.body

    try {
        const planetExists = await db('planets').where({ name }).first()

        if (planetExists) {
            return res.status(409).json({ message: 'Planeta já existe.' })
        }

        if (!name || !coord || !situation || !satellite) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios.' })
        }

        if (!['habitable', 'unhabitable', 'explored', 'unexplored'].includes(situation)) {
            return res.status(400).json({ message: 'Situação inválida.' })
        }

        if (!coord[0] || !coord[1] || !coord[2]) {
            return res.status(400).json({ message: 'Todos os elementos da coordenada são necessarios.' })
        }

        const formatCoord = `${coord[0]}°${coord[1]}'${coord[2]}"`

        const planet = {
            name,
            coord: formatCoord,
            situation,
            satellite
        }

        await db('planets').insert(planet)

        return res.status(201).json({ message: 'Planeta adicionado com sucesso!' })
    } catch (error) {
        return res.status(500).json({ message: 'Erro interno no servidor.' })
    }
}

