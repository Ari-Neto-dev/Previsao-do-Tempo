var searchButton = document.getElementById("searchButton");
var cityImput = document.getElementById("cityImput");
var weatherInfo = document.getElementById("weatherInfo");

searchButton.addEventListener("click", function () {
  var cityName = cityInput.value;

  //Simulação de requisição http para obter os dados de clima

  var fakeWeatherData = {
    city: cityName,
    temperature: "25 C",
    description: "Ensolarado",
  };

  var weatherHTML = `
<h2>${fakeWeatherData.city}</h2>
<p>Temperatura:${fakeWeatherData.temperature}</p>
<p>Descrição: ${fakeWeatherData.description}</p>`;

  weatherInfo.innerHTML = weatherHTML;
});
