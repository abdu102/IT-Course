    let needAge = 18;
    let age = document.getElementById("input").value;
    let z;
    
    let price = 5000;
    let number = document.getElementById("number").value;
    let main = price * number;

function age() {
    if ( age >= needAge) {

     document.getElementById("text").innerHTML = main  + " " + "sizga shuncha pul kerak boladi.";
     document.getElementById("box").classList.add("display");
     document.querySelector("body").style.background = "rgba(39, 179, 21, 0.668)";
     }
 
     else {
         z = needAge - age;
         document.getElementById("less").innerHTML = "Iltimos"+ " " + z + " " +"yildan keyin keling";
         document.getElementById("box").classList.remove("display");
         document.querySelector("body").style.background = "red";
     }
     
     
}
function salary() {
    if ( age >= needAge ) {
        console.log("salom")

    }
    else {
        document.getElementById("salary").classList.remove("display");
    }
}