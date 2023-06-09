
// PIZZA SIZE ------------------------------//
function getReceipt() {
    // This initializes our string so it can get passed from function to function,
    // growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");

    for (var i = 0; i <sizeArray.length; i++) {
        if (sizeArray[i].checked) { // The if statement below executes whenever the input box is checked off
            var selectedSize = sizeArray[i].value;
            text1 = text1+ selectedSize + "<br>";
        }
    }

    // Checks the price of the pizza per piza size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    
    runningTotal = sizeTotal; // runningTotal would equal to the Price of the Pizza depending of its size
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: "+ text1);
    console.log("subtotal: $" + runningTotal+ ".00"); // Check Console to see the price of pizza 
    // these variables will get passed on to each function
    getTopping (runningTotal,text1);
    
};

// MEAT and VEGI TOPPINGS --------------------------//
function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j <toppingArray.length; j++) {
        if  (toppingArray[j].checked) {
            selectedTopping.push (toppingArray[j].value); //if topping is checked, the value will be pushed
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1= text1 + toppingArray[j].value + "<br>";
        }
    }
    
    // First topping is free, so however many topping box is checked it's always -1 from the price.
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1); 
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log ("total selected topping items: " +toppingCount) ;
    console.log (toppingCount + " topping -1 free topping = " + "$"+toppingTotal+".00");
    console.log ("topping text1: " + text1);
    console.log ("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3> TOTAL: <strong>$" + runningTotal+ ".00" + "</strong></h3>";

};
