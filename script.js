const apikey = "412bcabb610bcceed1e1db1f8d1a681d";


const weatherData = document.getElementById("weather-data")

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
            const response = await fetch(`https://api.openweathermap.org/data/weather?
            q=$(cityvalue)&appid=${apikey}&units=metric`)

                if(!response.ok){
                    throw new Error("Network resp was not ok")
                }
        const data = await response.json()

        console.log(data)
            }

    catch (error){

    }
}