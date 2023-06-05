export const data = {};

export interface WeatherArrayData {
  description: string,
  icon: string,
  id: number,
  main: string
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface sys {
  type?: number;
  id?: number;
  country?: string;
  sunrise?: number;
  sunset?: number;
}

export interface MainWeatherData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  humidity: number
}

export interface Coordinates {
  lat: number;
  lon: number;
}

export interface WeatherInterface {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: Coordinates;
  dt: number;

  id: number;
  main: MainWeatherData;

  name: string;
  sys: sys;
  timezone: number;
  visibility: number;
  weather: WeatherArrayData[];
  wind: Wind;
}


