const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=9aa8fe0f4657bd63512b7275e48629aa`)

    let temp = resp.data.main.temp;

    return temp;
}
module.exports = {
    getClima
}