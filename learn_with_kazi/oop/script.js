class Person {
  #name
constructor(name,age,gender){
  this.#name =  name;
  this.age = age;
  this.gender = gender
}
//method
 call(name ){
 if(name = this.#name){
  console.log("the name is correct",name,this.#name)
 }
}
}

class Animal extends Person {
  constructor(name,age,gender,color){
    super(name,age,gender)
    this.color = color
  }
  call(){
    console.log("color " + this.color + " name " + name)
  }
}
const user1 = new Person("robin",20)
const animal1 = new Animal("dog",10,"mele","red")
animal1.call()
user1.call("robin")
console.log(user1.age)