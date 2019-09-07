var windowDim = {
    W: window.innerWidth,
    H: window.innerHeight,
    center: window.innerWidth/2
};
var canvasMargin = {
    W: 100,
    H: 100
};
var canvasMake = {
    W: windowDim.W,
    H: windowDim.H
};
lineWidth = 10;
bracketHeight = 50;
function makeBracket(bracket){
    var x0 = bracket.X-(bracket.W/2);
    fill("#000000");
    rect(x0,bracket.Y,bracket.W,lineWidth);
    rect(x0, bracket.Y+lineWidth,lineWidth,bracketHeight);
    rect(x0+bracket.W-lineWidth, bracket.Y+lineWidth, lineWidth, bracketHeight);
}

function make(brackets, rowH, marginW){
    var width = (canvasMake.W - 2*marginW)/(brackets-1);
    var x = marginW + width/2;
    for(var i = 0; i < brackets; i++){
        var newBracket = {
            X: x,
            Y: rowH,
            W: width
        }
        makeBracket(newBracket);
        x += width*2;
    }
    if(brackets == 1){
        rect(x, rowH, lineWidth, bracketHeight);
        return;
    }
    else{
        make(brackets/2,rowH-bracketHeight,marginW+width/2-lineWidth/4);
    }
}

function setup(){
    createCanvas(windowDim.W, windowDim.H);
}
function draw(){
   make(16, 400, 100);
}

    var storedResults = JSON.parse(localStorage.getItem("results"));
    console.log(storedResults);

    //name, photo, rating, price, radius

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
