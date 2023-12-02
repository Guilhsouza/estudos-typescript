const planets = []

// let name: string
// é possível criar dessa forma sem iniciar a variavel 

type coord = [number, number, number, string]
type situation = 'habitable' | 'unhabitable' | 'explored' | 'unexplored'
// mas o TS tem a palavra reservada "type" que é uma forma mais recomendada

const addPlanet = (name: string, coord: coord, situation: situation, satellite: string) => {
    return 'Planeta adicionado'
}