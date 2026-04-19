console.log("hello")

//operator && || ! 
/*
for(let i = 1; i>=5; i= i+2){
  console.log(i)
}
*/
/*
initialization
condition
statement
let i = 1;
while(i <= 5){
  console.log("while loop : " + i)
  i++
}
*/


const mark = 20
// if (mark >= 33 && mark <= 39){
// console.log("d grad")
// } else if(mark >= 40){
//   console.log("c grad")
// }else{
//   console.log("you fail")
// }

// switch (true){
//   case (mark >= 33 && mark <= 39):
//     console.log("d grad")
//     break
//   case(mark >= 40):
//     console.log("c grad")
//     break
//     default: 
//     console.log("you are fail");
//   }


console.log(a)
var a = 10
let b = 20

function outer(){
  var outerVar = "I am from outer"
  console.log(outerVar)
  function inner(){
    var innerVar = "I am from inner"
    console.log(innerVar)
    function innerMost(){
      var innerMostVar = "I am from innerMost"
      console.log(innerMostVar)
    }
    innerMost()
  }
  inner()
}
outer()
