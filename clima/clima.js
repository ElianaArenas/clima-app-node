const axios = require('axios');

const getClima = async (lat,lng)=>{

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0904b5356ae17ff07819f1d5331f30b7&units=metric`)
    return resp.data.main.temp;
}

module.exports ={
    getClima
}