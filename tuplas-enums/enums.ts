enum Planets {
    mercurio = 1,
    venus,
    terra,
    marte,
    lua
}

Planets.lua

enum Roles {
    ADMIN,
    USER
}

const usuario =
{
    class: 1,
    nameUser: 'Guilherme'
}

const verifyUser = (usuario) => {

    if (usuario.class === Roles.USER) {
        return 'Unauthorized'
    }

}

console.log(verifyUser(usuario))