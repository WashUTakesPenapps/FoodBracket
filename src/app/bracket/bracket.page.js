var windowDim = {
    width: window.innerWidth,
    height: window.innerHeight,
    center: width/2
}
lineWidth = 10;

function makeBracket(bracket){
    p5.rect(bracket.X-(bracket.W/2),bracket.Y,bracket.W,lineWidth);
}
var maxLines = 8;
testPos = {
    X: 100,
    Y: 100,
    W: 10
}
makeBracket(testPos);