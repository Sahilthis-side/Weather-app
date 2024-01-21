const apiKey = "429e44130a1c1eadb286526f10e745b3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const serachbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
const cardcolour = document.querySelector(".card");
async function checkWeather(city = 'ranchi'){
    const response = await fetch(apiUrl + city +'&appid=' + apiKey);
    if(response.status == 404){
        document.querySelector(".error").style.display = 'block';
        document.querySelector(".weather").style.display = 'none';
    } else{
        let data = await response.json();
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".feelslike").innerHTML="Feels like " + data.main.feels_like + "°C";
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
        document.querySelector(".maxtemp").innerHTML=data.main.temp_max + "°C";
        document.querySelector(".mintemp").innerHTML=data.main.temp_min + "°C";
        console.log(data);
        if(data.weather[0].main == "Clouds"){
            weathericon.src = "images/Clouds.gif";
        } else if(data.weather[0].main == "Clear"){
            weathericon.src = "images/clear.gif";
        } else if(data.weather[0].main == "Drizzle"){
            weathericon.src = "images/Drizzle.gif";
        } else if(data.weather[0].main == "Rain"){
            weathericon.src = "images/Rain.gif";
        } else if(data.weather[0].main == "Mist"){
            weathericon.src = "images/Mist.gif";
        } else if(data.weather[0].main == "Snow"){
            weathericon.src = "images/Snnow.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = 'none';
    }
}
searchbtn.addEventListener("click", ()=>{
    checkWeather(serachbox.value);
})
