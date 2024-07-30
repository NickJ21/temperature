function practice(){
    let num1=20;
    let num2=20;

    if(num1>num2){
        console.log("the num1 is greater than num2")
    }else if(num1<num2){
        console.log("the num1 is less than num2")
    }else{
        console.log("the numbers are equal")
    }
}
function license(){
    let age= Number(prompt("Please enter your age"))
    if(age>18){
        document.getElementById("license").innerHTML+=`
    <p>Congratulations! You can get your driving license!"</p>
    `
    }else if(age<18){
        document.getElementById("license").innerHTML+=`
    <p>Sorry, you are too young to get a driving license."</p>
    `
    }else{
        document.getElementById("license").innerHTML+=`
    <p>Congratulations! You can get your driving license!"</p>
    `
    }
    
}

function random(){
    let randomNumber=Math.floor(Math.random()*10)+1;
    var userNumber=Number(prompt("Guess a number between 1-10"));
    if(userNumber==randomNumber){
        console.log("you are correct")
    }else{
        console.log("you are wrong the answer was: " + randomNumber)
    }
}

//Database simulation
let userName="nsjohnson3";
let password="test1234";

function login(){
//get the uname and pass from the user
    let uname=prompt("Enter your user name:");
    let pass=prompt("Enter your password");
//compare the inputs with the DB data
    if(uname==userName && pass==password){
        document.getElementById("results").innerHTML=("Welcome to the system " + uname)
    }else{
        document.getElementById("results").innerHTML=("Invalid Credentials")
    }

}