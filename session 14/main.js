// const y = () =>{
//     console.log(this)
//     console.log("test")
// }
// y()
// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }
// var modal = document.getElementById("myModal");


// var btn = document.getElementById("myBtn");


// var span = document.getElementsByClassName("close")[0];


// btn.onclick = function() {
//   modal.style.display = "block";
// }


// span.onclick = function() {
//   modal.style.display = "none";
// }


// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// const val = (msg) => prompt(msg);
// const x =val("Enter Nuber");
// const y =val("Enter Nuber");
// const op =val("Enter Nuber");
// const calculator =(val1,val2,ope) =>{
//     let result
//     if(ope=="+") result =add(val1,val2);
//     else if(ope=="-") result =sub(val1,val2);
//     else if(ope=="*") result =mul(val1,val2);
//     else if(ope=="/") result =div(val1,val2);
//         return result
// }
// const add=(x,y) => x+y 
// const sub=(x,y) => x-y 
// const mul=(x,y) => x*y 
// const div=(x,y) => x/y 




const val = (msg) => prompt(msg);
const x =val("Enter ");
const y =val("=");
const opeScop =val("");

const calculator =(val1,val2,ope) =>{
    let result
    if(ope=="+") result =add(val1,val2);
    else if(ope=="-") result =sub(val1,val2);
    else if(ope=="*") result =mul(val1,val2);
    else if(ope=="/") result =div(val1,val2);
        return result
}
const add=(x,y) => x+y 
const sub=(x,y) => x-y 
const mul=(x,y) => x*y 
const div=(x,y) => x/y 
