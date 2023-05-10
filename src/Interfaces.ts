interface WeatherData {
    coord: string;
    name: string;
    main: {
      temp: number;
      feels_like: number;
    };
}
interface WeatherProps {
    data: {
      coord: any;
      name: string;
      main: {
        temp: number;
        feels_like: number;
      };
    };
  }
  
export type { WeatherData, WeatherProps };