function initialize() {
  var address = (document.getElementById('my-address'));
  var autocomplete = new google.maps.places.Autocomplete(address);
  autocomplete.setTypes(['geocode']);
  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      return;
    }

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }
  });
}

function codeAddress() {
  geocoder = new google.maps.Geocoder();
  var address = document.getElementById("my-address").value;
  geocoder.geocode({
    'address': address
  }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      document.querySelector('#result').style.opacity = "1";
      document.querySelector("#lat").innerText = "Latitude: " + results[0].geometry.location.lat().toFixed(5);
      document.querySelector("#lng").innerText = "Longitude: " + results[0].geometry.location.lng().toFixed(5);
      console.log("Latitude: " + results[0].geometry.location.lat());
      console.log("Longitude: " + results[0].geometry.location.lng());
    } else {
      $("#lat").innerText = "Geocode was not successful for the following reason: " + status;
      console.log("Geocode was not successful for the following reason: " + status);
    }
  });
}
google.maps.event.addDomListener(window, 'load', initialize);