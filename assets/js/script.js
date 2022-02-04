// apiKey ("25e44f201a3eb157f3f0ad7495392824")
var cityFormEl = document.querySelector("#city-form");
var searchBarEl = document.querySelector("#searchBar");
var forecastContainerEl = document.querySelector("#forecast-container");
var tempEl = document.querySelector("#show-temp");
var windEl = document.querySelector("#wind")
var humidityEl = document.querySelector("#humidity")
var uvIndexEl = document.querySelector("#uv-index");

citiesStore = []


// PHOENIX https://api.openweathermap.org/data/2.5/onecall?lat=34.048927&lon=-111.093735&exclude=minutely,hourly&appid=25e44f201a3eb157f3f0ad7495392824
// SURPRISE https://api.openweathermap.org/data/2.5/onecall?lat=34.048927&lon=-111.093735&exclude=minutely,hourly&appid=25e44f201a3eb157f3f0ad7495392824


//GEOCODE
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
// http://api.openweathermap.org/geo/1.0/direct?q=surprise,az,usa&limit=5&appid=25e44f201a3eb157f3f0ad7495392824


// function to get value from search and click
var citySubmitHandler = function(event) {
    // prevent page from refreshing
    event.preventDefault();
    // console.log(event);
    // get value from input element
    var searchBar = searchBarEl.value.trim();
   
    if (searchBar) {
        getForecast(searchBar);
        searchBarEl.value = "";
        // userInput.value = "";
    } else {
        alert("Please enter a valid City");
    };  
};

// add this to click function, tweak if, json.stringify on setItem
// function saveCity(city) {
//   if(localStorage.getItem("city")) {
//     citiesStore = JSON.parse(localStorage.getItem("city"));
//     console.log(city);
//   }
// }

// var saveCitiesStore = function(cityText) {
//   citiesStore.push(cityText);
//   localStorage.setitem("city", JSON.stringify(citiesStore));
// };
// var showHistory = function(event) {
//   let lastCity = event.target.textContent;
//   cityFormEl.value = lastCity
// };


// API's to display
var getForecast = function(city) {
  // make the request to the url
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=25e44f201a3eb157f3f0ad7495392824")
    .then(function(response){
      // request was successful
      if (response.ok) {
        response.json().then(function(data) {
   
        // var for lat and lon      
var {lat} = data.coord;
var {lon} = data.coord;

  // fetch for lat and lon api
  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=25e44f201a3eb157f3f0ad7495392824`)
    .then = function(response){
      if (response.ok) {
        response.json().then(function(data) {
        })
      } 
    }
          console.log(data);
          // call display function
          displayForecast(data, city) //ADD DATE <<<<<<<<< 
              });
          } else {
                alert("Error: " + response.statusText);
              }
            })
            .catch(function(error) {
              alert("Unable to connect to One Call");
    });
        

    // display in browser
    function displayForecast(fc, name, humidity, wind, uvi) {
        
        var fahrenheit = Math.round(((parseFloat(fc.main.temp)-273.15)*1.8)+32); 
        var wind = Math.round(fc.wind.speed);
        var humidity = Math.round(fc.main.humidity);
        // var uvi = Math.round(fc.current.uvi);

	      document.getElementById('subtitle').innerHTML = name;
	      document.getElementById('show-temp').innerHTML = fahrenheit + '&deg;';
        document.getElementById('wind').innerHTML = wind +  'mph';
        document.getElementById('humidity').innerHTML = humidity + '%';
        document.getElementById('uv-index').innerHTML = uvi;
    }
}

// getForecast();
// loadTasks();

// $(".searchBtn").on("click, saveCity)");
// cityFormEl.addEventListener("click", showHistory)
cityFormEl.addEventListener("submit", citySubmitHandler);


