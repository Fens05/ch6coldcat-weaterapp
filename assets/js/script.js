



 var inputval = document.querySelector('#cityinput')
 var city = document.querySelector('#cityoutput')
 var descrp = document.querySelector('#description')
 var temp = document.querySelector('#temp')
 var wind = document.querySelector('#wind')
 var humidity = document.querySelector('#Humidity')
 var uv = document.querySelector('#uvindex')
 var apiKey = "f96bb4281b196143404aaccc30d1fe98";
 var APIURL ="api.openweathermap.org/data/2.5/forecast?q=";

 var loadPage = function () {
    var citiesFromLocalStorage = localStorage.getItem("cities");
    if (citiesFromLocalStorage != null) {
        cityStore = JSON.parse(citiesFromLocalStorage);

        $("#cityStore").html("");

        for (let i = 0; i < cityStore.city.length; i++) {
            var cityLi = $("<li class='box history-city'>");
            cityLi.html(cityStore.city[i]);
            $("#cityStore").append(cityLi);
        }
    }
}

const weather = null;


fetch(APIUrl)
        .then(function(response) {
            // request was successful
            if (response.ok) {
                response.json().then(function (data) {
                    getCurWeather(data.name, data.main.temp, data.wind.speed, data.main.humidity, data.weather[0].icon);
                    getOneCallApiData(data.coord.lat, data.coord.lon);
                  });
            } else {
                alert("Error: OpenWeather - city not found");
            }
        })
        .catch(function(error) {
            alert("Unable to connect to Open Weather");
        });





    function searchCity (){
       addEventListener.getElementById("click", searchCity);
    }



  