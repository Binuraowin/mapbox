mapboxgl.accessToken = '';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
  })

  function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
  }
  
  function errorLocation() {
    setupMap([0, 0])
  }
   


function setupMap(center) {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 16
      });
      var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');


var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken ,

  });
  

  
  map.addControl(directions, 'top-left');
}

