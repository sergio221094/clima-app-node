const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    },
    latitud: {
        alias: 'lat',
        desc: 'Latitud del lugar'
    },
    longitud: {
        alias: 'lgn',
        desc: 'Longitud del lugar'
    }
}).argv;

module.exports = {
    argv
}