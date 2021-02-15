console.log('test');


let sumbitButton = document.getElementById("submitbutt");

let name = document.getElementById("name");
let age = document.forms.moodForm.answer;
let feelings = document.querySelectorAll(".checkbox")
let goodThingOne = document.forms.moodForm.onegoodthing;
let goodThingTwo = document.getElementById("write");


function sumbit() {
    if (name.value === '') {
        alert("Please enter your name")
    }

    if (age.value === "") {
        alert("Please tick a age button");
    }
    if (feelings.value ==="") {
        alert("Please tick a button");
    }
    if (goodThingOne.value=== "") {
        alert("Please write about one thing");
    }
    if (goodThingTwo.value=== "") {
        alert("Please write about one thing");
    }
}

let slider = document.getElementById("rating");
let output = document.getElementById("output");

output.innerHTML = slider.value;

slider.oninput= function(){
    output.innerHTML = this.value;
}
    


function validateText(nameInput) {
    let RegExp = /[a-z]/gi;
    let okay = RegExp.exec(nameInput.value)
   if(!okay){
        alert("Please only use letters")
    } 
    
}
    
    

    
   


sumbitButton.addEventListener("click", () => {
    sumbit();
    validateText(name);
      validateText(goodThingOne);
    validateText(goodThingTwo);
    
   
})
