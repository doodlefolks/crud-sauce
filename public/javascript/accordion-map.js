var map;
var infowindow;
var geocoder;
var lat;
var long;

$(function() {
  $( "#accordion" ).accordion();
});

$("#easyNav a").click(function(event) {

  var hood = parseInt(($(event.target).parent())[0].id);

  var divPosition = $('h3:nth-of-type(' + (hood + 1) + ')').offset();
  $('html, body').animate({scrollTop: (divPosition.top - 500)}, "slow");

  $( "#accordion" ).accordion({active: hood});




  console.log(divPosition.top)
});

function initMap() {
    geocoder = new google.maps.Geocoder();
    var lat = $('.mapLat')[0].value;
    var long = $('.mapLong')[0].value;
    var defCenter = new google.maps.LatLng(lat, long);
    console.log(defCenter);
    map = new google.maps.Map(document.getElementById('map'), {
      center: defCenter,
      zoom: 15
  });
}
