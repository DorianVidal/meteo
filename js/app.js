var callBackGetSuccess = function(data_recup) {
    console.log("data_recup", data_recup);

    //AFFICHAGE PREMIER JOUR
    var element = document.getElementById("zone_meteo_0_date");
    element.innerHTML = "Aujourd' hui : " + data_recup.list[0].dt_txt;
    var element = document.getElementById("zone_meteo_0_temp");
    element.innerHTML = "Temperture : " + data_recup.list[0].main.temp + " °C";
    var weather = data_recup.list[0].weather[0].main;
    SetBg(weather);
    //AFFICHAGE DEUXIEME JOUR
    var element = document.getElementById("zone_meteo_1_date");
    element.innerHTML = "Demain : " + data_recup.list[8].dt_txt;
    var element = document.getElementById("zone_meteo_1_temp");
    element.innerHTML = "Temperture : " + data_recup.list[8].main.temp + " °C";
    //AFFICHAGE TOISIEME JOUR
    var element = document.getElementById("zone_meteo_2_date");
    element.innerHTML = "Arpès Demain : " + data_recup.list[16].dt_txt;
    var element = document.getElementById("zone_meteo_2_temp");
    element.innerHTML = "Temperture : " + data_recup.list[16].main.temp + " °C";

}

function GetCity() {
    var queryLoc = document.getElementById("zone_selection").value;

    var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + queryLoc + "&units=metric&cnt=24&appid=78dcfe48ee039658741a9ec49412fe82"
    $.get(url, callBackGetSuccess).done(function() {
            //alert( "second success" );
        })
        .fail(function() {
            alert("error");
        })
        .always(function() {
            //alert("finished");
        });


}

function SetBg(weather) {
    //On changera ici la couleur du fond en fonction du temps
    var urlBg;
    if (weather === "Clouds") {

        return document.body.style.background = "url(img/cloud.jpg)";
    }
    if (weather === "Rain") {

        return document.body.style.background = "url(img/rain.jpg)";
    }
    if (weather === "Snow") {

        return document.body.style.background = "url(img/snow.jpg)";
    }
    if (weather === "Mist") {

        return document.body.style.background = "url(img/mist.jpg)";
    }
    if (weather === "Clear") {

        return document.body.style.background = "url(img/sun.jpg)";
    }
}