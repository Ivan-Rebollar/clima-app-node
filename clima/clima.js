const axios = require('axios');


const getClima = async (lat, lng) => {
	
	//let encodedUrl = encodeURI(direccion);

	let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=d7d9fae434a20375ee481b5e49bda48c`)
	return resp.data.main.temp;
}

module.exports = {
	getClima
}

