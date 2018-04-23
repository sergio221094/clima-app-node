const axios = require('axios');

const getLugarLatlgn = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyBCS2HigCJ5Pf5FRgnQT8XrwY3-tOPy__w`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No se encontro ${direccion}`);
    }
    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        lugar: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}
module.exports = {
    getLugarLatlgn
}