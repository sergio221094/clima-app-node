const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');



let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatlgn(direccion)
        let temp = await clima.getClima(coors.lat, coors.lng)

        return `El clima en ${ direccion } es de ${ temp } °C`

    } catch (e) {
        return `No pudo determinar el clima en ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));