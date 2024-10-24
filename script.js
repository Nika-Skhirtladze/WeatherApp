const token = `6bdbf64d1d815af6a75b43524471c4fe`;
const input = document.querySelector("input");
const btn = document.querySelector("button");
const cityName = document.querySelector(".city-name");
const day = document.querySelector(".day");
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const name = input.value;
    async function getData(){
        try{
            const link = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${token}`);
            const json = await link.json();
            return json;
        }
        catch(err){
            console.log(err);
            ("jdnac");
        }
    }
    const data = getData();
    data.then((data)=>{
        console.log(data)
        if(data.weather[0].main=="Mist" || data.weather[0].main=="Haze"){
            const img = document.querySelector(".weather-icon");
            const body = document.querySelector("body");
            img.src="images/Group 3.png";
            body.style.background="linear-gradient(45deg, #848CCF, #B8BCE5)";
        }
        if(data.weather[0].main=="Drizzle" || data.weather[0].main=="Rain"){
            const img = document.querySelector(".weather-icon");
            const body = document.querySelector("body");
            img.src="images/Group 2.png";
            body.style.background="linear-gradient(45deg, #0539C0, #5BC4FF)";
        }
        if(data.weather[0].main=="Clear"){
            const img = document.querySelector(".weather-icon");
            const body = document.querySelector("body");
            img.src="images/Vector.png";
            body.style.background="linear-gradient(45deg, #DA7211, #DA7211)";
        }
        if(data.weather[0].main=="Clouds"){
            const img = document.querySelector(".weather-icon");
            const body = document.querySelector("body");
            img.src="images/Group 1.png";
            body.style.background="linear-gradient(45deg, #05159E, #84D3FF)";
        }
        cityName.textContent = data.name;
        today = new Date();
        day.textContent = weekday[today.getDay()];
        const celsius = data.main.temp - 273.15;
        temperature.textContent = Math.round(celsius) + '°';
        weather.textContent = data.weather[0].main;
    }).catch((data) => console.log(data));
})