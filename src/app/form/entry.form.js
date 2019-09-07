document.getElementById("").addEventListener("submit", function(event) {
    event.preventDefault();


    var placeSearch = new XMLHttpRequest();
    var apiKey = AIzaSyDVLzXVT1vBPMgHF-x3MOXQlMJiVlryDj8;
    var queryString = queryId.value; //should sanitize later
    var minPrice = minId.value; //0 to 4
    var maxPrice = maxId.value; //0 to 4
    var radius = radiusId.value; //0 to 50,000 m

    placeSearch.open('GET', 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + queryString + '&minprice=' + minPrice
     + '&maxprice=' + maxPrice + '&opennow=true&radius=' + radius + '&key=' + apiKey);

    placeSearch.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var results = JSON.parse(this.responseText);
            
        }
    }

})