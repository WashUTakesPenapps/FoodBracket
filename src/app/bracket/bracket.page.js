
    var photoSearch = new XMLHttpRequest();
    photoSearch.open('GET', 'https://maps.googleapis.com/maps/api/place/photo?maxWidth=' + maxWidth + '&photoreference=' + photoId 
    + '&key=' + apiKey);

    if (this.readyState == 4 && this.status == 200) {
        var photo = JSON.parse(this.responseText);
    } else if (this.status == 404) {
        // handle error
    }

    photoSearch.setRequestHeader("Content-Type", "application/json");
    photoSearch.send();