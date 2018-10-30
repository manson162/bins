//Get ISO week number
Date.prototype.getWeek = function () {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}

var weekNumber = (new Date()).getWeek();
//weekNumber = weekNumber + 2; //To test week inceases correclty
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var now = new Date();
document.write(dayNames[now.getDay()] + " (" + weekNumber + ").");


//Display bins due to go out

switch (weekNumber) {
    case 38:
        blueGreen()
        break;
    case 39:
        allBins()
        break;
    case 40:
        blueGreen()
        break;
    case 41:
        allBins()
        break;
    case 42:
        blueGreen();
        break;
    case 43:
        allBins()
        break;
    case 44:
        onlyBlue()
        break;
    case 45:
        allBins()
        break;
    case 46:
        onlyBlue()
        break;
    case 47:
        allBins()
        break;
    case 48:
        onlyBlue()
        break;
    case 49:
        allBins()
        break;
    case 50:
        onlyBlue()
        break;
    case 51:
        allBins()
        break;
    case 52:
        onlyBlue()
        break;

}

// Bin combos

function blueGreen() {
    document.getElementById("blueBin").style.display = "flex";
    document.getElementById("greenBin").style.display = "flex";
}

function allBins() {
    document.getElementById("blackBin").style.display = "flex";
    document.getElementById("brownBin").style.display = "flex";
    document.getElementById("greenBin").style.display = "flex";
}

function onlyBlue() {
    document.getElementById("blueBin").style.display = "flex";
}