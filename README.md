# react-map-location

## installation

### npm :-

`npm install react-map-location`

### yarn :-

`yarn add react-map-location`

## functionality

1. To find current position latitude and longitude.

2. To know information about your city with city name.

3. To know information of given location using latitude and longitude.

4. Weather information of your city.

5. Know weather information base on latitude and longitude.

## Functions :

### CurrentLocation :

Using this function you find your current position.

This function return object with latitude and longitude attributes.

```javascript
import { CurrentLocation } from "react-map-location";
const { latitude, longitude } = CurrentLocation();
```

### CityInfo :

This function take two argument which is name of city and your api key.

It returns information of city like lat,long,city,state,country, postal code.

```javascript
import { CityInfo } from "react-map-location";
const cityInfo = CityInfo({CITY_NAME},{YOUR_API_KEY});
```

### LocationInfo : 

This function contain 3 argument 1.latitude, 2.longitude , 3.api key as attribute.

This function returns information about city name, country,state,postal code.

```javascript
import { LocationInfo } from "react-map-location";
const locationTnfo = LocationInfo({LATITUDE}, {LONGITUDE},{YOUR_API_KEY});
```

### CityWeather :

This function take two argument as attribute 1.city name & 2.api key.

It is return the weather information of city like 

temperature : min_temp, max_temp

Wind : direction, speed , description

Sun moon position : sunrise , sunset

Pressure , humidity etc.

```javascript
import { CityWeather } from "react-map-location";
const cityWeather = CityWeather({CITY_NAME},{YOUR_API_KEY});
```

### LocationWeather :

This function take 1.langitude , 2.latitude & 3.api key as an attributes and return weather information.

```javascript
import { LocationWeather } from "react-map-location";
const locationWeather = LocationWeather({LATITUDE}, {LONGITUDE},{YOUR_API_KEY});
```

## Prerequisite

You have to your own here API key

generate your own api key by create project on [here platform](https://developer.here.com/)


## Example of usage :

Here replace {CITY_NAME},{LATITUDE},{LONGITUDE} AND {YOUR_API_KEY} with your own data.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { CurrentLocation, CityInfo, LocationInfo, CityWeather, LocationWeather} from "react-map-location";


const = App() => {

  //object destructuring of CurrentLocation functin's return object
  const { latitude, longitude } = CurrentLocation();
  const cityInfo = CityInfo({CITY_NAME},{YOUR_API_KEY});
  const locationTnfo = LocationInfo({LATITUDE}, {LONGITUDE},{YOUR_API_KEY});
  const cityWeather = CityWeather({CITY_NAME},{YOUR_API_KEY});
  const locationWeather = LocationWeather({LATITUDE}, {LONGITUDE},{YOUR_API_KEY});


  console.log(latitude);
  console.log(longitude);
  console.log(cityInfo);
  console.log(locationTnfo);
  console.log(cityWeather);
  console.log(locationWeather);
}


ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);
```