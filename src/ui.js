thermostat = new Thermostat();

function changeTemp(){
  if (thermostat.isLow()) {
    $("#light").css({"background-image":"-webkit-radial-gradient(45px 45px, circle cover, green, yellow)"});
  } else if (thermostat.isHigh()) {
    $("#light").css({"background-image":"-webkit-radial-gradient(45px 45px, circle cover, red, yellow)"});
  } else {
    $("#light").css({"background-image":"-webkit-radial-gradient(45px 45px, circle cover, yellow, orange)"});
  }
  document.getElementById("temp").innerHTML = thermostat.temp();
}


$( document ).ready(function() {

  $( "#increase" ).click(function( event ) {
    thermostat.increaseTemp();
    changeTemp();
  });

  $( "#decrease" ).click(function( event ) {
    thermostat.decreaseTemp();
    changeTemp();
  });

  $( "#reset" ).click(function( event ) {
    thermostat.resetTemp();
    changeTemp();
  });

  $( "#change_mode" ).click(function( event ) {
    thermostat.changePowerSaving();
    if (thermostat.isPowerSaving()) {
      document.getElementById("mode").innerHTML = "on"
      document.getElementById("change_mode").innerHTML = '<i class="fa fa-envira fa-5x" aria-hidden="true"></i>'
    } else {
      document.getElementById("mode").innerHTML = "off"
      document.getElementById("change_mode").innerHTML = '<i class="fa fa-industry fa-5x" aria-hidden="true"></i>'
    }
  });

  var getWeather = function(postcode ="zip=EH16LT") {
    $.getJSON( "http://api.openweathermap.org/data/2.5/weather?" + postcode + ",gb&APPID=500d68efb66af37cbb6f9dce091bb043", function( data ) {
      $("#city_temperature").text(data.name + ": " + Math.round(data.main.temp - 273.16) + " °C, " + data.weather[0].description);
      console.log(data.name)
    });
  };

  $("#submit").click(function() {
    var postcode = $('form').serialize()
    console.log(postcode);
    getWeather(postcode);
  });

  document.getElementById("temp").innerHTML = thermostat.temp();
  getWeather();

});
