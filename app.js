//const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');



const argv = require('yargs').options({
	direccion:{
		alias: 'd',
		desc: 'Dirección de la ciudad para otener el clima',
		demand: true
	}
}).argv;

let getInfo = async (direccion) => {
	try{
		let coors = await lugar.getLugarLatLng(direccion);
		let temp = await clima.getClima(coors.lat, coors.lng);

		return `El clima en ${coors.direccion} es de ${temp}`;
	}catch{
		return `No se pudo determinar el clima en ${direccion}`;
	}
}

getInfo(argv.direccion)
	.then(mensaje => console.log(mensaje))
	.catch(e => console.log(e));

////////////////////codigo viejo//////////////////
/*lugar.getLugarLatLng(argv.direccion)
	.then(resp =>{
		console.log(resp);
	})
	.catch(e => console.log(e));

clima.getClima(23.634501,-102.552784)
	.then(temp => console.log(temp))
	.catch(e => console.log(e));*/

//para la optimizacion del progragrama todo el codigo comentadado en /**/
//se pondra dentro del lugar.js
//console.log(argv.direccion);
//encodeURL es uan funcion que hace compatible lo que ingresemos para las URL
/*let encodedUrl = encodeURI(argv.direccion);*/

//en axios.get se ingresa el url del servicio que se desea usar
/*axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM
`)
.then(resp => {
	let location = resp.data.results[0];
	let coors = location.geometry.location;

	console.log('Dirección:',location.formatted_address);
	console.log('lat:', coors.lat);
	console.log('lng:', coors.lng);

	//console.log(JSON.stringify(resp.data, undefined, 2));
	//console.log(resp.status);
})
.catch(e => console.log('ERROR!!!',e));*/