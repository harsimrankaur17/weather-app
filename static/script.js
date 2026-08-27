const delhiWeather = document.getElementById("delhiWeather");
const londonWeather = document.getElementById("londonWeather");
const newYorkWeather = document.getElementById("newYorkWeather");

const form = document.getElementById("weatherForm");
const cityInput = document.getElementById("city");
const userWeather = document.getElementById("userWeather");


function getWeather(city, container) {

    fetch("/weather?city=" + encodeURIComponent(city))
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {

            container.innerHTML = `
                <p>Temperature: ${data.temperature}°C</p>
                <p>Wind: ${data.wind} km/h</p>
                <p>Time: ${data.time}</p>
            `;

        })

        .catch(function (error) {

            container.textContent = "Unable to get weather.";

            console.log(error);

        });
}


getWeather("Delhi", delhiWeather);
getWeather("London", londonWeather);
getWeather("New York City", newYorkWeather);


form.addEventListener("submit", function (event) {

    event.preventDefault();

    const city = cityInput.value;

    getWeather(city, userWeather);

});