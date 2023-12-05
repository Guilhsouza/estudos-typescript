interface Ship {
    name: string
    pilot: string
}

interface Fighter extends Ship {
    armas: string,
    escudos: string
}

interface Speeder extends Ship {
    speed: number
    acceleration: number
}

interface EnemyShip extends Ship {
    name: string
    pilot: string
    flag?: string
}

function cloneShip<shipType extends Ship>(ship: shipType, newName: string, newPilot: string) {
    const newShip = ship
    newShip.name = newName
    newShip.pilot = newPilot
    return newShip
}

const falcon: Ship = {
    name: 'Millenium Falcon',
    pilot: 'Han'
}

const xWing: Fighter = {
    name: 'Red Five',
    pilot: 'Luke',
    armas: 'AR15',
    escudos: 'shiedl100'
}
const copy1 = cloneShip(falcon, 'Milano', 'Peter')

const copy2 = cloneShip(xWing, 'Black One', 'Poe')

const enemyShip1 = cloneShip(falcon, 'Enemy', 'enemy')

const enemyShip2 = cloneShip<EnemyShip>(falcon, 'Enemy', 'Enemy')

enemyShip2.flag = 'gui'