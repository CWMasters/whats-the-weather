// apiKey ("25e44f201a3eb157f3f0ad7495392824")
var cityFormEl = document.querySelector("#city-form");
var searchBarEl = document.querySelector("#searchBar");
var forecastContainerEl = document.querySelector("#forecast-container");
// var citySearchTerm = document.querySelector("#search-city-term");
// var formInput = document.querySelector(".form-input")




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
        // userInput.value = "";
    } else {
        alert("Please enter a valid City");
    };  
};


// save inputs as quick links
// var saveUserInput = function(userInput) {
//     if(userInput.length > 10) {
//         userInput.splice(0, 1, 2);
//     }
//     userInput.push(userInput);
//     localStorage.setItem("City", json.stringify(userInput));
// };




// API's to display
var getForecast = function(city) {
    // make the request to the url
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=25e44f201a3eb157f3f0ad7495392824")
      .then(function(response){
          // request was successful
          if (response.ok) {
            //   console.log(response);
              response.json().then(function(data) {
                var {lat} = data.coord;
                var {lon} = data.coord;

                fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=25e44f201a3eb157f3f0ad7495392824`)
                .then = function(response){
                    if (response.ok) {
                        response.json().then(function(data) {
                        })
                    } else {
                        alert("Error: " + response.statusText);
                    }
                }
                console.log(data);
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
    function displayForecast(fc, name) {
        
        var fahrenheit = Math.round(((parseFloat(fc.main.temp)-273.15)*1.8)+32); 

        document.getElementById('breakdown').innerHTML = fc.weather[0].description;
	    document.getElementById('forecast-container').innerHTML = fahrenheit + '&deg;';
	    document.getElementById('subtitle').innerHTML = name;
        
    }
}


// getForecast();

cityFormEl.addEventListener("submit", citySubmitHandler);








  
  





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
        