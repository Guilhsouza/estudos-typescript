function Log() {
    return function (target, key, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value

        descriptor.value = function (...args: any[]) {
            console.log(' |--------------------------------------|')
            console.log(`Chamando o método ${key} com os parametros: ${JSON.stringify(args)}`)

            const result = originalMethod.apply(this, args)

            console.log(`Chamando o método ${key} retornou: ${JSON.stringify(args)}`)
            console.log(' |--------------------------------------|')
        }

    }
}

class Ships {
    name: string

    constructor(name: string) {
        this.name = name
    }

    @Log()
    calculate(value: number) {
        console.log('vezes 2')
        return value * 2
    }
}

const ships = new Ships('nave1')

const result = ships.calculate(3)

console.log(result)