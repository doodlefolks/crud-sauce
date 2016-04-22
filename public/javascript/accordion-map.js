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
    var lat = 47.6792000;
    var long = -122.3860000;
    var defCenter = new google.maps.LatLng(lat, long);
    map = new google.maps.Map(document.getElementById('map'), {
      center: defCenter,
      zoom: 14
  });

  infowindow = new google.maps.InfoWindow();
  for (var i = 0; i < $('.placeLat').length;i++ ){
    var lat = parseFloat($('.placeLat')[i].value);
    var long = parseFloat($('.placeLong')[i].value);
    var spot = {lat: lat, lng: long}
    var placeLoc = {lat: spot.lat, lng: spot.lng};
    var marker = new google.maps.Marker({
      clicked: false,
      map: map,
      position: placeLoc
    });
    (function (i) {
      google.maps.event.addListener(marker, 'click', function(){
        infowindow.setContent($('.name')[i].value);
        infowindow.open(map, this);
      });
    })(i);
  }
}

for (var i = 0; i < $('.hoodz').length; i++){
  (function (i){
    $('.hoodz').eq(i).click(function(){
      var hLat = parseFloat($('.hoodLat')[i].value);
      var hLong =parseFloat($('.hoodLong')[i].value);
      map.setCenter({lat: hLat, lng: hLong});
    });
  })(i);
}

var mapButtons = $('.find-on-map');
for (var i = 0; i < mapButtons.length; i++) {
  (function (i) {
    mapButtons.eq(i).click(function(){
      var lat = parseFloat($(this).attr('lat'));
      var long = parseFloat($(this).attr('long'));
      map.setCenter({lat: lat, lng: long});
    });
  })(i);
}
