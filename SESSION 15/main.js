// [] array 
// {} object

const log = console.log;


// let arr = [1,true,"test",9.6]
// // console.log(arr.length);







// for(x in arr){
//     log(arr[x])
// }

//ده اخر طريقه لظهار ال arr 
// arr.forEach((element ,ind ,a) => {
//     log(ind ," - " ,element ," - " , a)
// });


// const names = [
//   "Emma", "Liam", "Olivia", "Noah", "Ava",
//   "William", "Sophia", "James", "Isabella", "Benjamin",
//   "Mia", "Elijah", "Charlotte", "Lucas", "Amelia",
//   "Mason", "Harper", "Ethan", "Evelyn", "Alexander"
// ];

// log(names)
// names.unshift("moree")
// log(names)


// const uesr ={
//   name: "omar",
//   age:40,
//   email:"omar@test,com",
//   print: function() {
//     log(this)
//   }
// }
// uesr.ay("text")

// log(user)


// let x = document.getElementsByTagName("span")
// console.log(x)
// x[1].textContent="welcome"; 
// x = document.getElementsByClassName("test")
// console.log(x)
// x = document.getElementById("test")
// console.log(x)
// let x = document.querySelector("d-flex justify-content-between")
// // console.log(x)


// let div = document.querySelector("#test")
// div.textContent += " all"
   

// console.log(div.textContent)
// console.log(div.innerHTML)
// console.log(div.innerText)
// div.innerHTML = "<h1>hello</h1>"
// div.innerHTML = "<h1>hello</h1>"

const text=document.querySelector(".titel")


const myBtn=document.querySelector("#btn-btn")
myBtn.addEventListener("click", function(){

 text.classList.toggle("bg-info")
 text.classList.toggle("text-secondary")

})