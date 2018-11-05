//Get ISO week number
Date.prototype.getWeek = function () {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}

var weekNumber = (new Date()).getWeek();
//weekNumber = weekNumber - 3; //To test week inceases correclty
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var now = new Date();



function countDown() {
    if (dayNames[now.getDay()] === "Monday") {
        document.getElementById("countDown").innerHTML = "1";
        document.getElementById("day").innerHTML = " day";
    } 
    else if (dayNames[now.getDay()] === "Tuesday") {
        document.getElementById("in").style.display = "none";
        document.getElementById("today").style.display = "";

    }

    else if (dayNames[now.getDay()] === "Wednesday") {
        document.getElementById("countDown").innerHTML = "6";

    }

    else if (dayNames[now.getDay()] === "Thursday") {
        document.getElementById("countDown").innerHTML = "5";

    }
    else if (dayNames[now.getDay()] === "Friday") {
        document.getElementById("countDown").innerHTML = "4";

    }
    else if (dayNames[now.getDay()] === "Saturday") {
        document.getElementById("countDown").innerHTML = "3";

    }
    else if (dayNames[now.getDay()] === "Sunday") {
        document.getElementById("countDown").innerHTML = "2";

    }




}
countDown()

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
    document.getElementById("binImg").style.display = "flex";
    document.getElementById("binImg").src = "img/greenblue.png";
}

function allBins() {
    document.getElementById("binImg").style.display = "flex";
    document.getElementById("binImg").src = "img/brownblackgreen.png";
}

function onlyBlue() {
    document.getElementById("binImg").style.display = "flex";
    document.getElementById("binImg").src = "img/blue.png";
}