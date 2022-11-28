let nPennies = 0;
let nNickels = 0;
let nDimes = 0;
let nQuarters = 0;

function display() {
    totalElement = document.getElementById("totalvalue");
    pennyCounterElement = document.getElementById("pennycounter");
    nickelCounterElement = document.getElementById("nickelcounter");
    dimeCounterElement = document.getElementById("dimecounter");
    quarterCounterElement = document.getElementById("quartercounter");
    pennyCounterElement.innerHTML = "Pennies: " + nPennies;
    nickelCounterElement.innerHTML = "Nickels: " + nNickels;
    dimeCounterElement.innerHTML = "Dimes: " + nDimes;
    quarterCounterElement.innerHTML = "Quarters: " + nQuarters;
    //set coin values
    document.getElementById("pennyvalue").innerHTML = centToString(nPennies);
    document.getElementById("nickelvalue").innerHTML = centToString(nNickels * 5);
    document.getElementById("dimevalue").innerHTML = centToString(nDimes * 10);
    document.getElementById("quartervalue").innerHTML = centToString(nQuarters * 25);
    let val = (nPennies * 1) + (nNickels * 5) + (nDimes * 10) + (nQuarters * 25);
    totalElement.innerHTML = "Total: " + centToString(val);
}

function centToString(cents) {
    let valStr = "$" + Math.floor(cents/100) + ".";
    let valRight = (cents%100).toString();
    if(valRight.length < 2) {
        valRight = "0" + valRight;
    }
    valStr += valRight;
    return valStr;
}

function incrementCoin(coin) {
    if(coin == "penny") {
        nPennies++;
    }
    else if(coin == "nickel") {
        nNickels++;
    }
    else if(coin == "dime") {
        nDimes++;
    }
    else if(coin == "quarter") {
        nQuarters++;
    }
    display();
}

function decrementCoin(coin) {
    if(coin == "penny" && nPennies > 0) {
        nPennies--;
    }
    else if(coin == "nickel" && nNickels > 0) {
        nNickels--;
    }
    else if(coin == "dime" && nDimes > 0) {
        nDimes--;
    }
    else if(coin == "quarter" && nQuarters > 0) {
        nQuarters--;
    }
    display();
}

function setNewCoinCount(coin) {
    if(coin == "penny") {
        if(document.getElementById("pennyinput").value >= 0) {
            nPennies = document.getElementById("pennyinput").value;
            document.getElementById("pennyinput").value = "";
        }
    }
    else if(coin == "nickel") {
        if(document.getElementById("nickelinput").value >= 0) {
            nNickels = document.getElementById("nickelinput").value;
            document.getElementById("nickelinput").value = "";
        }
    }
    else if(coin == "dime") {
        if(document.getElementById("dimeinput").value >= 0) {
            nDimes = document.getElementById("dimeinput").value;
            document.getElementById("dimeinput").value = "";
        }
    }
    else if(coin == "quarter") {
        if(document.getElementById("quarterinput").value >= 0) {
            nQuarters = document.getElementById("quarterinput").value;
            document.getElementById("quarterinput").value = "";
        }
    }
    display();
}