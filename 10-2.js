function D2B(){
    var finalNumber = new Array(); 
    var getNumber = prompt("Please enter the number!"); 

    if (getNumber < 0){
        var useNumber = Math.abs(getNumber);
        // Main get
        while (useNumber != 0){
            finalNumber.unshift( useNumber % 2 ); 
            useNumber -= finalNumber[0]; 
            useNumber /= 2; 
        };
        // Users get number
        var printNumber = finalNumber.join(""); // Stick numbers together
        console.log(0 - printNumber); // Print
    } else {
        var useNumber = getNumber; 
        // Main get
        while (useNumber != 0){
            finalNumber.unshift( useNumber % 2 ); 
            useNumber -= finalNumber[0]; 
            useNumber /= 2; 
        };
        // Users get number
        var printNumber = finalNumber.join(""); // Stick numbers together
        console.log(printNumber); // Print
    }
}