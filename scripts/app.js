const apiKey = "d7aa370d43983f7ec8a73ae3b04a9057";

let clientSearch = document.getElementById("clientSearch");
let displayCity = document.getElementById("displayCity");
let displayTemp = document.getElementById("displayTemp");
let currentWeather = document.getElementById("currentWeather");
let displayCountry = document.getElementById("displayCountry");
let  High;
let Low;
let lat;
let lon;
let cityName;





//5 day forecast weather icon doms
let weatherIcon1 = document.getElementById ("weatherIcon1")


let weatherIcon2 = document.getElementById ("weatherIcon2")


let weatherIcon3 = document.getElementById ("weatherIcon3")


let weatherIcon4 = document.getElementById ("weatherIcon4")


let weatherIcon5 = document.getElementById ("weatherIcon5")


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
    lon= position.coords.longitude;
    
    
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
    
    console.log(`Currently: ${data.weather[0].main}`);

    currentWeather.innerText = `Currently: ${data.weather[0].description}`;

    displayTemp.innerText = ` ${Math.round(data.main.temp)}° `;
}
searchBtn.addEventListener("click", function (event) {
        searchWeather();
        fiveDay();
}
);
//start of five day
async function fiveDay(){
    
    cityName = clientSearch.value.toLowerCase();
    const promise= await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`);
    const data = await promise.json();
    
    console.log(data.list[0].main.temp_max, data.list[0].main.temp_min);
    High = Math.round(data.list[0].main.temp_max);
    Low = Math.round(data.list[0].main.temp_min);
    hnl0.innerText = `↑${High}° ↓${Low}°`;


    console.log(data.list[8].main.temp_max, data.list[0].main.temp_min);
    High = Math.round(data.list[8].main.temp_max);
    Low = Math.round(data.list[8].main.temp_min);
    hnl1.innerText = `↑${High}° ↓${Low}°`;


    console.log(data.list[16].main.temp_max, data.list[0].main.temp_min);
    High = Math.round(data.list[16].main.temp_max);
    Low = Math.round(data.list[16].main.temp_min);
    hnl2.innerText = `↑${High}° ↓${Low}°`;


    console.log(data.list[24].main.temp_max, data.list[0].main.temp_min);
    High = Math.round(data.list[24].main.temp_max);
    Low = Math.round(data.list[24].main.temp_min);
    hnl3.innerText = `↑${High}° ↓${Low}°`;

    console.log(data.list[32].main.temp_max, data.list[0].main.temp_min);
    High = Math.round(data.list[32].main.temp_max);
    Low = Math.round(data.list[32].main.temp_min);
    hnl4.innerText = `↑${High}° ↓${Low}°`;

}
// end of five day

// //weather icon
// if(data.weather[0].description == "clear sky"){
//     weatherIcon.src = "../assets/sun (1).png";
// }else if (data.weather[0].description == "few clouds"){
//     weatherIcon.src = "../assets/cloud-sun.png";
// }else if (data.weather[0].description == "scattered clouds" || data.weather[0].description == "broken clouds"){
//     weatherIcon.src = "../assets/cloud.png";
// }
// else if (data.weather[0].discr)

