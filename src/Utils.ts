import axios, { AxiosResponse } from 'axios';
import {WeatherData} from './Interfaces'
export const apiKey = process.env.REACT_APP_API_KEY
export const BASE_URL = 'https://api.openweathermap.org/data/2.5/'
export const instance = axios.create({
	baseURL: BASE_URL,
	timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

export const WeatherApi = {
	getWeather: (state: any): Promise<WeatherData> => instance.get(`weather?q=${state}&appid=${apiKey}`).then(responseBody),
	getAirPollution: (lat: number, lon:number): Promise<any> => instance.get(`air_pollution?lat=${lat}&lon=${lon}&cnt=7&appid=${apiKey}`).then(responseBody),
};