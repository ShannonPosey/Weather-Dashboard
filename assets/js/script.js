var city = $("#searchTerm").val();
var apiKey = "328ab9e679afe915cefe77fda25c1728";

$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    // console.log("searchBtn");
    $("#five-day-forecast").addClass("show");
    // console.log("five-day-forecast");

    // user input value
    city = $("#searchTerm").val();

    $("#searchTerm").val("");

    // var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";

    /* need for API CAll
    lat, lon
    api key
    */
    
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
    console.log(apiUrl);
    fetch(apiUrl).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                console.log(data);
            });
        }
    });
});

var displayList = function() {
    var listItem = $("<li>").addClass("list-group-item").text(city);
    $(".list").append(listItem);
};

var getCurrentWeather = function() {
    var tempF = function() {
        tempF = Math.floor(tempF);
    };

    $("#currentCity").empty();

    var card = $("<div>").addClass("card");
    var cardBody = $("<div").addClass("card-body");
    var city = $("<h4>").addClass("card-title").text(response.name);
    var cityDate = $("<h4>").addClass("card-title").text(date.toLocalDateString("en-US"));
    var temperature = $("<p>").addClass("card-text current-temp").text("Temperature: " + tempF + " F");
    var humidity = $("<p>").addClass("card-text current-humidity");
};

