import { useState , useEffect } from "react";

const CityInfo = (search,api) => {
    const [data, setData] = useState();
    const [API, setAPI] = useState("KcYLMh4L8RbHmd5XT6fGQIUtyAeZASm1b-relXYX-5U");
    const city = search;

    if(!api===undefined)
    {
      setAPI(api);
    }
    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://geocode.search.hereapi.com/v1/geocode?q=${city}&apikey=${API}`;
            const response = await fetch(url);
            const resJSON = await response.json();
            setData(resJSON.items[0]);
          };
          fetchApi();
      },[city, API]);   
    
    return data;
  };

  export default CityInfo;