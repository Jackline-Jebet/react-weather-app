import { v4 as uuid } from 'uuid';
//import { getWeathers } from './weather.js';

let weathers = [];

export const getWeathers = (req, res) => {
    console.log(`Weathers in the database: ${weathers}`);

    res.send(weathers);
}

export const createWeather = (req, res) => {   
    const weather = req.body;

    weathers.push({...weather, id: uuid()});
    
    console.log(`Weather [${weather.name}] added to the database.`);
};

 export const getWeather = (req, res) => {
     res.send(req.params.id)
 };

export const deleteWeather = (req, res) => { 
    console.log(`weather with id ${req.params.id} has been deleted`);
    
    weathers = weathers.filter((weather) => weather.id !== req.params.id);
};

export const updateWeather =  (req,res) => {
    const weather = weathers.find((weathers) => weather.id === req.params.id);
    
    weather.weathername = req.body.Weathername;
    weather.cod = req.body.cod;

    console.log(`Weathername has been updated to ${req.body.weathername}.cod has been updated to ${req.body.cod}`)
};