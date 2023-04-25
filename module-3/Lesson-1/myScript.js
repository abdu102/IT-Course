function age() {
   let needAge = 18;
   let age = document.getElementById("input").value;
   let z;

   

   if ( age >= needAge) {
    let price = 5000;
    let number = document.getElementById("number").value;
    let main = price * number;
    document.getElementById("text").innerHTML = main;
    document.getElementById("box").classList.add("display");
    document.querySelector("body").style.background = "rgba(39, 179, 21, 0.668)";
    }

    else {
        z = needAge - age;
        document.getElementById("less").innerHTML = "Iltimos"+ " " + z + " " +"yildan keyin keling";
        document.querySelector("body").style.background = "red";
       }
    
}
   
