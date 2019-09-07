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
lineWidth = windowDim.W/150;
bracketHeight = windowDim.H/8;
var bracketQueue = [];
function makeBracket(bracket){
    var x0 = bracket.X;
    fill("#000000");
    rect(x0,bracket.Y,bracket.W,lineWidth);
    rect(x0, bracket.Y+lineWidth,lineWidth,bracketHeight);
    rect(x0+bracket.W, bracket.Y, lineWidth, bracketHeight+lineWidth);
    bracketQueue.push(bracket);
}

function make(brackets, rowH, width){
    var x = width/2;
    if(brackets == 1){
        rect(x, rowH, lineWidth, bracketHeight);
        return;
    }
    else{
        make(brackets/2,rowH-bracketHeight, width*2);
    }
    for(var i = 0; i < brackets/2; i++){
        var newBracket = {
            X: x,
            Y: rowH,
            W: width
        }
        makeBracket(newBracket);
        x += width*2;
    }
}

var scaleVal = 1;
var y = windowDim.H/2;
var w = windowDim.W/9;
var tX = w/2;
var tY = 0;
function setup(){
    createCanvas(windowDim.W, windowDim.H);
    bracketNum = 0;
}
var scaleFactor = 2.7;
function draw(){
    background("rgb(255,255,255)");
    scale(scaleVal);
    translate(tX, tY);
    make(8, y, w);
}
var pressCount = 0;
var brackets = 8;
function mousePressed(){
    redraw();
    background("#FFFFFF");
    bracketMover(pressCount);
    pressCount++;
}
function bracketMover(pressCount){
    if(pressCount == 0){
        scaleVal = scaleVal*scaleFactor;
        y = y/scaleVal;
    }
    else if(pressCount >= 1 && pressCount < brackets/2){
        tX -=w*2;
    }
    else if(pressCount == brackets/2){
        tX = w/2;
        tY = 0;
        scaleVal = 1;
        y = windowDim.H/2;
    }
    else if(pressCount == brackets/2+1){
        scaleVal = scaleVal*2;
        tX = w/4;
        y = y/scaleVal;
        
    }
    else if(pressCount == brackets/2+2){
        tX -=w*4;
    }
    else if(pressCount == brackets/2+3){
        tX = w/2;
        tY = 0;
        scaleVal = 1;
        y = windowDim.H/2;
    }
    else if(pressCount == brackets/2+4){
        tY += bracketHeight;

    }
}

window.onload = function() {
    var storedIds = new Array(8);
    var storedPlaces = new Array(0);
    var service;

    for (var j = 0; j < 8; j++) {
        storedIds[j] = localStorage.getItem(j);

        var request = {
            placeId: storedIds[j],
            fields: ['name', 'rating', 'formatted_address', 'website', 'price_level', 'opening_hours', 'place_id', 'vicinity']
        };
            
        service = new google.maps.places.PlacesService(document.createElement('div'));
        service.getDetails(request, callback);
    
        function callback(place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                storedPlaces.push(place);
            }
        }
    }
    // var temp = google.maps.places.PlacePhoto.getUrl(storedPlaces[0]);

}