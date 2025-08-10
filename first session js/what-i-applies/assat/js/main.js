x=5
console.log(typeof x)
x= "55"
console.log(typeof x)
// let تحترم ال {}
// لاكن ال var لا تحترم {}
// const مينفعش اقرار القيمه بتاعته 
// طلما انا بتعامل مع قميه مش هتغير يبقا اعتمد مع const 
// ولو القيمه هتغير يبقا  let

    
// for احسن wheil علشان منظمه اكتر 


// math
// + - * ** / %

// assignment
// = += -= /= *=

// increment .. decment post pre- fixe  قبل وبعد 

// logical
// && || ! ^

// ternery opperator
//  let x= 5
//  let result = (x==5)? (x==5) 3:4
 x =1998
 switch(x%12){
    case 0: console.log("rat ");break;
    case 1: console.log("ox");break;
    case 2: console.log("tiger");break;
    case 3: console.log("hare");break;
    case 4: console.log("dragom");break;
    case 6: console.log("sijnake");break;
    case 7: console.log("horse");break;
    case 8: console.log("RAM");break;
    case 9: console.log("monkey");break;
    case 10: console.log("DOG");break;
    case 11: console.log("PIg");break;
 }



// //  loops

// let data 
// do{
//    data= prompt("Entar name a value")
// }while(data!="omar")


    for(let i=1;i<=10;i+=3){
        if(i==4) break
        console.log("hello",i)
    }