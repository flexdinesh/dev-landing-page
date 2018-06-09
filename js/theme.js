var colorCombos = [['#43A047', '#FAFAFA'], ['#485564', '#FAFAFA'], ['#303F9F', '#FAFAFA'], ['#AF3D4E', '#FAFAFA'], ['#FAFAFA', '#0277BD'], ['#FFEB3B', '#1E1E1E']]

var mainElement = document.getElementsByTagName("main")[0];
var linkElememts = document.getElementsByClassName("fab")

var colorPaletteIndex = Math.floor(Math.random() * colorCombos.length);
var colorPalette = colorCombos[colorPaletteIndex];


var backgroundColorIndex = Math.floor(Math.random() * colorPalette.length);
var backgroundColor = colorPalette[backgroundColorIndex]

var fontColor = colorPalette[colorPalette.length - backgroundColorIndex - 1]


var mainStyles = {
    background: backgroundColor,
    color: fontColor
}

var elementStyles = {
    color: fontColor
}

Object.assign(mainElement.style, mainStyles)


Object.keys(linkElememts).forEach(function (key) {
    Object.assign(linkElememts[key].style, elementStyles)
});