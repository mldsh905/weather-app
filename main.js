const img = document.querySelector(".img");
const submit = document.querySelector('[type = "submit"]');
const form = document.querySelector(".form")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    f()
})
async function f() {
    try {
        const city = document.querySelector("#city");
        const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=b6bcaa18c26de70a19051f3100bf2376`);
        const info = await api.json();
        const cityName = document.querySelector(".cityName");
        const temp = document.querySelector(".temp");
        const lowTemp = document.querySelector(".lowTemp");
        const highTemp = document.querySelector(".highTemp");
        const humidity = document.querySelector(".humidity");
        const weather = document.querySelector(".weather");
        const wind = document.querySelector(".wind");
        const main = document.querySelector(".main");

        cityName.textContent = info.name;
        temp.textContent = 'Temperature: ' + (Number(info.main.temp) - 273.15).toFixed(1).toString() + ' ℉';
        lowTemp.textContent = 'Low Temperature: ' + (Number(info.main.temp_min) - 273.15).toFixed(1).toString() + ' ℉';
        highTemp.textContent = 'High Temperature: ' + (Number(info.main.temp_max) - 273.15).toFixed(1).toString() + ' ℉';
        humidity.textContent = 'Humidity: ' + info.main.humidity + '%';
        weather.textContent = 'Weather: ' + info.weather[0].main;
        img.setAttribute("src", `http://openweathermap.org/img/wn/${info.weather[0].icon}.png`);
        wind.textContent = 'Wind: ' + info.wind.speed;
        if (getComputedStyle(main).display === "none") main.style.display = "grid";

        console.log(info);
        console.log(main.style.display);
        console.log(getComputedStyle(main).display);

    } catch (e) {
        console.log(e);
        alert("No matching location found, please fill in again!")
    }
}
