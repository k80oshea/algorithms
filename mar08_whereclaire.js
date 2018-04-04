//pg33 Claire is Where?
var xClaire = 12;
var yClaire= 34;

function reset() {
    xClaire = 0;
    yClaire = 0;
}
function moveBy(xOffset, yOffset) {
    xClaire += xOffset;
    yClaire += yOffset;
}
function xLocation() {
    return xClaire;
}
function yLocation() {
    return yClaire;
}
function distanceFromHome() {
    var x = Math.abs(xClaire);
    var y = Math.abs(yClaire);
    return x+y;
}