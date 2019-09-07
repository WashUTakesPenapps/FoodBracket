document.getElementById("").addEventListener("submit", function(event) {
    event.preventDefault();


    var placeSearch = new XMLHttpRequest();
    var apiKey = AIzaSyDVLzXVT1vBPMgHF-x3MOXQlMJiVlryDj8;
    var queryString = queryId.value; //should sanitize later
    var maxPrice = maxId.value; //0 to 4
    var radius = radiusId.value; //0 to 50,000 m

    placeSearch.open('GET', 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + queryString + '&maxprice=' 
        + maxPrice + '&opennow=true&radius=' + radius + '&key=' + apiKey);

    placeSearch.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var resultsArray = JSON.parse(this.responseText); //this is an array though-- so these variables must be changed
            //implement a HashTable maybe? so that you can delete things quickly
            //can pass this array to the bracket js page using session storage-- look on the website
            //details gives 10 photos, search gives 1 photo
            var restaurantResults = new Set();
            for (i = 0; i < 8; i++) {
                restaurantResults.add(resultsArray[i]);
            }

            localStorage.setItem("results", JSON.stringify(restaurantResults));

            // var photoId = resultsArray.photo_reference;
            // var maxWidth = resultsArray.width;
            // var restaurantName = resultsArray.name;
            // var placeId = resultsArray.placeId;
            // var rating = resultsArray.rating;
        } else if (this.status == 404) {
            //handle error
            
        }

        placeSearch.setRequestHeader("Content-Type", "application/json");
        placeSearch.send();
    }

})