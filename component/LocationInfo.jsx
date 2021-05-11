import { useState , useEffect } from "react";


const LocationInfo = (lat,long,api) => {
    const [data, setData] = useState();
    const [API, setAPI] = useState("KcYLMh4L8RbHmd5XT6fGQIUtyAeZASm1b-relXYX-5U");

    if(!api===undefined)
    {
      setAPI(api);
    }

    const latitude = lat;
    const longitude = long;

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox=${latitude}%2C${longitude}&mode=retrieveAddresses&maxresults=1&gen=9&apiKey=${API}`;
            const response = await fetch(url);
            const resJSON = await response.json();
            setData(resJSON);
          };
          fetchApi();
      },[latitude,longitude,API]);   
    
    return data;
  };

  export default LocationInfo;