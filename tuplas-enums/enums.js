var Planets;
(function (Planets) {
    Planets[Planets["mercurio"] = 1] = "mercurio";
    Planets[Planets["venus"] = 2] = "venus";
    Planets[Planets["terra"] = 3] = "terra";
    Planets[Planets["marte"] = 4] = "marte";
    Planets[Planets["lua"] = 5] = "lua";
})(Planets || (Planets = {}));
Planets.lua;
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["USER"] = 1] = "USER";
})(Roles || (Roles = {}));
var usuario = {
    class: 1,
    nameUser: 'Guilherme'
};
var verifyUser = function (usuario) {
    if (usuario.class === Roles.USER) {
        return 'Unauthorized';
    }
};
console.log(verifyUser(usuario));
