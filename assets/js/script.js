// apiKey ("25e44f201a3eb157f3f0ad7495392824")
var cityFormEl = document.querySelector("#city-form");
var searchBarEl = document.querySelector("#searchBar");
var forecastContainerEl = document.querySelector("#forecast-container");
var tempEl = document.querySelector("#show-temp");
var windEl = document.querySelector("#wind");
var humidityEl = document.querySelector("#humidity");
var uvIndexEl = document.querySelector("#uv-index");

citiesStore = [];

// PHOENIX https://api.openweathermap.org/data/2.5/onecall?lat=34.048927&lon=-111.093735&exclude=minutely,hourly&appid=25e44f201a3eb157f3f0ad7495392824
// SURPRISE https://api.openweathermap.org/data/2.5/onecall?lat=34.048927&lon=-111.093735&exclude=minutely,hourly&appid=25e44f201a3eb157f3f0ad7495392824

//GEOCODE
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
// http://api.openweathermap.org/geo/1.0/direct?q=surprise,az,usa&limit=5&appid=25e44f201a3eb157f3f0ad7495392824

// function to get value from search and click
var citySubmitHandler = function (event) {
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
  }
};

// add this to click function, tweak if, json.stringify on setItem
// function citiesStore(city) {
// if(localStorage.getItem("city")) {
//     citiesStore = JSON.parse(localStorage.getItem("city"));
//     console.log(city);
//   }
// }

// var saveCitiesStore = function(event) {
//   localStorage.setitem("city", JSON.stringify(citiesStore));
//   console.log(event)
// citiesStore.push(cityText);
// };
// var showHistory = function(saveCitiesStore) {
//   saveCitiesStore = JSON.parse(localStorage.getItem(city));
// };

// API's to display
var getForecast = async function (city) {
  // make the request to the url
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=25e44f201a3eb157f3f0ad7495392824"
  )
    
      // request was successful
      if (!response.ok) {alert
          ("Error: " + response.statusText); 
          return;
        }
        response.json().then(async function (data) {
          // var for lat and lon
          var { lat } = data.coord;
          var { lon } = data.coord;
          console.log('got here')
          // fetch for lat and lon api
          const reply = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=25e44f201a3eb157f3f0ad7495392824`
          )
            if (!reply.ok) {
              ("Error: " + response.statusText); 
              return
            };
            console.log('got here again')
            const info = await reply.json();
            console.log(info);
              displayForecast(data, city, info.current.uvi);
              displayWeekly(info);
          // console.log(data);
          // call display function
          // displayForecast(data, city); //ADD DATE <<<<<<<<<
        });
      };
        
      // displays days 1-5 (need to pass the function to html like the displayforecast below)
     function displayWeekly(info) {
       for (let step = 1; step < 6; step++) {
         console.log(info.daily[step])
       }
     }

  
      


    
    
    

  // display in browser
  function displayForecast(fc, name, uvi) {
    var fahrenheit = Math.round((parseFloat(fc.main.temp) - 273.15) * 1.8 + 32);
    var wind = Math.round(fc.wind.speed);
    var humidity = Math.round(fc.main.humidity);
    // var uvi = Math.round(fc.current.uvi);

    document.getElementById("subtitle").innerHTML = name;
    document.getElementById("show-temp").innerHTML = fahrenheit + "&deg;";
    document.getElementById("wind").innerHTML = wind + "mph";
    document.getElementById("humidity").innerHTML = humidity + "%";
    document.getElementById("uv-index").innerHTML = uvi;
  };


cityFormEl.addEventListener("submit", citySubmitHandler);
