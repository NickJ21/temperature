function convertTemperatureRange(){
    let startValue=Number(prompt("Please enter starting value"));
    let endValue=Number(prompt("Please enter ending value"));
    let scale=prompt("Is the temperature in C or F?");

    for(let i=startValue; i<=endValue; i++){
        if(scale=="C"){
            document.getElementById("temp").innerHTML+=`<p>${((i* 9/5)+32)}</p>`;
        }else if(scale=="c"){
            document.getElementById("temp").innerHTML+=`<p>${((i* 9/5)+32)}</p>`;
        }else if(scale=="F"){
            document.getElementById("temp").innerHTML+=`<p>${((i-32)*5/9)}</p>`;
        }else if(scale=="f"){
            document.getElementById("temp").innerHTML+=`<p>${((i-32)*5/9)}</p>`;
        }
    }
    for(let i=startValue; i>=endValue; i--){
        if(scale=="C"){
            document.getElementById("temp").innerHTML+=`<p>${((i* 9/5)+32)}</p>`;
        }else if(scale=="c"){
            document.getElementById("temp").innerHTML+=`<p>${((i* 9/5)+32)}</p>`;
        }else if(scale=="F"){
            document.getElementById("temp").innerHTML+=`<p>${((i-32)*5/9)}</p>`;
        }else if(scale=="f"){
            document.getElementById("temp").innerHTML+=`<p>${((i-32)*5/9)}</p>`;
        }
    }
}