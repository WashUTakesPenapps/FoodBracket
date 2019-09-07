
var apiKey = AIzaSyDVLzXVT1vBPMgHF-x3MOXQlMJiVlryDj8;

var placeId = resultsArray.placeId;

var detailsSearch = new XMLHttpRequest();
detailsSearch.open('GET', 'https://maps.googleapis.com/maps/api/place/details/json?placeid=' + placeId +
'&fields=name,rating,formatted_phone_number,formatted_address,rating,price_level,reviews,url,website&key=' + apiKey);

if (this.readyState == 4 && this.status == 200) {
    var details = JSON.parse(this.responseText);

    //if website doesn't exist, give the Google url
} else if (this.status == 404) {
    // handle error
}

detailsSearch.setRequestHeader("Content-Type", "application/json");
detailsSearch.send();