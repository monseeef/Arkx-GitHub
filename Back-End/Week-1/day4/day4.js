// Task 1 : Warm up !

let person = {
  firstname: "Monsif",
  lastname: "El",
  age: 27,

  get fullname() {
    return this.firstname + " " + this.lastname;
  },

  set fullname(f) {
    const parts = f.split(" ");
    this.firstname = parts[0];
    this.lastname = parts[1];
  },
};

console.log(person.fullname);
person.fullname = "Mono lll";
console.log(person.fullname);

// Task 2 : Are you Older Than me ?

class Person {
    constructor (name , age){
        this.name = name;
        this.age = age;
    }

    compareAge (){
        if (age ) {
            
        }
    }
}
