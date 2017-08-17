function init_map() {
        var var_location = new google.maps.LatLng(20.936239, 106.311776);

        var var_mapoptions = {
            center: var_location,
            zoom: 17
        };

        var var_marker = new google.maps.Marker({
            position: var_location,
            map: var_map,
            title: "Hung Yen University of Technology and Education"
        });

        var var_map = new google.maps.Map(document.getElementById("map-container"),
            var_mapoptions);

        var_marker.setMap(var_map);

    }

 google.maps.event.addDomListener(window, 'load', init_map);