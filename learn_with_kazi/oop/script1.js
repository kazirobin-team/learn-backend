class Person {

  constructor(nam,age,pass){
   this.name = nam;
   this.age = age;
   let _pass = pass;
   this.checkPass = function(){
    return _pass
   }

  }
  greet(){
    console.log("Hello, my name is "+ this.name )
    if(this.checkPass()){
      console.log("Password is exist")
    }
  }
}
const parson1 = new Person("Robin1",22)
const parson2 = new Person("Robin2",23,124)
const parson3 = new Person("Robin3",24,125)
const parson4 = new Person("Robin4",25,126)
parson1.greet()
parson3.greet()

console.log(parson2.age)
console.log(parson3.age)
console.log(parson4.age)
