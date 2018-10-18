// JavaScript source code
function getReceipt() {
    var text1 = "";
    var text2 = "";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
        text2 = text2 + sizeTotal + "<br>";
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
        text2 = text2 + sizeTotal + "<br>";
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
        text2 = text2 + sizeTotal + "<br>";
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
        text2 = text2 + sizeTotal + "<br>";
    }
    runningTotal = sizeTotal;
    getCrust(runningTotal, text1, text2);
};

function getCrust(runningTotal, text1, text2) {
    var crustTotal = 0;
    var crustArray = document.getElementsByClassName("crust");
    for (var k = 0; k < crustArray.length; k++) {
        if (crustArray[k].checked) {
            var selectedCrust = crustArray[k].value;
            text1 = text1 + selectedCrust + "<br>";
        }
    }
    if (selectedCrust === "Cheese Stuffed Crust") {
        crustTotal = 3;
    } else {
        crustTotal = 0;
    }
    runningTotal = (runningTotal + crustTotal);
    text2 = text2 + crustTotal + "<br>";
    getCheese(runningTotal, text1, text2);
};

function getCheese(runningTotal, text1, text2) {
    var cheeseTotal = 0;
    var cheeseArray = document.getElementsByClassName("cheese");
    for (var m = 0; m < cheeseArray.length; m++) {
        if (cheeseArray[m].checked) {
            var selectedCheese = cheeseArray[m].value;
            text1 = text1 + selectedCheese + "<br>";
        }
    }
    if (selectedCheese === "Extra Cheese") {
        cheeseTotal = 3;
    } else {
        cheeseTotal = 0;
    }
    runningTotal = (runningTotal + cheeseTotal);
    text2 = text2 + cheeseTotal + "<br>";
    getSauce(runningTotal, text1, text2);
};

function getSauce(runningTotal, text1, text2) {
    var sauceTotal = 0;
    var sauceArray = document.getElementsByClassName("sauce");
    for (var n = 0; n < sauceArray.length; n++) {
        if (sauceArray[n].checked) {
            var selectedSauce = sauceArray[n].value;
            text1 = text1 + selectedSauce + "<br>";
        }
    }
    if (selectedSauce === "No Sauce") {
        sauceTotal = 0;
    } else {
        sauceTotal = 0;
    }
    runningTotal = (runningTotal + sauceTotal);
    text2 = text2 + sauceTotal + "<br>";
    getMeats(runningTotal, text1, text2);
}; 

function getMeats(runningTotal, text1, text2) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats");
    for (var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
        }
    }
    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }
    runningTotal = (runningTotal + meatTotal);
    for (var j = 0; j < selectedMeat.length; j++) {
        text1 = text1 + selectedMeat[j] + "<br>";
        if (meatCount <= 1) {
            text2 = text2 + 0 + "<br>";
            meatCount = meatCount - 1;
        }
        else if (meatCount == 2) {
            text2 = text2 + 1 + "<br>";
            meatCount = meatCount - 1;
        }
        else {
            text2 = text2 + 1 + "<br>";
            meatCount = meatCount - 1;
        }
    }
    getVeggies(runningTotal, text1, text2);
};

function getVeggies(runningTotal, text1, text2) {
    var veggieTotal = 0;
    var selectedVeggie = [];
    var veggieArray = document.getElementsByClassName("veggies");
    for (var v = 0; v < veggieArray.length; v++) {
        if (veggieArray[v].checked) {
            selectedVeggie.push(veggieArray[v].value);

        }
    }
    var veggieCount = selectedVeggie.length;
    if (veggieCount > 1) {
        veggieTotal = (veggieCount - 1);
    } else {
        veggieTotal = 0;
    }
    runningTotal = (runningTotal + veggieTotal);
    for (var v = 0; v < selectedVeggie.length; v++) {
        text1 = text1 + veggieArray[v].value + "<br>";
        if (veggieCount <= 1) {
            text2 = text2 + 0 + "<br>";
            veggieCount = veggieCount - 1;
        }
        else if (veggieCount == 2) {
            text2 = text2 + 1 + "<br>";
            veggieCount = veggieCount - 1;
        }
        else {
            text2 = text2 + 1 + "<br>";
            veggieCount = veggieCount - 1;
        }
    }
    document.getElementById("showText1").innerHTML = "<strong>"+text1+"</strong>";
    document.getElementById("showText2").innerHTML = "<strong>"+text2+"</strong>";
    document.getElementById("totalPrice2").innerHTML = "<strong><h3>$" + runningTotal + ".00" + "</h3></strong>";
};

//This code clears the form back to defaults and sets the cart opactiy to 0.
function clearAll() {
    document.getElementById("frmMenu").reset();
    document.getElementById("cart").style.opacity = 0;
};