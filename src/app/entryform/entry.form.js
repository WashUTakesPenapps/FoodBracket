window.onload = function() {
    document.getElementById("makeBracket").addEventListener("submit", function(event) {
        event.preventDefault();

        var placeSearch = new XMLHttpRequest();
        var apiKey = "AIzaSyDVLzXVT1vBPMgHF-x3MOXQlMJiVlryDj8";
        var queryString = queryId.value; //should sanitize later
        var maxPrice = maxId.value; //0 to 4
        var radiusString = radiusId.value; //0 to 50,000 m

        var service;

        function initialize() {
            var request = {
                // radius: radiusString,
                query: queryString,
                minPriceLevel: 0,
                maxPriceLevel: maxPrice
            };

            service = new google.maps.places.PlacesService(document.createElement('div'));
            service.textSearch(request, callback);
        }

        var restaurantResults = new Array();

        function callback(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < 8; i++) {
                    var place = results[i];
                    restaurantResults.push(place);
                    console.log(restaurantResults[i]);
                }
            }
        }

        initialize();

        

        // placeSearch.open('GET', 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + queryString + '&maxprice=' 
        //     + maxPrice + '&opennow=true&radius=' + radius + '&key=' + apiKey);
        // console.log('https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + queryString + '&maxprice=' 
        // + maxPrice + '&opennow=true&radius=' + radius + '&key=' + apiKey);

        // placeSearch.onreadystatechange = function () {
        //     if (this.readyState === 4 && this.status === 200) {
        //         var resultsArray = placeSearch.responseText.split(',');
        //         //details gives 10 photos, search gives 1 photo

        //         console.log(resultsArray);


        //         // var photoId = resultsArray.photo_reference;
        //         // var maxWidth = resultsArray.width;
        //         // var restaurantName = resultsArray.name;
        //         // var placeId = resultsArray.placeId;
        //         // var rating = resultsArray.rating;
        //     } else if (this.status === 404) {
        //         //handle error
        //         console.log('error');
        //     }
    });

};