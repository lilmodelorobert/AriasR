
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
let cityname
const apiKey = "d7aa370d43983f7ec8a73ae3b04a9057";
apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=imperial"

let searchInput = document.getElementById("searchInput")
let enterKey
async function searchWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        console.log(response);

        if (!response.ok) {
            throw new Error('Network was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('error fetching weather data:', error);
    }
}
enterKey.addeventlistener("keypress", function(event){
    if (event.key== "enter"){
        event.preventDefault ();
        searchWeather()
    }
})


