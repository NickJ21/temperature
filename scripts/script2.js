//creating the function
function multiplication(myNumber) { //myNumber is a local variable (scope of vars)
    console.log(myNumber * 5);
}

multiplication(3) //run/execute the function
multiplication(4)
multiplication(5)

function taxesCalculation() {
    var product = prompt("Enter the product's name");
    var price = Number(prompt("Enter the price"));
    var qty = Number(prompt("Enter the qty"));
    const taxes = 1.08;
    var subtotal = price * qty;
    var total = subtotal * taxes;

    console.log(product);
    console.log(subtotal);
    console.log(total);
    document.getElementById("products").innerHTML+=`
        <p> Name: ${product} </p>
        <p> Subtotal: ${subtotal} </p>
        <p> Total: ${total} </p>
    `;
}

//document.write("<p> Name:" + product+ "</p>" +"<p> Subtotal:" + subtotal + "</p>" + "<p>Total:"+total+"</p>"); THIS is just a reference for how it used to be done 
