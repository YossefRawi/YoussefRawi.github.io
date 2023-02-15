const weather_button = document.getElementById('weatherClick');
let name_id = document.getElementById('nameid');
const temp_id = document.getElementById('tempid');
const humid_id = document.getElementById('humid');
const wind_id = document.getElementById('windid');



async function getLocationDefault(){
    
    try{
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=36d58bad9a0d58aced71e5c5076599be&units=metric', 
    {mode: 'cors'})
    
    const weatherData = await response.json();
        console.log(weatherData);
        name_id.innerText = weatherData.name
        temp_id.innerText = 'Temp: ' + weatherData.main.temp + '°C'
        humid_id.innerText = 'Humidity: ' + weatherData.main.humidity + '%'
        wind_id.innerText = 'Wind Speed: ' + weatherData.wind.speed + ' km/hr'
    
    } catch(err){
        alert(err)
    }
    
}
getLocationDefault();




async function getLocationWeather(){
    const weather_search = document.getElementById('weatherSearch').value;
    
    try{
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+weather_search+'&APPID=36d58bad9a0d58aced71e5c5076599be&units=metric', 
    {mode: 'cors'})
    
    const weatherData = await response.json();
    console.log(weatherData);
    name_id.innerText = weatherData.name
    temp_id.innerText = 'Temp: ' + weatherData.main.temp + '°C'
    humid_id.innerText = 'Humidity: ' + weatherData.main.humidity + '%'
    wind_id.innerText = 'Wind Speed: ' + weatherData.wind.speed + ' km/hr'
    
    } catch(err){
        alert(err)
    }
    
}
    
    weather_button.addEventListener('click',getLocationWeather)