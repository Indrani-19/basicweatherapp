const express =require("express");
const https = require("https");
const app = express();

app.get("/", function(req, res){
    const url= "https://api.openweathermap.org/data/2.5/weather?lat=20.5937&lon=78.9629&appid=e169e6566ff3417a1359fe171c8dfc21"
    https.get(url, function(response){
        console.log(response.statusCode);
        //to get data
        response.on("data", function(data){
           //PARSING DATA INTO JSON FORMAT
            const weatherData = JSON.parse(data)
           const temp = weatherData.main.temp
           const weatherDescription = weatherData.weather[0].description
          const icon = weatherData.weather[0].icon
          const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png" 
           res.write(" <h1>  The Temperature in India is "+ temp + "Fahrenheit </h1>");
           res.write(" <h2> <em> Weather is currently : " + weatherDescription  + "<h2>");
           res.write("<img src = "+ imageURL+">");
           res.send()
        })
        } )
       
})
    
app.listen(3000,
    function() {
    console.log(" Server is running on port 3000.");
    } ) 