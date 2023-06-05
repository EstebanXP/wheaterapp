/**
 * API key for accessing the weather data.
 */
export const apiKey = "da90b97409c704cd20b7aa6bd298cf07";

/**
 * URL for fetching the location data.
 */

export const apiLocationUrl = "https://ipapi.co/json";

/**
 * URL for fetching the weather data.
 */

export const apiWeatherUrl = "https://api.openweathermap.org/data/2.5/weather";

/**
 * Fetch state constants indicating different states of the data fetching process.
 */

export const fetchState = {
  /**
   * Default state indicating no data has been fetched yet.
   */
  DEFAULT: "DEFAULT",

  /**
   * Loading state indicating data is currently being fetched.
   */
  LOADING: "LOADING",

  /**
   * Success state indicating data has been successfully fetched.
   */
  SUCCESS: "SUCCESS",

  /**
   * Error state indicating an error occurred during data fetching.
   */
  ERROR: "ERROR",
};
