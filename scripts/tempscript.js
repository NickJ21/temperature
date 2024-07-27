function tempCalculation(){
    var celsius=Number(prompt("Enter the Temperature in Celsius"));
    var fahrenheit=(celsius*9/5)+32;

    console.log(celsius, fahrenheit)
    document.getElementById("temp").innerHTML+=`
    <p>The conversion of Celsius ${celsius} to Fahrenheit is ${fahrenheit} </p>
    `
}
