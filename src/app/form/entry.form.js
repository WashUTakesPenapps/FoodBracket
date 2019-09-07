document.getElementById("").addEventListener("submit", function(event) {
    event.preventDefault();


    var placeSearch = new XMLHttpRequest();
    var apiKey = AIzaSyDVLzXVT1vBPMgHF-x3MOXQlMJiVlryDj8;

    placeSearch.open('GET', 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + input + '&inputtype=textquery&fields=...&key=' + apiKey)

})