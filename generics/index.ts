function first(array) {
    return array[0]
}

function last<Type>(array: Type[]): Type | undefined {
    return array[array.length - 1]
}

const pilots = ['pil1', 'pil2', 'pil3', 'pil4', 'pil5']

const firstPilot = first(pilots)

const lastPilot = last(pilots)
