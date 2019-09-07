document.getElementById("").addEventListener("submit", function(event) {
    event.preventDefault();


    var googlePlaces = new XMLHttpRequest();
    var apiKey = AIzaSyDVLzXVT1vBPMgHF-x3MOXQlMJiVlryDj8;

    // https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number&key=YOUR_API_KEY

    googlePlaces.open('GET', 'https://maps.googleapis.com/maps/api/place/details/json?placeid=' + place_id + "&fields=name,rating,formatted_phone_number&key=" + apiKey);



})