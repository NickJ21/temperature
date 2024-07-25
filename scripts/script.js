var num1 = prompt("Enter your number");
var num2 = prompt("Enter your number2:");
var operation = prompt("Menu: 1. Sum - 2. Sub - 3. Div - 4.Mult");

if (operation=="1"){
    var sum=Number(num1)+Number(num2); //sum operation
    document.write(num1 + " + " + num2 + " = " +sum); //display the result
}
if (operation=="2"){
    var sub=Number(num1)-Number(num2); //sub operation
    document.write(num1 + " - " + num2 + " = " +sub); //display the result
}
if (operation=="3"){
    var div=Number(num1)/Number(num2);//div operation
    document.write(num1 + " / " + num2 + " = " +div); //display the result
}
if (operation=="4"){
    var mult=Number(num1)*Number(num2); //mult operation
    document.write(num1 + " * " + num2 + " = " +mult); //display the result
}