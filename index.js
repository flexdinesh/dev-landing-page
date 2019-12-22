var colorCombinationsAvailable = [['#43A047', '#FAFAFA'], ['#485564', '#FAFAFA'], ['#303F9F', '#FAFAFA'], ['#AF3D4E', '#FAFAFA'], ['#FAFAFA', '#0277BD'], ['#FFEB3B', '#1E1E1E']]

var mainBackground = document.getElementsByTagName("main")[0];
var linkElememts = document.getElementsByClassName("fab")

var colorPaletteIndex = Math.floor(Math.random() * colorCombinationsAvailable.length);
var colorPalette = colorCombinationsAvailable[colorPaletteIndex];

mainBackground.style.background = colorPalette[0] ;
mainBackground.style.color = colorPalette[1] ;

Object.keys(linkElememts).forEach((key) => {
    linkElememts[key].style.color = colorPalette[1];
}); 
