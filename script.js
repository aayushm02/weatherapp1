const apikey = "6d30754b409c3f1820a1d90c9a04d780";


const weatherDataEl = document.getElementById("weather-data")

const cityInput = document.getElementById("city-input")

const formEl = document.querySelector("form")

formEl.addEventListener("submit",(event)=>{
event.preventDefault();
    const cityvalue = cityInput.value;
    console.log(cityvalue);
   getWeatherData(cityvalue)
});

async function getWeatherData(cityvalue)
{
    try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=${apikey}&units=metric`)
                if(!response.ok){
                    throw new Error("Network resp was not ok")
                }
        const data = await response.json()
        const temperatures = Math.round(data.main.temp)
        const description = data.weather[0].description
        const icons =  data.weather[0].icon
        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.wind.speed}m/s`,
        ]


        weatherDataEl.querySelector(".icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${icons}.png">`
        weatherDataEl.querySelector(".temperature").textContent = `${temperatures}°C`
        weatherDataEl.querySelector(".description").textContent = `${description}`
        weatherDataEl.querySelector(".details").innerHTML =  details.map((details)=>`<div>${details}</div>` ).join("")
    }

    catch (error){
        weatherDataEl.querySelector(".icon").innerHTML = ""
        weatherDataEl.querySelector(".temperature").textContent = ""
        weatherDataEl.querySelector(".description").textContent = "an error is occured please try again"
        weatherDataEl.querySelector(".details").innerHTML =  ""
    }
}
