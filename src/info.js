//tutaj zrobie funkcje robiaca widok strony z danymi z search.js
export {displayData};
import { getGif } from "./gif";



function displayData(data) {
    let body = document.querySelector('body');
    let dataDiv = document.createElement('div');
    dataDiv.classList.add('dataDiv');

    let cityName = document.createElement('h1');
    cityName.classList.add('cityName');
    cityName.innerText= data.name;

    dataDiv.appendChild(cityName);

    let currentWeather = document.createElement('h1')
    currentWeather.classList.add('currentWeather');
    currentWeather.innerText = data.weather[0].description;

    let weatherForGIf = data.weather[0].main;
    getGif(weatherForGIf);

    dataDiv.appendChild(currentWeather);

    let temperatureDiv = document.createElement('div');
    let temperature = document.createElement('h2');
    temperature.innerText = `Current temperature: ${(data.main.temp - 273).toFixed(1)}C` 
    let temperatureFeel = document.createElement('h2');
    temperatureFeel.innerText= `Feels like: ${(data.main.feels_like -273).toFixed(1)}C`;  
    temperatureFeel.classList.add('temperature');
    temperature.classList.add('temperature');

    temperatureDiv.appendChild(temperature);
    temperatureDiv.appendChild(temperatureFeel);
    dataDiv.appendChild(temperatureDiv);
    let cloudiness = document.createElement('h2');
    cloudiness.classList.add('cloudiness');
    cloudiness.innerText = `Cloudiness: ${data.clouds.all}%`;

    dataDiv.appendChild(cloudiness);

    let wind = document.createElement('h2');
    wind.classList.add('wind');
    wind.innerText = `Current wind speed: ${data.wind.speed}m/s`;
    
    dataDiv.appendChild(wind);

    let sunrise = document.createElement('h2');
    sunrise.classList.add('sunrise');

    sunrise.innerText = `Sunrise time: ${convertUnixToHours(data.sys.sunrise)}`;
    
    dataDiv.appendChild(sunrise);

    let sunset = document.createElement('h2');
    sunset.classList.add('sunset');

    sunset.innerText = `Sunset time: ${convertUnixToHours(data.sys.sunset)}`;

    dataDiv.appendChild(sunset)

    body.appendChild(dataDiv);

}

function convertUnixToHours(timestamp) {
    let date = new Date(timestamp * 1000);
// Hours part from the timestamp
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    let seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}