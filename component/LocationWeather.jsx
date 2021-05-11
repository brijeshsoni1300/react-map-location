import { useState , useEffect } from "react";


const LocationWeather = (lat,long) => {
    const [data, setData] = useState();
    const latitude = lat;
    const longitude = long;

    useEffect(() => {
        const FetchWeather = async () => {
            const url = `https://weather.ls.hereapi.com/weather/1.0/report.json?product=observation&latitude=${latitude}&longitude=${longitude}&oneobservation=true&apiKey=tLlWmBrfW04rbHVJZ6Aa7Y_QTMGLmA3csfW6P3PQzXs`;
            const response = await fetch(url);
            const resJSON = await response.json();
            setData(resJSON.observations.location);
          };
          FetchWeather();
      },[latitude,longitude]);   
    
    return data;
  };

  export default LocationWeather;