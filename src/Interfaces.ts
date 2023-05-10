interface WeatherData {
    name: string;
    main: {
      temp: number;
      feels_like: number;
    };
}
interface WeatherProps {
    data: {
      name: string;
      main: {
        temp: number;
        feels_like: number;
      };
    };
  }
  
export type { WeatherData, WeatherProps };