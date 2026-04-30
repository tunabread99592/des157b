(function(){
    'use strict';
    console.log('running js');

    // add your script here
    var map = L.map('map').setView([37.132568, -121.624626], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([37.132568, -121.624626]).addTo(map);

    var circle = L.circle([37.124549, -121.662990], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);

    var polygon = L.polygon([
        // snowee rolls
        [37.128035, -121.651836],
        // Jonty's
        [37.129387236802195, -121.65036347050467],
        // Main St Bagels
        [37.128485601314495, -121.65237249786414]
    ]).addTo(map);

    marker.bindPopup("<b>This is my childhood home!</b><br>I miss it.").openPopup();
    circle.bindPopup("My library.");
    polygon.bindPopup("Favorite eateries downtown.");
    
    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);

}());