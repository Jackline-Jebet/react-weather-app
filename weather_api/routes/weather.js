 import express from 'express';
 import { getWeather, createWeather, getWeathers, deleteWeather, updateWeather } from '../controllers/weather.js';

 const router = express.Router();


 router.get('/', getWeathers);

 router.post('/', createWeather);

router.get('/:id', getWeather);

router.delete('/:id', deleteWeather);

router.patch('/:id', updateWeather);

 export default router;