import { useState , useEffect } from "react";

const CityInfo = (search) => {
    const [data, setData] = useState();
    const city = search;

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://geocode.search.hereapi.com/v1/geocode?q=${city}&apikey=tLlWmBrfW04rbHVJZ6Aa7Y_QTMGLmA3csfW6P3PQzXs`;
            const response = await fetch(url);
            const resJSON = await response.json();
            setData(resJSON.items[0]);
          };
          fetchApi();
      },[city]);   
    
    return data;
  };

  export default CityInfo;