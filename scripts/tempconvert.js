function convertTemperature(){
    let userNum= Number(prompt("Please enter the temperature"));
    let tempType= prompt("Is the temperature in C or F?");
    let celToFar= ((userNum*9/5)+32);
    let farToCel= ((userNum-32)*5/9);

    if(tempType=="C"){
        document.getElementById("temp").innerHTML=`
        <p>The conversion of ${userNum} degrees Celsius to Fahrenheit is ${celToFar} degrees </p>
        `;
    }else if(tempType=="c"){
        document.getElementById("temp").innerHTML=`
        <p>The conversion of ${userNum} degrees Celsius to Fahrenheit is ${celToFar} degrees </p>
        `;
    }else if(tempType=="F"){
        document.getElementById("temp").innerHTML=`
        <p>The conversion of ${userNum} degrees Fahrenheit to Celsius is ${farToCel} degrees </p>
        `;
    }else if(tempType=="f"){
        document.getElementById("temp").innerHTML=`
        <p>The conversion of ${userNum} degrees Fahrenheit to Celsius is ${farToCel} degrees </p>
        `
    }else{
        document.getElementById("temp").innerHTML=`
        <p>The temperature must be in C or F, please enter again </p>
        `
    }
}
