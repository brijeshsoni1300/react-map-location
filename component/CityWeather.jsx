import { useState , useEffect } from "react";


const CityWeather = (search,api) => {
    const [data, setData] = useState();
    const [API, setAPI] = useState("KcYLMh4L8RbHmd5XT6fGQIUtyAeZASm1b-relXYX-5U");
    const city = search;

    if(!api===undefined)
    {
      setAPI(api);
    }

    useEffect(() => {
        const FetchWeather = async () => {
            const url = `https://weather.ls.hereapi.com/weather/1.0/report.json?product=observation&name=${city}&apiKey=${API}`;
            const response = await fetch(url);
            const resJSON = await response.json();
            setData(resJSON);
          };
          FetchWeather();
      },[city,API]);   
    
    return data;
  };

  export default CityWeather;