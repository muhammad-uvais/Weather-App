let body = document.querySelector("body")
let temp = document.getElementById("temp");
let city = document.getElementById("city");
let weather = document.getElementById("weather");
let form = document.querySelector("form");
let input = document.getElementById("search-input");
let weather_type = document.getElementById("weather-type");
let speed = document.getElementById("speed");
let humidity = document.getElementById("humidity");
let saharanpur = document.getElementById("saharanpur");
let delhi = document.getElementById("delhi");
let dehradun = document.getElementById("dehradun");
let lucknow = document.getElementById("lucknow");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchData();
});

const fetchData = async () => {
    try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + input.value + "&appid=ff092519bc84a7badf9349529e5ce1d5");
        const data = await response.json();
        console.log(data);
        if (input.value == "" || data.cod == "404") {
            alert("Please enter a valid city name");
        } else {
            displayData(data);
        }
    } catch (e) {
        console.log(e);
    }
}

function displayData(data) {
    temp.innerHTML = `${(data.main.temp - 273.15).toFixed(2)}°C`;
    city.innerHTML = data.name;
    weather.innerHTML = ` ${(data.weather[0].description).toUpperCase()}`;
    weather_type.innerHTML = ` ${data.weather[0].description}`;
    speed.innerHTML = `${data.wind.speed} m/s;`;
    humidity.innerHTML = `${data.main.humidity}%`;
    updateBackground(data.weather[0].description);
}

function updateBackground(description) {
    switch (description) {
        case "clear sky":
            body.style.background = "url(Photos/garrett-sears-rXVFCA3fQ4I-unsplash.jpg)";
            body.style.backgroundSize = 'cover';
            body.style.backgroundPosition = 'center center';
            break;
        case "mist":
            body.style.background = "url(Photos/artem-kovalev-jGN7JUKZcU0-unsplash.jpg)";
            body.style.backgroundSize = 'cover';
            body.style.backgroundPosition = 'center center';
            break;
        case "fog":
            body.style.background = "urlPhotos/noaa-jU-JOEZ2saQ-unsplash.jpg)";
            body.style.backgroundSize = 'cover';
            body.style.backgroundPosition = 'center center';
            break;
        case "haze":
            body.style.background = "url(Photos/paul-earle-l98YXp1X8dA-unsplash.jpg)";
            body.style.backgroundSize = 'cover';
            body.style.backgroundPosition = 'center center';
            break;
        case "overcast clouds":
            body.style.background = "url(Photos/alexander-andrews-R3h60Z0yQQE-unsplash.jpg)";
            body.style.backgroundSize = 'cover';
            body.style.backgroundPosition = 'center center';
            break;
        case "broken clouds":
            body.style.background = "url(Photos/quino-al-ZuZK8D55_cw-unsplash.jpg)";
            body.style.backgroundSize = 'cover';
            body.style.backgroundPosition = 'center center';
            break;
        case "light snow":
            body.style.background = "url(Photos/alessio-zaccaria-c6W4A8A7MgY-unsplash.jpg)"
            body.style.backgroundSize = 'cover';
            body.style.backgroundPosition = 'center center';
            break;
        default:
            body.style.backgroundImage = "url(Photos/michael-diane-weidner-h-rP5KSC2W0-unsplash.jpg)";
            body.style.backgroundSize = 'cover';
            body.style.backgroundPosition = 'center center';
            break;
    }
}



const fetchSre = async () => {
    try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=saharanpur&appid=ff092519bc84a7badf9349529e5ce1d5")
        const jsonData = await response.json();
        console.log(jsonData)
        showSreData(jsonData);
    }
    catch (e) {
        console.log(e);
    }

}

function showSreData(jsonData) {
    temp.innerHTML = `${(jsonData.main.temp - 273.15).toFixed(2)}°C`;
    city.innerHTML = jsonData.name;
    weather.innerHTML = ` ${(jsonData.weather[0].description).toUpperCase()}`;
    weather_type.innerHTML = ` ${jsonData.weather[0].description}`;
    speed.innerHTML = `${jsonData.wind.speed} m/s;`;
    humidity.innerHTML = `${jsonData.main.humidity}%`;
    updateBackground(jsonData.weather[0].description);
}

saharanpur.addEventListener("click", () => {
    fetchSre();
})

//delhi
const fetchDli = async () => {
    try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=ff092519bc84a7badf9349529e5ce1d5")
        const jsonData = await response.json();
        console.log(jsonData)
        showDliData(jsonData);
    }
    catch (e) {
        console.log(e);
    }

}

function showDliData(jsonData) {
    temp.innerHTML = `${(jsonData.main.temp - 273.15).toFixed(2)}°C`;
    city.innerHTML = jsonData.name;
    weather.innerHTML = ` ${(jsonData.weather[0].description).toUpperCase()}`;
    weather_type.innerHTML = ` ${jsonData.weather[0].description}`;
    speed.innerHTML = `${jsonData.wind.speed} m/s;`;
    humidity.innerHTML = `${jsonData.main.humidity}%`;
    updateBackground(jsonData.weather[0].description);
}

delhi.addEventListener("click", () => {
    fetchDli();
})

//dehradun
const fetchDdn = async () => {
    try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=dehradun&appid=ff092519bc84a7badf9349529e5ce1d5")
        const jsonData = await response.json();
        console.log(jsonData)
        showDdnData(jsonData);
    }
    catch (e) {
        console.log(e);
    }

}

function showDdnData(jsonData) {
    temp.innerHTML = `${(jsonData.main.temp - 273.15).toFixed(2)}°C`;
    city.innerHTML = jsonData.name;
    weather.innerHTML = ` ${(jsonData.weather[0].description).toUpperCase()}`;
    weather_type.innerHTML = ` ${jsonData.weather[0].description}`;
    speed.innerHTML = `${jsonData.wind.speed} m/s;`;
    humidity.innerHTML = `${jsonData.main.humidity}%`;
    updateBackground(jsonData.weather[0].description);
}

dehradun.addEventListener("click", () => {
    fetchDdn();
})

//lucknow
const fetchLck = async () => {
    try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=ff092519bc84a7badf9349529e5ce1d5")
        const jsonData = await response.json();
        console.log(jsonData)
        showLckData(jsonData);
    }
    catch (e) {
        console.log(e);
    }

}

function showLckData(jsonData) {
    temp.innerHTML = `${(jsonData.main.temp - 273.15).toFixed(2)}°C`;
    city.innerHTML = jsonData.name;
    weather.innerHTML = ` ${(jsonData.weather[0].description).toUpperCase()}`;
    weather_type.innerHTML = ` ${jsonData.weather[0].description}`;
    speed.innerHTML = `${jsonData.wind.speed} m/s;`;
    humidity.innerHTML = `${jsonData.main.humidity}%`;
    updateBackground(jsonData.weather[0].description);
}

lucknow.addEventListener("click", () => {
    fetchLck();
})