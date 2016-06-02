/**
 * Created by chamathsilva on 6/1/16.
 */

var previousMaker = null;

function initialize() {
    var mapProp = {
        center:new google.maps.LatLng(7.8985,80.6771),
        zoom:8,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

    google.maps.event.addListener(map, "click", function(event) {
        var lat = event.latLng.lat();
        var lng = event.latLng.lng();
        // populate yor box/field with lat, lng
        placeMarker(event.latLng);

        setLatLog(lat,lng);


        //alert("Lat=" + lat + "; Lng=" + lng);
    });

    function placeMarker(location) {
        /* Remove Previous Markers */
        if (previousMaker != null){
            previousMaker.setMap(null);
        }

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            animation: google.maps.Animation.DROP
        });

        //call bounce animation after second
        setTimeout(function(){  marker.setAnimation(google.maps.Animation.BOUNCE); }, 300);

        previousMaker = marker;
    }
}
google.maps.event.addDomListener(window, 'load', initialize);



