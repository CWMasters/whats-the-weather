
// var apiKey = document.querySelector("25e44f201a3eb157f3f0ad7495392824")


// var getForecast = function() {
//     console.log("function was called");
//   };
  
//   getForecast();

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q=Phoenix,az&APPID=25e44f201a3eb157f3f0ad7495392824
//THIS WORKS  https://api.openweathermap.org/data/2.5/onecall?lat=33.4484n&lon=112.0740w&exclude={part}&appid=25e44f201a3eb157f3f0ad7495392824

// PHOENIX https://api.openweathermap.org/data/2.5/onecall?lat=34.048927&lon=-111.093735&exclude=minutely,hourly&appid=25e44f201a3eb157f3f0ad7495392824"
// SURPRISE https://api.openweathermap.org/data/2.5/onecall?lat=34.048927&lon=-111.093735&exclude=minutely,hourly&appid=25e44f201a3eb157f3f0ad7495392824


var getWeather = function(city) {
    // format the One Call api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=34.048927&lon=-111.093735&exclude=minutely,hourly&appid=25e44f201a3eb157f3f0ad7495392824" + city+ "/weather";
    

    // make the request to the url
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=34.048927&lon=-111.093735&exclude=minutely,hourly&appid=25e44f201a3eb157f3f0ad7495392824")
    .then(function(response){
    response.json().then(function(data) {
        console.log(data);

    });
});



// // make a get request to url
// fetch(apiUrl)
// .then(function(response) {
//   // request was successful
//   if (response.ok) {
//     console.log(response);
//     response.json().then(function(data) {
//       console.log(data);
//       displayWeather(data, user);
//     });
//   } else {
//     alert("Error: " + response.statusText);
//   }
// })
// .catch(function(error) {
//   alert("Unable to connect to One Call");
// });

};
getWeather();




