import { useState , useEffect } from "react";


const LocationInfo = (lat,long) => {
    const [data, setData] = useState();
    const latitude = lat;
    const longitude = long;

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox=${latitude}%2C${longitude}&mode=retrieveAddresses&maxresults=1&gen=9&apiKey=tLlWmBrfW04rbHVJZ6Aa7Y_QTMGLmA3csfW6P3PQzXs`;
            const response = await fetch(url);
            const resJSON = await response.json();
            setData(resJSON.Response.View);
          };
          fetchApi();
      },[latitude,longitude]);   
    
    return data;
  };

  export default LocationInfo;