const apiKey = "d7aa370d43983f7ec8a73ae3b04a9057";

let clientSearch = document.getElementById("clientSearch");
let displayCity = document.getElementById("displayCity");
let displayTemp = document.getElementById("displayTemp");
let currentWeather = document.getElementById("currentWeather");
let displayCountry = document.getElementById("displayCountry");
let High;
let Low;
let lat;
let lon;
let cityName;

let dayNames=[];


day1Date = document.getElementById("day1Date");
day2Date = document.getElementById("day2Date");
day3Date = document.getElementById("day3Date");
day4Date = document.getElementById("day4Date");
day5Date = document.getElementById("day5Date");



//5 day forecast weather icon doms
let currentWeatherIcon = document.getElementById("currentWeatherIcon");


let weatherIcon2 = document.getElementById("weatherIcon2");


let weatherIcon3 = document.getElementById("weatherIcon3");


let weatherIcon4 = document.getElementById("weatherIcon4");


let weatherIcon5 = document.getElementById("weatherIcon5");


//end of weather icon doms

// let High1;
// let Low1;
// let High2;
// let Low2;
// let Low3;
// let High3
// let Low4
// let High4


//geolocation
navigator.geolocation.getCurrentPosition(success, errorFunc);
//if Success else errorFunc
function success(position) {
    console.log("lat" + position.coords.latitude);
    console.log("long" + position.coords.longitude);

    lat = position.coords.latitude;
    lon = position.coords.longitude;

}
function errorFunc(error) {
    console.log(error.message);
}
//end of geo location



//search weather + api call for main weather 
async function searchWeather() {
    cityName = clientSearch.value.toLowerCase();
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`);
    const data = await promise.json();
    console.log(data);

    //country code visible
    console.log(`Location: ${data.name}, ${data.sys.country}`);
    displayCountry.innerText = `${data.name}, ${data.sys.country}`;
    // end of visible code

    //currentWeatherIcon.src = data.weather[0].main
    let iconType = data.weather[0].main;
    //console.log(iconType);
    if (iconType == "Clear") {
        currentWeatherIcon.src = "../assets/sunny.png";
    } else if ( iconType == "Clouds") {
        currentWeatherIcon.src = "../assets/cloud-sun.png";
    } else if (iconType == "scattered clouds" || data.list[0].weather[0].main == "broken clouds" || data.list[0].weather[0].main == "overcast clouds") {
        currentWeatherIcon.src = "../assets/cloud.png";
    } else if (iconType == "Rain" || data.list[0].weather[0].main == "rain & mist") {
        currentWeatherIcon.src = "../assets/cloud-rain.png";
    } else if (iconType == "Snow") {
        currentWeatherIcon.src = "../assets/cloud-snow.png";
    }




    //currentWeather.innerText = ` ${data.weather[0].description}`;

    displayTemp.innerText = ` ${Math.round(data.main.temp)}° `;

}
searchBtn.addEventListener("click", function (event) {
    searchWeather();
    fiveDay();
}
);
//start of five day
async function fiveDay() {

    dayNames = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

    cityName = clientSearch.value.toLowerCase();
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`);
    const data = await promise.json();


    let day1 = new Date(data.list[0].dt_txt);
    let day1Day = day1.getDay();
    day1Date.innerText = dayNames[day1Day];
    console.log(data.list[0].main.temp_max, data.list[0].main.temp_min);
    High = Math.round(data.list[0].main.temp_max);
    Low = Math.round(data.list[0].main.temp_min);
    hnl0.innerText = `↑${High}° ↓${Low}°`;

    let day2 = new Date(data.list[8].dt_txt);
    let day2Day = day2.getDay();
    day2Date.innerText = dayNames[day2Day];                  
    console.log(data.list[8].main.temp_max, data.list[0].main.temp_min);
    High = Math.round(data.list[8].main.temp_max);
    Low = Math.round(data.list[8].main.temp_min);
    hnl1.innerText = `↑${High}° ↓${Low}°`;

    let day3 = new Date(data.list[16].dt_txt);
    let day3Day = day3.getDay();
    day3Date.innerText = dayNames[day3Day];
    console.log(data.list[16].main.temp_max, data.list[0].main.temp_min);
    High = Math.round(data.list[16].main.temp_max);
    Low = Math.round(data.list[16].main.temp_min);
    hnl2.innerText = `↑${High}° ↓${Low}°`;

    let day4 = new Date(data.list[24].dt_txt);
    let day4Day = day4.getDay();
    day4Date.innerText = dayNames[day4Day];
    console.log(data.list[24].main.temp_max, data.list[0].main.temp_min);
    High = Math.round(data.list[24].main.temp_max);
    Low = Math.round(data.list[24].main.temp_min);
    hnl3.innerText = `↑${High}° ↓${Low}°`;

    let day5 = new Date(data.list[32].dt_txt);
    let day5Day = day5.getDay();
    day5Date.innerText = dayNames[day1Day];
    console.log(data.list[32].main.temp_max, data.list[0].main.temp_min);
    High = Math.round(data.list[32].main.temp_max);
    Low = Math.round(data.list[32].main.temp_min);
    hnl4.innerText = `↑${High}° ↓${Low}°`;

    console.log(data.list[0].weather[0].description);

    if (data.list[0].weather[0].main == "Clear") {
        weatherIcon1.src = "../assets/sunny.png";
    } else if (data.list[0].weather[0].main == "Clouds") {
        weatherIcon1.src = "../assets/cloud-sun.png";
    } else if (data.list[0].weather[0].main == "scattered clouds" || data.list[0].weather[0].main == "broken clouds" || data.list[0].weather[0].main == "overcast clouds") {
        weatherIcon1.src = "../assets/cloud.png";
    } else if (data.list[0].weather[0].main == "Rain" || data.list[0].weather[0].main == "rain & mist") {
        weatherIcon1.src = "../assets/cloud-rain.png";
    } else if (data.list[0].weather[0].main == "Snow") {
        weatherIcon1.src = "../assets/cloud-snow.png";
    }

    if (data.list[8].weather[0].main == "Clear") {
        weatherIcon2.src = "../assets/sunny.png";
    } else if (data.list[8].weather[0].main == "Clouds") {
        weatherIcon2.src = "../assets/cloud-sun.png";
    } 
    else if (data.list[8].weather[0].main == "Rain" || data.list[8].weather[0].main == "rain & mist") {
        weatherIcon2.src = "../assets/cloud-rain.png";
    } else if (data.list[8].weather[0].main == "Snow") {
        weatherIcon2.src = "../assets/cloud-snow.png";
    }

    if (data.list[16].weather[0].main == "Clear") {
        weatherIcon3.src = "../assets/sunny.png";
    } else if (data.list[16].weather[0].main == "Clouds") {
        weatherIcon3.src = "../assets/cloud-sun.png";
    } 
    else if (data.list[16].weather[0].main == "Rain" || data.list[16].weather[0].main == "rain & mist") {
        weatherIcon3.src = "../assets/cloud-rain.png";
    } else if (data.list[16].weather[0].main == "Snow") {
        weatherIcon3.src = "../assets/cloud-snow.png";
    }

    if (data.list[24].weather[0].main == "Clear") {
        weatherIcon4.src = "../assets/sunny.png";
    } else if (data.list[24].weather[0].main == "Clouds") {
        weatherIcon4.src = "../assets/cloud-sun.png";
    } 
    else if (data.list[24].weather[0].main == "Rain" || data.list[24].weather[0].main == "rain & mist") {
        weatherIcon4.src = "../assets/cloud-rain.png";
    } else if (data.list[24].weather[0].main == "Snow") {
        weatherIcon4.src = "../assets/cloud-snow.png";
    }

    if (data.list[32].weather[0].main == "Clear") {
        weatherIcon5.src = "../assets/sunny.png";
    } else if (data.list[32].weather[0].main == "Clouds") {
        weatherIcon5.src = "../assets/cloud-sun.png";
    } 
    else if (data.list[32].weather[0].main == "Rain" || data.list[32].weather[0].main == "rain & mist") {
        weatherIcon5.src = "../assets/cloud-rain.png";
    } else if (data.list[32].weather[0].main == "Snow") {
        weatherIcon5.src = "../assets/cloud-snow.png";
    }

}
// end of five day

// ICON FOR RIGHT BOX



//the 