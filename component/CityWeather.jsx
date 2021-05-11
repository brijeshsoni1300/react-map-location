import { useState , useEffect } from "react";


const CityWeather = (search) => {
    const [data, setData] = useState();
    const city = search;

    useEffect(() => {
        const FetchWeather = async () => {
            const url = `https://weather.ls.hereapi.com/weather/1.0/report.json?product=observation&name=${city}&apiKey=tLlWmBrfW04rbHVJZ6Aa7Y_QTMGLmA3csfW6P3PQzXs`;
            const response = await fetch(url);
            const resJSON = await response.json();
            setData(resJSON.observations);
          };
          FetchWeather();
      },[city]);   
    
    return data;
  };

  export default CityWeather;