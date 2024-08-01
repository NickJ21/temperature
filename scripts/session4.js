let students = ["Mike", "Brett", "Kevin", "Ryan", "Emilio", "Juan"]

for (let i = 0; i <= 5; i += 1) {
    document.write("<p>" + students[i] + "</p>")
}


function multiTable() {
    let userNum = Number(prompt("Enter the mult table"));
    let start = Number(prompt("enter the start number"));
    let end = Number(prompt("enter the stop number"));
    for (let i = start; i <= end; i++) {
        console.log(`${i} x ${userNum} = ${i * userNum}`)
    }
}

//create a loop that displays the number 1 to 100; the user will enter a number and the screen will write "I found it" instead of the number

function challenge() {
    let userNum = Number(prompt("please enter a number to be found"));
    for (let i = 1; i <= 100; i++) {
        if (i == userNum) {
            console.log("i found it")
        }
        else {
            console.log(i)
        }
    }
}

let ages = [22,35,20,43,37,33,51,27];//array
//the array[ 0, 1, 2, 3, 4, 5, 6, 7]

//create a function to display the ages on the console

function ageDisplay() {
    let total = 0;
    for (let i = 0; i < ages.length; i++) {
        total = total + ages[i]
    }
    console.log(total);
    console.log(total/ages.length);
}