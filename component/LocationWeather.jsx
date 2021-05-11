import { useState , useEffect } from "react";


const LocationWeather = (lat,long,api) => {
    const [data, setData] = useState();
    const [API, setAPI] = useState("KcYLMh4L8RbHmd5XT6fGQIUtyAeZASm1b-relXYX-5U");

    if(!api===undefined)
    {
      setAPI(api);
    }
    const latitude = lat;
    const longitude = long;

    useEffect(() => {
        const FetchWeather = async () => {
            const url = `https://weather.ls.hereapi.com/weather/1.0/report.json?product=observation&latitude=${latitude}&longitude=${longitude}&oneobservation=true&apiKey=${API}`;
            const response = await fetch(url);
            const resJSON = await response.json();
            setData(resJSON);
          };
          FetchWeather();
      },[latitude,longitude,API]);   
    
    return data;
  };

  export default LocationWeather;