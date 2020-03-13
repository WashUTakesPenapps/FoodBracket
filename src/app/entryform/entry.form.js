	// apiKey = "AIzaSyDVLzXVT1vBPMgHF-x3MOXQlMJiVlryDj8"

window.onload = function() {
    document.getElementById("makeBracket").addEventListener("submit", function(event) {
        event.preventDefault();

        var restaurantResults = new Array(8);

        var queryString = queryId.value; //should sanitize later
        var maxPrice = maxId.value; //0 to 4
        var radiusString = radiusId.value; //0 to 50,000 m

        var data = {
            radius: radiusString,
            query: queryString,
            minPriceLevel: 0,
            maxPriceLevel: maxPrice
        };

        var url = new URL('https://maps.googleapis.com/maps/api/place/details/output?parameters');

        url.search = new URLSearchParams(data).toString();

        fetch(url, {
            method: "GET",
            headers: { "content-type": "application/json" }
        })
        // .then(response => response.text())
        // .then(text => console.log(text))
        .then(response => response.json())
        .then(function(data){
            if (data.success){ 
                for (var i = 0; i < 8; i++) {
                    restaurantResults[i] = results[i].place_id;
                }
            }
        })
        .catch(error => console.error("Error:",error))
    });
};