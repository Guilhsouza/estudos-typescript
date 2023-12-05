type car = {
    name: string,
    year: number
}

interface Products {
    type: string,
    validate: string,
    price: number
}

interface Supermaket {
    name: string,
    foundationYear: string
    products: Products
}

const filial: Supermaket = {
    name: 'Tenda',
    foundationYear: '01/01/1990',
    products: {
        type: "foods",
        price: 2000,
        validate: "08/2025"
    }
}