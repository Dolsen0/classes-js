class Human {
    name = ""
    constructor(name) {
        this.name = name
    }
    sayHi() {
        return `my name is ${this.name}`
    }
}
class Teacher extends Human {
    currentlyTeaching = "yes"
    sayHi() {
        return `Hi, im professor ${this.name}`
    }
}
class Student extends Human{
    grade = 100
}

let student1 = new Student("Bobby")
let teacher1 = new Teacher("Jennifer")

console.log(`${student1.name} received ${student1.grade} on the test`)
console.log(teacher1.sayHi())