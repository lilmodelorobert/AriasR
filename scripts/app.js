const apiKey = "d7aa370d43983f7ec8a73ae3b04a9057";
let clientSearch = document.getElementById("clientSearch");
let displayCity = document.getElementById("displayCity");
let displayTemp = document.getElementById("displayTemp");
let enterKey;
let  High;
let Low;
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
}
function errorFunc(error) {
    console.log(error.message);
}
//end of geo location

let cityName;

async function searchWeather() {
    cityName = clientSearch.value.toLowerCase();
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`);
    const data = await promise.json();
    console.log(data);
    
}
searchBtn.addEventListener("click", function (event) {
        searchWeather();
        fiveDay();
}
);
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



