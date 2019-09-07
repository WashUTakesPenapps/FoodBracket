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



var scaleVal = 1;
var y = windowDim.H/2;
var w = windowDim.W/9;
var tX = w/2;
var tY = 0;
let bracketSketch = function(p){
    function makeBracket(bracket){
        var x0 = bracket.X;
        p.fill("#000000");
        p.rect(x0,bracket.Y,bracket.W,lineWidth);
        p.rect(x0, bracket.Y+lineWidth,lineWidth,bracketHeight);
        p.rect(x0+bracket.W, bracket.Y, lineWidth, bracketHeight+lineWidth);
        bracketQueue.push(bracket);
    }
    function make(brackets, rowH, width){
        var x = width/2;
        if(brackets == 1){
            p.rect(x, rowH, lineWidth, bracketHeight);
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
    p.setup = function(){
        p.createCanvas(windowDim.W, windowDim.H);
        bracketNum = 0;
    }
    var scaleFactor = 2.7;
    p.draw = function(){
        p.background("rgb(255,255,255)");
        p.scale(scaleVal);
        p.translate(tX, tY);
        make(8, y, w);
    }
    var pressCount = 0;
    var brackets = 8;
    p.mousePressed = function(){
        p.redraw();
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
        else{
            tX = w/2;
            tY = 0;
            scaleVal = 1;
            y = windowDim.H/2;
            pressCount = 0;
        }
    }
}
let sketch1 = new p5(bracketSketch);
let boxSketch = function(p){
    var boxMargin = {
        top: 50,
        left: 50,
        right: 50,
        bottom: 50
    }
    var boxPadding = {
        top: 50,
        left: 50,
        right: 50,
        bottom: 50
    }
    var boxDim = {
        H: windowDim.H*0.8 - boxMargin.top - boxMargin.bottom,
        W: windowDim.W/2 - boxMargin.left - boxMargin.right
    }
    function leftBox(){
        p.rect(boxMargin.left, boxMargin.top, boxDim.H, boxDim.W);
        p.textSize(30);
        p.text("Name Goes Here", boxMargin.left + boxPadding.left, windowDim.H/2)
        p.text("4.5")
    }
    function rightBox(){
        p.rect(windowDim.W - boxDim.W + boxMargin.left + boxMargin.right, boxMargin.top, boxDim.H, boxDim.W);
    }
    function vsDraw(){
        var tSize = 60;
        p.textSize(tSize);
        p.text("VS", windowDim.W/2-tSize/2, windowDim.H/2);
        p.fill("#000000");
    }
    p.setup = function(){
        p.createCanvas(windowDim.W, windowDim.H);
    }
    p.draw = function(){
        leftBox();
        rightBox();
        vsDraw();
        clear();
    }
}
let sketch2 = new p5(boxSketch);
    // var storedResults = JSON.parse(localStorage.getItem("results"));
    // console.log(storedResults);

    // //name, photo, rating, price, radius

    // var photoSearch = new XMLHttpRequest();
    // photoSearch.open('GET', 'https://maps.googleapis.com/maps/api/place/photo?maxWidth=' + maxWidth + '&photoreference=' + photoId 
    // + '&key=' + apiKey);

    // if (this.readyState == 4 && this.status == 200) {
    //     var photo = JSON.parse(this.responseText);
    // } else if (this.status == 404) {
    //     // handle error
    // }

    // photoSearch.setRequestHeader("Content-Type", "application/json");
    // photoSearch.send();
