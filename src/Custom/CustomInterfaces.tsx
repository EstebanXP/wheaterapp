/**
 * Data object.
 */
export const data = {};

/**
 * Represents the weather array data.
 */
export interface WeatherArrayData {
  description: string;
  icon: string;
  id: number;
  main: string;
}

/**
 * Represents the wind data.
 */
export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

/**
 * Represents the sys data.
 */

export interface sys {
  type?: number;
  id?: number;
  country?: string;
  sunrise?: number;
  sunset?: number;
}

/**
 * Represents the main weather data.
 */
export interface MainWeatherData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  humidity: number;
}

/**
 * Represents the coordinates data.
 */
export interface Coordinates {
  lat: number;
  lon: number;
}

/**
 * Represents the weather interface.
 */
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
