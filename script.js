//this will fetch the data from the api and will get the current weather data
class Fetch {
    async getCurrent(citySearch) {
        const mykey = "a25dbee6c55111cf1cdc740db22ba0c4";

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${mykey}&units=metric`
        );
        

        const data = await response.json ();

        console.log (data);

        return data;
        

        
    }
}

//this will add the data from the array into the html
class UI {
    constructor() {
        this.history = localStorage.getItem("search1");
        this.mainCity = document.querySelector("#mainCity");
        this.mainWeathericon = document.querySelector("#mainWeathericon");
        this.mainTemperature = document.querySelector("#mainTemperature");
        this.mainWind = document.querySelector("#mainWind");
        this.mainHumidty = document.querySelector("#mainHumidity");
        this.history = document.querySelector("#history");

        this.city;
    }

    populatemainCity(data){
        this.mainCity.innerHTML = `<h1 id = "mainCity" class="text-4xl font-bold">${data.name}</h1>`

        let iconCode = (data.weather[0].icon);
        const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`
        console.log(urlIcon)

        this.mainWeathericon.innerHTML = `<img id = "mainWeathericon" src="http://openweathermap.org/img/wn/${iconCode}.png"></img>`

        this.mainTemperature.innerHTML = `<p id = "mainTemperature" src =>Temperature: ${data.main.temp}°C</p>`

        this.mainWind.innerHTML = `<p id = "mainWind" src =>Wind Speed: ${data.wind.speed} MPH</p>`
        
        this.mainHumidty.innerHTML = `<p id = "mainHumidity" src =>Humidity : ${data.main.humidity} %</p>`

        this.history.innerHTML = `<button id= "history" class="pr-5 pl-5 py-1 mt-3 ml-3 mr-3 bg-gray-400 rounded-md text-white text-xl">${data.name}</button>`

    }

}

//this part grabs the data and moves it into the populate area block
const ft1 = new Fetch();
const mc1 = new UI();

citySearchbtn.addEventListener("click", () => {
    const currentCity = citySearch.value;

    ft1.getCurrent(currentCity).then((data) => {
        mc1.populatemainCity(data);

        console.log(data)

        localStorage.setItem("search1", JSON.stringify(data.name))

        history = JSON.parse(localStorage.getItem('search1'))
    });
      
});



//Forecast for next days retrieve this will get the forecast data from the api
class Fetch2 {
    async getCurrent(citySearch) {
        const mykey = "a25dbee6c55111cf1cdc740db22ba0c4";

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${citySearch}&appid=${mykey}&units=metric`
        );
        

        const data = await response.json ();

        console.log (data);

        return data;
        

        
    }
}

//this will add the data from the array into the html into each individual forecast box
class UI2 {
    constructor() {
        this.day1Date = document.querySelector("#day1Date");
        this.day1Weathertemp = document.querySelector("#day1Weathertemp");
        this.day1Wind = document.querySelector("#day1Wind");
        this.day1Humidity = document.querySelector("#day1Humidity");

        this.day2Date = document.querySelector("#day2Date");
        this.day2Weathertemp = document.querySelector("#day2Weathertemp");
        this.day2Wind = document.querySelector("#day2Wind");
        this.day2Humidity = document.querySelector("#day2Humidity");

        this.day3Date = document.querySelector("#day3Date");
        this.day3Weathertemp = document.querySelector("#day3Weathertemp");
        this.day3Wind = document.querySelector("#day3Wind");
        this.day3Humidity = document.querySelector("#day3Humidity");

        this.day4Date = document.querySelector("#day4Date");
        this.day4Weathertemp = document.querySelector("#day4Weathertemp");
        this.day4Wind = document.querySelector("#day4Wind");
        this.day4Humidity = document.querySelector("#day4Humidity");

        this.day5Date = document.querySelector("#day5Date");
        this.day5Weathertemp = document.querySelector("#day5Weathertemp");
        this.day5Wind = document.querySelector("#day5Wind");
        this.day5Humidity = document.querySelector("#day5Humidity");

        this.city;
    }

    populateforecast(data){

        this.day1Date.innerHTML = `<h1 id = "day1Date">Date: ${data.list[6].dt_txt}</h1>`
        this.day1Weathertemp.innerHTML = `<p id = "day1Weathertemp">Temp: ${data.list[6].main.temp}°C</p>`
        this.day1Wind.innerHTML = `<p id = "day1Wind">Wind: ${data.list[6].wind.speed}MPH</p>`
        this.day1Humidity.innerHTML = `<p id = "day1Humidity">Humidity: ${data.list[6].main.humidity} %</p>`

        this.day2Date.innerHTML = `<h1 id = "day2Date">Date: ${data.list[14].dt_txt}</h1>`
        this.day2Weathertemp.innerHTML = `<p id = "day2Weathertemp">Temp: ${data.list[14].main.temp}°C</p>`
        this.day2Wind.innerHTML = `<p id = "day2Wind">Wind: ${data.list[14].wind.speed}MPH</p>`
        this.day2Humidity.innerHTML = `<p id = "day2Humidity">Humidity: ${data.list[14].main.humidity} %</p>`

        this.day3Date.innerHTML = `<h1 id = "day3Date">Date: ${data.list[22].dt_txt}</h1>`
        this.day3Weathertemp.innerHTML = `<p id = "day3Weathertemp">Temp: ${data.list[22].main.temp}°C</p>`
        this.day3Wind.innerHTML = `<p id = "day3Wind">Wind: ${data.list[22].wind.speed}MPH</p>`
        this.day3Humidity.innerHTML = `<p id = "day3Humidity">Humidity: ${data.list[22].main.humidity} %</p>`

        this.day4Date.innerHTML = `<h1 id = "day4Date">Date: ${data.list[30].dt_txt}</h1>`
        this.day4Weathertemp.innerHTML = `<p id = "day4Weathertemp">Temp: ${data.list[30].main.temp}°C</p>`
        this.day4Wind.innerHTML = `<p id = "day4Wind">Wind: ${data.list[30].wind.speed}MPH</p>`
        this.day4Humidity.innerHTML = `<p id = "day4Humidity">Humidity: ${data.list[30].main.humidity} %</p>`

        this.day5Date.innerHTML = `<h1 id = "day5Date">Date: ${data.list[38].dt_txt}</h1>`
        this.day5Weathertemp.innerHTML = `<p id = "day5Weathertemp">Temp: ${data.list[38].main.temp}°C</p>`
        this.day5Wind.innerHTML = `<p id = "day5Wind">Wind: ${data.list[38].wind.speed}MPH</p>`
        this.day5Humidity.innerHTML = `<p id = "day5Humidity">Humidity: ${data.list[38].main.humidity} %</p>`


    }

}

//grabs data from the api and moves it into the populate data block 
const ft2 = new Fetch2();
const mc2 = new UI2();

citySearchbtn.addEventListener("click", () => {
    const currentCity = citySearch.value;

    ft2.getCurrent(currentCity).then((data) => {
        mc2.populateforecast(data);

        console.log(data)
    });


});



