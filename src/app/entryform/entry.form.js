window.onload = function() {
    document.getElementById("makeBracket").addEventListener("submit", function(event) {
        event.preventDefault();

        var placeSearch = new XMLHttpRequest();
        var apiKey = "AIzaSyDVLzXVT1vBPMgHF-x3MOXQlMJiVlryDj8";
        var queryString = queryId.value; //should sanitize later
        var maxPrice = maxId.value; //0 to 4
        var radius = radiusId.value; //0 to 50,000 m

        placeSearch.open('GET', 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + queryString + '&maxprice=' 
            + maxPrice + '&opennow=true&radius=' + radius + '&key=' + apiKey);
        console.log('https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + queryString + '&maxprice=' 
        + maxPrice + '&opennow=true&radius=' + radius + '&key=' + apiKey);

        placeSearch.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var resultsArray = placeSearch.responseText.split(',');
                //details gives 10 photos, search gives 1 photo

                console.log(resultsArray);
                // var restaurantResults = new Set();
                // for (i = 0; i < 8; i++) {
                //     restaurantResults.add(resultsArray[i]);
                // }

                // localStorage.setItem("results", JSON.stringify(restaurantResults));

                // var photoId = resultsArray.photo_reference;
                // var maxWidth = resultsArray.width;
                // var restaurantName = resultsArray.name;
                // var placeId = resultsArray.placeId;
                // var rating = resultsArray.rating;
            } else if (this.status === 404) {
                //handle error
                console.log('error');
            }


        };

        placeSearch.setRequestHeader("Content-Type", "application/json");
        placeSearch.send();

    });

};