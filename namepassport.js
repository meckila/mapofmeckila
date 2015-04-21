//DROP_DOWN SELECT
var DivTxt = new Array()
DivTxt[0] = "Please select a category"
DivTxt[1] = "July 20th!"
DivTxt[2] = "Watermelon Sour Patches <3"
DivTxt[3] = "Summer"
DivTxt[4] = "2 older siblings! I have a sister, Carmella, and a brother, Michael."
 
function getText(selection){
    txtSelected = selection.selectedIndex;
    document.getElementById('textDiv').innerHTML = DivTxt[txtSelected];
}

//VIDEO
function playPause() { 
    var myVideo = document.getElementById("manny"); 
    if (myVideo.paused) 
        myVideo.play(); 
    else 
        myVideo.pause(); 
} 
//MAPS
var oakland = new google.maps.LatLng(37.804712, -122.272053);
var san_andres = new google.maps.LatLng(12.550261, -81.707687);

var MY_MAPTYPE_ID = 'custom_style';

function map1() {
  //Customize features of map
  var featureOpts = [{"featureType":"landscape","stylers":[{"visibility":"simplified"},{"color":"#f3b191"},{"weight":0.1}]},
  {"featureType":"administrative","stylers":[{"visibility":"on"},{"hue":"#ff0000"},{"weight":0.4},{"color":"#ffffff"}]},
  {"featureType":"road.highway","elementType":"labels.text","stylers":[{"weight":1.3},{"color":"#FFFFFF"}]},
  {"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#f55f77"},{"weight":3}]},
  {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#f55f77"},{"weight":1.1}]},
  {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#f55f77"},{"weight":0.4}]},{},
  {"featureType":"road.highway","elementType":"labels","stylers":[{"weight":0.8},{"color":"#ffffff"},{"visibility":"on"}]},
  {"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"color":"#ffffff"},{"weight":0.7}]},
  {"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"color":"#6c5b7b"}]},
  {"featureType":"water","stylers":[{"color":"#2A465D"}]},
  {"featureType":"transit.line","stylers":[{"visibility":"on"}]}]

  var mapOptions = {
    zoom: 10,
    center: oakland,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

  var map = new google.maps.Map(document.getElementById('map-canvas1'),
      mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
  //Create marker of birthplace
  var image = 'images/diamond.png';
  var marker = new google.maps.Marker({
        position: oakland,
        map: map, icon: image});
      marker.setAnimation(google.maps.Animation.BOUNCE);
    
  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);     
  
}
google.maps.event.addDomListener(window, 'load', map1); 

////////////////////////////////////////////////////

function map2() {

  var featureOpts = [{"featureType":"landscape","stylers":[{"visibility":"simplified"},{"color":"#f3b191"},{"weight":0.1}]},
  {"featureType":"administrative","stylers":[{"visibility":"on"},{"hue":"#ff0000"},{"weight":0.4},{"color":"#ffffff"}]},
  {"featureType":"road.highway","elementType":"labels.text","stylers":[{"weight":1.3},{"color":"#FFFFFF"}]},
  {"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#f55f77"},{"weight":3}]},
  {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#f55f77"},{"weight":1.1}]},
  {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#f55f77"},{"weight":0.4}]},{},
  {"featureType":"road.highway","elementType":"labels","stylers":[{"weight":0.8},{"color":"#ffffff"},{"visibility":"on"}]},
  {"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"color":"#ffffff"},{"weight":0.7}]},
  {"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"color":"#6c5b7b"}]},
  {"featureType":"water","stylers":[{"color":"#2A465D"}]},
  {"featureType":"transit.line","stylers":[{"visibility":"on"}]}]

  var mapOptions = {
    zoom: 12,
    center: san_andres,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

  var map = new google.maps.Map(document.getElementById('map-canvas2'),
      mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
  
  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
  //Create marker for San Andres
  var image = 'images/diamond.png';
  var marker = new google.maps.Marker({
        position: san_andres,
        map: map, icon: image});
      marker.setAnimation(google.maps.Animation.BOUNCE);
    
  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);    
}

google.maps.event.addDomListener(window, 'load', map2);




