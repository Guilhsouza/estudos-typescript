const sendShip = (spaceship: { name: string, pilot?: string }) => {
    // ... 
}

sendSpaceship({ name: 'nave1', pilot: 'piloto1' })

sendSpaceship({ name: 'nave2' })

let input: unknown

input = false
input = 20
input = 'string'

type texto = string

// texto = input
// retorna erro pq não é possível atribuir o tipo, nao tem como a linguagem ter certeza que input é um txt 

const verificar = (spaceship) => {
    if (spaceship) {

    } else {
        let check!: never

        let text = check

        return check
    }
}