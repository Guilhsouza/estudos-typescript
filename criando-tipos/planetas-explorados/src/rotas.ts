import { Router } from 'express'
import addPlanet from './controllers/addPlanet'
import updateSituation from './controllers/updateSatelite'
import listPlanets from './controllers/listPlanets'
import deletePlanet from './controllers/deletePlanet'

const routes = Router()

routes.post('/planet', addPlanet)
routes.get('/planet', listPlanets)
routes.patch('/planet', updateSituation)
routes.delete('/planet/:id', deletePlanet)

export = routes