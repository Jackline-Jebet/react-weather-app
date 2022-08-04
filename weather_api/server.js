//  const express = require('express');
//  //const request = require('request');
//  const app = express();

//  app.get('/', (req, res) => {
// 	let city = req.query.city;
// 	var request = require('request');
// 	request(
//         `https://samples.openweathermap.org/data/2.5/forecast?q=${city}&appid=1f2e125eb4394ae21c71da721f1614d5`,
// 		function(error, response, body) {
// 			let data = JSON.parse(body);
// 			if (response.statusCode === 200) {
// 				res.send(`The weather in your city "${city}" is ${data.list[0].weather[0].description}`);
// 			}
// 		}
// 	);
// });

//  app.listen(3001, () => console.log('Server started on port 3001'));