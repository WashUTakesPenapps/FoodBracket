	// apiKey = "AIzaSyDVLzXVT1vBPMgHF-x3MOXQlMJiVlryDj8"



window.onload = function() {
    document.getElementById("makeBracket").addEventListener("submit", function(event) {
        event.preventDefault();

        var restaurantResults = new Array(8);

        var queryString = queryId.value; //should sanitize later
        var maxPrice = maxId.value; //0 to 4
        var radiusString = radiusId.value; //0 to 50,000 m

        var service;

        var request = {
            // radius: radiusString,
            query: queryString,
            minPriceLevel: 0,
            maxPriceLevel: maxPrice
        };

        service = new google.maps.places.PlacesService(document.createElement('div'));
        service.textSearch(request, callback);

        function callback(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < 8; i++) {
                    restaurantResults[i] = results[i].place_id;
                    console.log(restaurantResults[i]);
                    localStorage.setItem(i, restaurantResults[i]);
                }
            }
        }
    });
};