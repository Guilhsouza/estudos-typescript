const sendSpaceship = (name: string, captain: string) => {
    const spaceship = {
        name,
        captain,
        speed: 30,
        inMission: true,
        crew: []
    }

    alert(`A nave ${spaceship.name} comandada pelo capitão, ${spaceship.captain} foi enviada para missão`)

    return spaceship
}

const acellerate = (targetSpeed: number, spaceship: { name: string, speed: number }) => {
    if (targetSpeed === spaceship.speed) {
        return alert(`Mantendo velocidade ${spaceship.speed}...`)
    }

    if (targetSpeed < spaceship.speed) {
        spaceship.speed = targetSpeed
        return alert(`Reduzindo velocidade da ${spaceship.name} de ${spaceship.speed} para ${targetSpeed}`)
    }

    if (targetSpeed > spaceship.speed) {
        spaceship.speed = targetSpeed
        return alert(`Aumentando velocidade da ${spaceship.name} de ${spaceship.speed} para ${targetSpeed}`)
    }

}

const spaceshipName = prompt('Insira o nome da nave:')
const spaceshipCaptain = prompt('Insira o nome da capitão:')

const currentShip = sendSpaceship(spaceshipName, spaceshipCaptain)

const speed = prompt('Insira a velocidade da nave:')

acellerate(Number(speed), currentShip)

