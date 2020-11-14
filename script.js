mapboxgl.accessToken = '';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
  })

  function successLocation(position) {
    console.log(position)
  }
  
  function errorLocation() {
   
  }
  
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
});