// apiKey ("25e44f201a3eb157f3f0ad7495392824")
var cityFormEl = document.querySelector("#city-form");
var searchBarEl = document.querySelector("#searchBar");
var forecastContainerEl = document.querySelector("#forecast-container");
var citySearchTerm = document.querySelector("#search-city-term");
// var formInput = document.querySelector(".form-input")

let userInput = "Phoenix";


// PHOENIX https://api.openweathermap.org/data/2.5/onecall?lat=34.048927&lon=-111.093735&exclude=minutely,hourly&appid=25e44f201a3eb157f3f0ad7495392824"
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
    } else {
        alert("Please enter a valid City");

    };  
};


// API's to display
var getForecast = function(city) {
    // make the request to the url
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=25e44f201a3eb157f3f0ad7495392824")
      .then(function(response){
          // request was successful
          if (response.ok) {
            //   console.log(response);
              response.json().then(function(data) {
                  console.log(data);
                  displayForecast(data, city) //ADD DATE 
              });
          } else {
                alert("Error: " + response.statusText);
              }
            })
            .catch(function(error) {
              alert("Unable to connect to One Call");
        });
        


// var displayForecast = function(forecast, searchCity) {
//     // console.log(forecast);
//     // console.log(searchCity);

//     var celcius = Math.round(parseFloat(forecast.main.temp)-273.15);
// 	var fahrenheit = Math.round(((parseFloat(forecast.main.temp)-273.15)*1.8)+32); 

    // forecastContainerEl.textContent = "";
    // citySearchTerm.textContent = searchCity;

    function displayForecast(fc) {
        
        var fahrenheit = Math.round(((parseFloat(fc.main.temp)-273.15)*1.8)+32); 

        document.getElementById('breakdown').innerHTML = fc.weather[0].description;
	    document.getElementById('forecast-container').innerHTML = fahrenheit + '&deg;';
	    document.getElementById('subtitle').innerHTML = fc.name;
        
    }
}




getForecast();

cityFormEl.addEventListener("submit", citySubmitHandler);





// function weatherBalloon( cityID ) {
//     var key = "25e44f201a3eb157f3f0ad7495392824";
//     fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key) 
//     // Convert data to json 
//     .then(function(response) {
//         return response.json() }) 
//     .then(function(data) {
//         drawWeather(data);
//     })
//     .catch(function() {
//       // catch any errors
//     });
//   }
  
//   window.onload = function() {
//     weatherBalloon( 6167865 );

    
//   }

//   function drawWeather( d ) {
// 	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
// 	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
// 	document.getElementById('description').innerHTML = d.weather[0].description;
// 	document.getElementById('temp').innerHTML = celcius + '&deg;';
// 	document.getElementById('location').innerHTML = d.name;
// }

  
  





// //  // make the request to the url
// //  fetch("https://api.openweathermap.org/data/2.5/onecall?lat=34.048927&lon=-111.093735&exclude=minutely,hourly&appid=25e44f201a3eb157f3f0ad7495392824")
// //  .then(function(response){
// //  response.json().then(function(data) {
// //    console.log(data);

// // });
// // });





// // API's to display
// var getForecast = function(city) {
//     // format the One Call api url
//     var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=34.048927&lon=-111.093735&exclude=minutely,hourly&appid=25e44f201a3eb157f3f0ad7495392824" + city + "/forecast";
    

//     // make the request to the url
//     fetch(apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=34.048927&lon=-111.093735&exclude=minutely,hourly&appid=25e44f201a3eb157f3f0ad7495392824")
//       .then(function(response){
//           // request was successful
//           if (response.ok) {
//             //   console.log(response);
//               response.json().then(function(data) {
//                 //   console.log(data);
//                   displayForecast(data, city) //ADD DATE 
//               });
//           } else {
//                 alert("Error: " + response.statusText);
//               }
//             })
//             .catch(function(error) {
//               alert("Unable to connect to One Call");
//         });
        