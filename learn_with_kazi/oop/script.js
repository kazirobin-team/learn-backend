class Person {
  #name    //abstraction
  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }

  calling(names,a,b){
      this.result = a+b //encapsulation
    return "I am " + names + " "+ this.result
  }
}

const user1 = new Person("robin",22)

class Animal extends Person{  //inheritance
  constructor(name, age,color){
    super(name, age)
    this.color = color
  }
  sound(){
     return console.log(this.color + " color "+ this.age + " meow")
  }
  calling(name){  //polymorphism.
    
     return "I am is " + name + " "
  }
}

const animal1 = new Animal("cute",2,"white")
// animal1.sound()
console.log(animal1.calling("cute"))


// console.log(user1.calling("robin",4,5))