import axios, { AxiosResponse } from 'axios';
import {WeatherData} from './Interfaces'

const instance = axios.create({
	baseURL: 'https://api.openweathermap.org/data/2.5/',
	timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

export const WeatherApi = {
	getWeather: (state: any): Promise<WeatherData> => instance.get(`weather?q=${state}&appid=${process.env.REACT_APP_API_KEY}`).then(responseBody),
};